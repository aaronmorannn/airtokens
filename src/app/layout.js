import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top 100 Cryptocurrency Tracker',
  description: 'Application that is tracking the Top 100 Cryptocurrencies, refreshing every 10 seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
