"use client"


import type React from "react"


import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, Send, User } from "lucide-react"
import { cn } from "@/lib/utils"




type Message = {
    id: number
    sender: "user" | "admin"
    content: string
    timestamp: string
}


type UserType = {
    name: string
    email: string
    department: string
    phone: string
}


type Ticket = {
    id: string
    service: string
    subject: string
    date: string
    status: string
    user: UserType
    description: string
    messages: Message[]
}


export function ChatTicket({ ticket }: { ticket: Ticket }) {

    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState<Message[]>(ticket.messages)
    const [chatHeight, setChatHeight] = useState("calc(100vh - 13rem)")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Auto-scroll to bottom when new messages are added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    // Adjust height on resize
    useEffect(() => {
        const handleResize = () => {
            // Adjust this calculation based on your header/footer heights
            setChatHeight(`calc(100vh - 13rem)`)
        }

        handleResize() // Set initial height
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleSendMessage = () => {
        if (!newMessage.trim()) return

        const newMsg: Message = {
            id: messages.length + 1,
            sender: "admin",
            content: newMessage,
            timestamp: new Date().toISOString(),
        }

        setMessages([...messages, newMsg])
        setNewMessage("")
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-3 h-full">


            <div className="space-y-6 md:col-span-1">
                <Card className="w-full max-w-[700px] h-[350px]">
                    <CardHeader className="py-4">
                        <CardTitle>Detalles del Ticket</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-medium">ID</h3>
                            <p className="text-sm text-muted-foreground">{ticket.id}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Servicio</h3>
                            <p className="text-sm text-muted-foreground">{ticket.service}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Asunto</h3>
                            <p className="text-sm text-muted-foreground">{ticket.subject}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Fecha</h3>
                            <p className="text-sm text-muted-foreground">{new Date(ticket.date).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Estado</h3>
                            <Badge
                                variant={
                                    ticket.status === "Pendiente"
                                        ? "outline"
                                        : ticket.status === "En Proceso"
                                            ? "secondary"
                                            : ticket.status === "Concluido"
                                                ? "default"
                                                : "destructive"
                                }
                            >
                                {ticket.status}
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full max-w-[700px] h-[350px]">
                    <CardHeader className="py-4">
                        <CardTitle>Información del Usuario</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Avatar>
                                <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                                <AvatarFallback>
                                    {ticket.user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium">{ticket.user.name}</p>
                                <p className="text-sm text-muted-foreground">{ticket.user.department}</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium">Email</h3>
                            <p className="text-sm text-muted-foreground">{ticket.user.email}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Teléfono</h3>
                            <p className="text-sm text-muted-foreground">{ticket.user.phone}</p>
                        </div>
                        <div>
                            <h3 className="font-medium">Descripción</h3>
                            <p className="text-sm text-muted-foreground">{ticket.description}</p>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex space-x-2 w-[565px]">
                    <Button className="flex-1">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Marcar como Resuelto
                    </Button>
                </div>
            </div>


            <Card className="md:col-span-2 flex flex-col w-full max-w-[1300px] h-[780px]">
                <CardHeader className="py-4 flex-none">
                    <CardTitle>Conversación</CardTitle>
                </CardHeader>

                <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn("flex", message.sender === "admin" ? "justify-end" : "justify-start")}
                            >
                                <div
                                    className={cn(
                                        "max-w-[80%] rounded-lg px-4 py-2",
                                        message.sender === "admin" ? "bg-primary text-primary-foreground" : "bg-muted",
                                    )}
                                >
                                    <div className="flex items-center space-x-2 mb-1">
                                        {message.sender === "user" ? <User className="h-4 w-4" /> : null}
                                        <span className="text-xs font-medium">
                                {message.sender === "user" ? ticket.user.name : "Administrador"}
                            </span>
                                    </div>
                                    <p>{message.content}</p>
                                    <p className="text-xs opacity-70 text-right mt-1">
                                        {new Date(message.timestamp).toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="border-t p-4 mt-auto w-full">
                        <div className="flex space-x-2">
                            <Textarea
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Escribe un mensaje..."
                                className="min-h-[80px] w-full"
                            />
                            <Button onClick={handleSendMessage} disabled={!newMessage.trim()} size="icon" className="h-10 w-10">
                                <Send className="h-4 w-4" />
                                <span className="sr-only">Enviar mensaje</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>


        </div>
    )
}