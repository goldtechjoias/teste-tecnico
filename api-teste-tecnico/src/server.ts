import cors from 'cors';
import express from 'express';
import appointmentsRouter from './appointments/appointments.routes';

const app = express();
const port = 3333;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/appointments', appointmentsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});