import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers" // 👈 Importe o componente de Providers

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CRM WhatsApp",
  description: "Sistema de CRM integrado com WhatsApp",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* 👈 Use o wrapper aqui */}
      </body>
    </html>
  )
}