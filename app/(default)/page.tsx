'use client'

import Subtitle from '@/components/subtitle'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
      <Toaster position="bottom-center" />
      <Header />
      <Subtitle />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Newsletter /> */}
      <Footer />
    </NextUIProvider>
  )
}