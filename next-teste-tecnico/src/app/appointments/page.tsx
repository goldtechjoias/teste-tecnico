"use client";

import Link from "next/link";
import { toast } from "sonner";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";

export default function AppointmentsList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      try {
        const response = await fetch("http://localhost:3333/appointments/all");
        if (!response.ok) {
          throw new Error("Erro ao buscar agendamentos");
        }
        return response.json();
      } catch (err) {
        toast.error("Falha ao carregar agendamentos");
        throw err;
      }
    },
  });

  if (isLoading) {
    toast.loading("Carregando agendamentos...");
    return <div>Carregando...</div>;
  }

  if (error) {
    toast.error(error.message);
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Lista de Agendamentos</h1>
        <Link href="/" className="text-blue-500 hover:underline">
          Voltar ao formulário
        </Link>
      </div>
      <div className="space-y-2">
        {data.map((appointment: any) => (
          <div key={appointment.id} className="border p-4 rounded">
            <p className="font-medium">{appointment.name}</p>
            <p className="text-gray-600">{appointment.email}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(appointment.date), "dd/MM/yyyy")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}