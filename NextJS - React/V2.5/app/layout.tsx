import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TopNavigation } from "@/components/top-navigation"


const inter = Inter({ subsets: ["latin"] })




export const metadata: Metadata = {
  title: "Agenda Ambiental - Dashboard",
  description: "Sistema de gestión para la Agenda Ambiental"
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="min-h-screen bg-background flex flex-col">
            <TopNavigation />
            <main className="flex-1 container mx-auto p-4 md:p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'