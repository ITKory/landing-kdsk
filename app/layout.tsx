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
        <meta name="description" content="Увеличиваем стоимость действующих государственных контрактов до 30%" key="desc" />
        <meta property="og:title" content="Сметная документация для строительных работ" />
        <meta
            property="og:description"
            content="Более 20 успешно выполненных крупных объектов."
        />
        <meta
            property="og:image"
            content="https://smeta-kdsk.ru/_next/static/chunks/public/images/header-logo.68cec6e0966126c7.svg"
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