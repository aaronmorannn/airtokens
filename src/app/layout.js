import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lightweight Cryptocurrency Tracker',
  description: 'Web Application that is tracking the Top 100 Cryptocurrencies, refreshing every 10 seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2V69D91S50"></Script>
      <Script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-2V69D91S50');
      `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
