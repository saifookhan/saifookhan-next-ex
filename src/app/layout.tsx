import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Study/Work in Germany Tutorial',
  description:
    'In Urdu/hindi, find step by step videos and links on how you can come to Germany for study and work purposes by Saifoo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
