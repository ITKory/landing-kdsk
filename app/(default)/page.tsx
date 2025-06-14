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
import LandingCarusel from "@/components/ui/landing-carusel";
import FloatingMagicButton from "@/components/ui/float-button";
import Calculator from "@/components/sections/calculator";


export default function Home() {
  return (
    <NextUIProvider>
      <Toaster position="bottom-center" />
      <Header />
      <Subtitle />
      {/*<ProjectsCarusel/>*/}

        <LandingCarusel />
        <Calculator/>

      <Features />
      <Zigzag />
      <Testimonials />
        <section id="form">
         <Newsletter />
        </section>
      <Footer />
        <FloatingMagicButton />
    </NextUIProvider>
  )
}
