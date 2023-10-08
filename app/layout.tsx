'use client'
import './css/style.css'
import { Inter, Architects_Daughter } from 'next/font/google'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Feedback from '@/components/news'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import PageIllustration from '@/components/page-illustration'
 
import * as React from 'react';
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from '@/components/dashboard'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})
const router = createBrowserRouter([
  {
    path: "/",
    element: < > 
    <Toaster   position="bottom-center"/>
    <PageIllustration />
  <Header />
  <Hero />
  <Features />
  <Zigzag />
  <Testimonials />
  <Newsletter />
    <Feedback />  
  <Footer /> </ >,
  },
  {
    path: "/admin-kdsk-panel",
    element:<Dashboard   />

  }
]);
const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})
 
 

export default function RootLayout( ) {
 
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
      
        <RouterProvider router={router} />
   
        </div>
      </body>
    </html>
  )
}