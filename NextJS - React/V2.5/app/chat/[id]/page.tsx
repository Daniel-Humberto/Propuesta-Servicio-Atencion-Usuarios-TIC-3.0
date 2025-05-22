import { ChatTicket } from "@/components/chat-ticket"
import { notFound } from "next/navigation"

// Mock data for the ticket
const tickets = {
  "T-1001": {
    id: "T-1001",
    service: "Auditorio",
    subject: "Reserva para conferencia",
    date: "2025-04-01",
    status: "Pendiente",
    user: {
      name: "María González",
      email: "maria.gonzalez@example.com",
      department: "Facultad de Ciencias",
      phone: "555-123-4567",
    },
    description:
      "Necesito reservar el auditorio principal para una conferencia sobre energías renovables. El evento será el 15 de abril de 2025 de 10:00 a 13:00 horas. Esperamos aproximadamente 150 asistentes.",
    messages: [
      {
        id: 1,
        sender: "user",
        content:
          "Hola, quisiera saber si es posible reservar el auditorio principal para una conferencia sobre energías renovables.",
        timestamp: "2025-03-30T10:15:00",
      },
      {
        id: 2,
        sender: "admin",
        content: "Buenos días María. Claro que sí, ¿para qué fecha necesitarías el auditorio?",
        timestamp: "2025-03-30T10:20:00",
      },
      {
        id: 3,
        sender: "user",
        content: "Sería para el 15 de abril, de 10:00 a 13:00 horas. Esperamos aproximadamente 150 asistentes.",
        timestamp: "2025-03-30T10:25:00",
      },
      {
        id: 4,
        sender: "admin",
        content:
          "Perfecto, déjame verificar la disponibilidad para esa fecha... El auditorio está disponible en ese horario. ¿Necesitarás equipo adicional como proyector o micrófono?",
        timestamp: "2025-03-30T10:30:00",
      },
      {
        id: 5,
        sender: "user",
        content: "Sí, necesitaríamos proyector, micrófono y conexión a internet para los ponentes.",
        timestamp: "2025-03-30T10:35:00",
      },
    ],
  },
  "T-1002": {
    id: "T-1002",
    service: "Salón",
    subject: "Clase de Biología",
    date: "2025-04-01",
    status: "En Proceso",
    user: {
      name: "Juan Pérez",
      email: "juan.perez@example.com",
      department: "Facultad de Biología",
      phone: "555-987-6543",
    },
    description:
      "Solicito un salón para impartir una clase práctica de biología. Necesitaré espacio para 30 estudiantes y acceso a lavabos. La clase será el 10 de abril de 2025 de 14:00 a 16:00 horas.",
    messages: [
      {
        id: 1,
        sender: "user",
        content: "Hola, necesito un salón para una clase práctica de biología.",
        timestamp: "2025-03-29T09:00:00",
      },
      {
        id: 2,
        sender: "admin",
        content: "Buenos días Juan. ¿Para cuántos estudiantes necesitas el espacio?",
        timestamp: "2025-03-29T09:10:00",
      },
      {
        id: 3,
        sender: "user",
        content: "Serán 30 estudiantes. También necesitaríamos acceso a lavabos para la práctica.",
        timestamp: "2025-03-29T09:15:00",
      },
      {
        id: 4,
        sender: "admin",
        content: "Entiendo. El salón B-12 cuenta con esas características. ¿Qué fecha y horario necesitas?",
        timestamp: "2025-03-29T09:20:00",
      },
    ],
  },
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const ticket = tickets[params.id]

  if (!ticket) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Chat de Ticket</h1>
      <ChatTicket ticket={ticket} />
    </div>
  )
}

