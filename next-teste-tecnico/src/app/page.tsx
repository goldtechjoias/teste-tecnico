import AppointmentForm from "./appointments/AppointmentForm";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <AppointmentForm />
      <div className="max-w-md mx-auto p-6 text-center">
        <Link href="/appointments" className="text-blue-500 hover:underline">
          Ver lista de agendamentos
        </Link>
      </div>
    </main>
  );
}