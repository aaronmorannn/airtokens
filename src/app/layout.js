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
        <meta name="application-name" content="Airtokens" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Airtokens" />
        <meta name="description" content="Lightweight crypto tracker." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://airtokens.xyz" />
        <meta name="twitter:title" content="Airtokens" />
        <meta name="twitter:description" content="Lightweight crypto tracker" />
        <meta name="twitter:image" content="https://airtokens.xyz/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@aaron__moran" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Airtokens" />
        <meta property="og:description" content="Lightweight crypto tracker" />
        <meta property="og:site_name" content="Airtokens" />
        <meta property="og:url" content="https://airtokens.xyz" />
        <meta property="og:image" content="https://airtokens.xyz/icons/apple-touch-icon.png" />
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
