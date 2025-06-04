# 📋 Tarefa para o candidato:

## Conhecimentos Necessários Front-end:

- Nextjs 14 (app router)
- Tailwind
- TypeScript
- React Query
- React Hook Form
- Ferramentas de validação de dados (Recomendado o Zod)

## Conhecimentos Necessários Back-end(api):

- Nodejs 20+
- TypeScript
- Programação Orientada a Objetos (POO)
- PrismaORM
- Ferramentas de validação de dados (Recomendado o Zod)

### Importante!!!

- Caso não tenha esses conhecimentos, por favor pare o teste, porque isso ficará claro no dia a dia do trabalho e será somente uma grande perca de tempo.

### Tempo do teste: 2 horas.

## FRONT-END

Para o front-end foi sugiro verificar o package.json e verificar o que ja está instalado,
a pasta /components/ui ja tem todos os componentes do shadcnui para evitar perca de tempo com estilização.

1. Criar um formulário com campos:

- Nome
- Email
- Data(date picker)

2. Salvar os dados do formulário no banco de dados.

- Rota POST para http://localhost:3333/appointments
- Validar dados antes do envio. (validação de tipo dos dados)
- A função de POST é sugerido que utilize o ReactQuery
- O controle de formulário é sugerido o uso do React Hook Form.

3. Exibir a lista de agendamentos logo abaixo:

- Buscar via GET http://localhost:3333/appointments/all
- Exibir nome, email e data de cada agendamento em uma lista em OUTRA TELA, FORA DO FORMULÁRIO.

### Mock visual (exemplo bem simples):

```
[ Nome : _____________ ]
[ Email : _____________ ]
[ Data : ___/___/____ ]
[ Agendar (botão) ]

--- Lista de Agendamentos ---
• Jon Doe - jondoe@email.com - 10/04/2025
...demais agendamentos, minimo 5
```

# Objetivo pro candidato no back:

### Implementar as rotas de agendamento:

- GET /appointments/all → listar todos os agendamentos
- POST /appointments/create → criar um novo agendamento com validação

## Estrutura do backend (base)

```
/backend
├── prisma/
│ └── schema.prisma
├── src/
│ ├── appointment.ts
│ │ └── Appointment.ts
│ │ └── AppointmentController.ts
│ │ └── AppointmentRepository.ts
│ │ └── appointment-route.ts
│ │ └── AppointmentService.ts
├── lib/
│ │ └── prisma.ts
│ └── server.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md

```

## Tarefa prática para o candidato (exemplo):

- Validar dados recebidos
- Implementa rotas de POST e salvar os dados no banco /appointments/create
- Implementa rotas de GET /appointments/all
- A estrutura de pastas é uma SUGESTÃO, pois trabalhamos dessa forma.
