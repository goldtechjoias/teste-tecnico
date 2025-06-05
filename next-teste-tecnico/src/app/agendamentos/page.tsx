'use client'

import { useQuery } from '@tanstack/react-query'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type Agendamento = {
  nome: string
  email: string
  data: string
}

export default function AgendamentosPage() {
  const { data, isLoading, isError } = useQuery<Agendamento[]>({
    queryKey: ['agendamentos'],
    queryFn: async () => {
      const res = await fetch('http://localhost:3333/appointments/all')
      if (!res.ok) throw new Error('Erro ao buscar agendamentos')
      return res.json()
    },
  })

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f4f4f4' }}>
      <div style={{ background: '#fff', padding: '32px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          Lista de Agendamentos
        </h1>

        {isLoading ? (
          <p style={{ textAlign: 'center', color: '#666' }}>Carregando agendamentos...</p>
        ) : isError ? (
          <p style={{ textAlign: 'center', color: 'red' }}>Erro ao carregar os agendamentos.</p>
        ) : (
          <Table style={{ width: '100%', border: '1px solid #ddd' }}>
            <TableHeader>
              <TableRow>
                <TableHead style={{ background: '#f0f0f0' }}>Nome</TableHead>
                <TableHead style={{ background: '#f0f0f0' }}>Email</TableHead>
                <TableHead style={{ background: '#f0f0f0' }}>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((agendamento, index) => (
                <TableRow key={index}>
                  <TableCell>{agendamento.nome}</TableCell>
                  <TableCell>{agendamento.email}</TableCell>
                  <TableCell>
                    {new Date(agendamento.data).toLocaleDateString('pt-BR')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  )
}
