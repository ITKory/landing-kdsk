'use client'
import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Head from 'next/head';
import * as React from 'react';
import type { Metadata } from 'next';

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
const metadata: Metadata = {
title: 'Example component',
description: 'Learning Next.js SEO',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
        {children}
        </div>
      </body>
    </html>
  )
}