'use client'

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

import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (


    <NextUIProvider>
      <Toaster position="bottom-center" />
      <PageIllustration />
      <Header />
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Feedback />
      <Footer />
    </NextUIProvider>



  )
}