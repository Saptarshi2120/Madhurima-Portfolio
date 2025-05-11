import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
<<<<<<< HEAD
import ChatBot from "@/components/chat-bot"
=======
>>>>>>> 1c817cc5d90674d7f8d64f927442a0a07b139eda

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Madhurima Dutta | Data Analyst",
  description: "Professional portfolio of Madhurima Dutta, Data Analyst",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-[#0B0C10] text-[#EDEDED]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
<<<<<<< HEAD
        <ChatBot />
=======
>>>>>>> 1c817cc5d90674d7f8d64f927442a0a07b139eda
      </body>
    </html>
  )
}
