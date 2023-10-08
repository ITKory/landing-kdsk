'use client'
import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Feedback from '@/components/Feedback'
import { Toaster } from 'react-hot-toast'
 
import Footer from '@/components/ui/footer'
import AdminPanel from '@/components/adminPanel'
import Header from '@/components/ui/header'
import PageIllustration from '@/components/page-illustration'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 

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
 
const router = createBrowserRouter([
  {
    path: "/",
    element: < >        <Toaster   position="bottom-center"/>
    <PageIllustration />
  <Header />
  <Hero />
  <Features />
  <Zigzag />
  <Testimonials />
  <Newsletter />
  {/* <Feedback /> */}
  <Footer /></ >,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
]);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
 