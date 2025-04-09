# 📋 Tarefa para o candidato:

1. Criar um formaulario com campos:

- Nome
- Email
- Data(date picker)

2. Ao enviar o formulario:

- Enviar os dados via POST para http://localhost:3333/appointments
- Validar campos obrigatórios (não deixar enviar vazio)

3. Exibir a lista de agendamentos logo abaixo:

- Buscar via GET http://localhost:3333/appointments
- Exibir nome, email e data de cada agendamento

## Tecnologias esperadas (no front):

- Typescript
- zod (validação)
- shadcn/ui para o formulário (Input, Button, etc.)
- fetch para consumo da API
- React Query para busca de dados

### Mock visual (exemplo bem simples):

[ Nome : _____________ ]
[ Email : _____________ ]
[ Data : ___/___/____ ]
[ Agendar (botão) ]

--- Lista de Agendamentos ---
• João - joao@email.com - 2025-04-10
• Maria - maria@email.com - 2025-04-12

# Objetivo pro candidato no back:

### Implementar as rotas de agendamento:

- GET /appointments → listar todos os agendamentos
- POST /appointments → criar um novo agendamento com validação

## Estrutura do backend (base)

```
/backend
├── prisma/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ │ └── AppointmentController.ts
│ ├── services/
│ │ └── AppointmentService.ts
│ ├── routes/
│ │ └── appointments.routes.ts
│ └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

```

## Tarefa prática para o candidato (exemplo):

- Implementa rotas de GET e POST dos agendamentos
- Adiciona validação (pode ser com Zod ou manual)
- Testa localmente com o front criado
