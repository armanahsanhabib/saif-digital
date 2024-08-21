import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saif Digital',
  description: 'Community Manager, Virtual Assistant, Telegram bot setup',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-800`}>{children}</body>
    </html>
  )
}
