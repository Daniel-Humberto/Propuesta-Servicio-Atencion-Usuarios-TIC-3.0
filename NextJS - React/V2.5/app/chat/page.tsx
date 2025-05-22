import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChatList } from "@/components/chat-list"
import Link from "next/link"
import { MessageSquare } from "lucide-react"

export default function ChatPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">Chats de Tickets</h1>
        <Link href="/tickets">
          <Button>
            <MessageSquare className="mr-2 h-4 w-4" />
            Ver todos los tickets
          </Button>
        </Link>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Conversaciones Activas</CardTitle>
          </CardHeader>
          <CardContent>
            <ChatList />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

