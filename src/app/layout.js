import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head';
import Navbar from './navbar'

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
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2V69D91S50"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-2V69D91S50');
          `}
      </Script>
      <body className={inter.className}>      
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
