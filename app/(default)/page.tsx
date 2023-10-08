'use client'

  import Hero from '@/components/hero'
  import Features from '@/components/features'
  import Newsletter from '@/components/newsletter'
  import Zigzag from '@/components/zigzag'
  import Testimonials from '@/components/testimonials'
  import { Inter, Architects_Daughter } from 'next/font/google'
 
import Feedback from '@/components/news'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/ui/footer'
import Header from '@/components/ui/header'
import PageIllustration from '@/components/page-illustration'
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Dashboard from '@/components/dashboard'
   
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
  export default function Home() {
    return (
        <>
        <RouterProvider router={router} />
        </>
    )
  }