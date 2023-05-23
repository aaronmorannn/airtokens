import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lightweight Crypto Chart',
  description: 'Web Application that is tracking the Top 100 Cryptocurrencies, refreshing every 10 seconds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="UTF-8"/>
        <meta name="keywords" content="Cryptocurrency, Crypto Charts, Bitcoin, Ethereum, Dogecoin, Satoshi Nakamoto, Crypto News, Coin, Wallet, Blockchain, Token, Exchange"/>
        <meta name="auto" content="Air Tokens"/>
        <meta name="robots" content="noindex"/>
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
