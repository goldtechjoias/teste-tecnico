'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'

const schema = z.object({
  nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
  email: z.string().email('Email inválido'),
  data: z.string().min(1, 'Informe a data'),
})

type FormData = z.infer<typeof schema>

export default function NovoAgendamento() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch('http://localhost:3333/appointments/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Erro ao agendar')
      return res.json()
    },
  })

  const onSubmit = (data: FormData) => {
    mutation.mutate(data)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f4f4f4' }}>
      <div style={{ background: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          Novo Agendamento
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'grid', gap: '16px' }}>
          <div>
            <input
              type="text"
              placeholder="Nome"
              {...register('nome')}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.nome && <p style={{ color: 'red', marginTop: '4px' }}>{errors.nome.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.email && <p style={{ color: 'red', marginTop: '4px' }}>{errors.email.message}</p>}
          </div>
          <div>
            <input
              type="date"
              {...register('data')}
              style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            {errors.data && <p style={{ color: 'red', marginTop: '4px' }}>{errors.data.message}</p>}
          </div>
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#4f46e5',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {mutation.isPending ? 'Agendando...' : 'Agendar'}
          </button>
        </form>
        {mutation.isSuccess && <p style={{ color: 'green', marginTop: '16px', textAlign: 'center' }}>Agendado com sucesso!</p>}
        {mutation.isError && <p style={{ color: 'red', marginTop: '16px', textAlign: 'center' }}>Erro ao agendar.</p>}
      </div>
    </div>
  )
}
