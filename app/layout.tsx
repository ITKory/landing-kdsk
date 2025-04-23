'use client'
import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Script from 'next/script'
import { useEffect } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // @ts-ignore
    window.ym = window.ym || function(){(window.ym.a = window.ym.a||[]).push(arguments)}
    // @ts-ignore
    window.ym.l = 1*new Date()
    // @ts-ignore
    ym(101229823, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    })
  }, [])

  return (
      <html lang="en">
      <head>
        <title>KDSK</title>
        <meta name="description" content="Checkout our cool page" key="desc" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
            property="og:description"
            content="And a social description for our cool page"
        />
        <meta
            property="og:image"
            content="https://cdn.culture.ru/images/f67637ef-7daf-509e-b846-11bbe94d89bf"
        />

        <Script
            strategy="afterInteractive"
            src="https://mc.yandex.ru/metrika/tag.js"
        />

        <noscript>
          <div>
            <img
                src="https://mc.yandex.ru/watch/101229823"
                style={{
                  position: 'absolute',
                  left: '-9999px'
                }}
                alt=""
            />
          </div>
        </noscript>
      </head>

      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {children}
      </div>
      </body>
      </html>
  )
}