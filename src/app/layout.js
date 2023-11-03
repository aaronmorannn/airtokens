import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Navbar from './navbar'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Air Tokens - Cryptocurrency Charts, Prices and Rankings',
  description: 'Super lightweight cryptocurrency chart that is monitoring the rankings and prices of the top 100 coins, updating every 10 seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="keywords" content="Cryptocurrency, Crypto Charts, Bitcoin, Ethereum, Dogecoin, Satoshi Nakamoto, Crypto News, Rankings, Prices, Coin, Wallet, Blockchain, Token, Exchange"/>
        <meta name="auto" content="Airtokens"/>
        <meta name="robots" content="noindex"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
      </Head>
      <body className={inter.className}>      
        <Navbar/>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
