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

## BACK-END

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

1. O prisma ja esta com a migrate criada, precisa apenas implementa-la
2. O Banco é sqlite
3. Validar dados recebidos
4. Implementa rotas de POST e salvar os dados no banco /appointments/create
5. Implementa rotas de GET /appointments/all
6. A estrutura de pastas é uma SUGESTÃO, pois trabalhamos dessa forma.

---


#  Teste Técnico - Sistema de Agendamentos | Gold Tech Joias


---

##  Requisitos Atendidos

###  Back-end (`api-teste-tecnico/`)
Estrutura orientada a objetos (Controller, Service, Repository, Entity)
Banco de dados SQLite com Prisma ORM
Validação de dados usando **Zod**
Rota `POST /appointments/create` para criação de agendamento
Rota `GET /appointments/all` para listagem de agendamentos
Middleware de CORS com configuração de origem
Separação de responsabilidades seguindo boas práticas de arquitetura

### 🎨 Front-end (`next-teste-tecnico/`)
Framework **Next.js 14+** (App Router)
Estilização com **TailwindCSS**
Componentes visuais utilizando **ShadCN UI**
Formulário com:
Campo de **nome**, **email** e **data**
Controle via **React Hook Form**
Validação com **Zod**
Submissão via **React Query**
Tela separada de listagem de agendamentos com dados da API
Mensagens de erro/sucesso e controle de estado no frontend

---

##  Estrutura de Diretórios

```bash
teste-tecnico/
├── api-teste-tecnico/         # Backend (Node + Prisma)
└── next-teste-tecnico/        # Frontend (Next.js + Tailwind + React Query)
````

---

## Como Executar Localmente

###  Back-end

```bash
cd api-teste-tecnico
npm install
npx prisma migrate dev
npm run dev
```

Servidor disponível em: [http://localhost:3333](http://localhost:3333)

---

###  Front-end

```bash
cd next-teste-tecnico
npm install
npm run dev
```

Aplicação disponível em: [http://localhost:3000](http://localhost:3000)

---

##  Rotas Implementadas

### Backend

* `POST /appointments/create` → cria um novo agendamento
* `GET /appointments/all` → retorna todos os agendamentos

---

##  Telas

###  Página de Agendamento

* URL: `/novo-agendamento`
* Função: criar um novo agendamento com validação
* Estado de carregamento, erro e sucesso

###  Página de Listagem

* URL: `/agendamentos`
* Função: exibir todos os agendamentos cadastrados com formatação de data

---

##  Testado com:

* Postman para rotas da API
* Navegador para fluxo completo: formulário + listagem



