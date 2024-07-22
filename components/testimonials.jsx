import Image from 'next/image'

import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import PortfolioPdf from '../app/resurces/portfolio-kdsk.pdf'



export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Что о нас говорят партнеры</h2>
            <p className="text-xl text-gray-400">Техническое и финансовое консультирование помогает инвесторам и заказчикам успешно решать ключевые задачи проекта и минимизировать риски, добиваясь целей с оптимальным использованием ресурсов..</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src='/images/image.png' width={48} height={48} alt="Testimonial 03" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— В целом, я очень доволен услугами компании «КД-Стройконсалт» и рекомендую их всем, кто ищет профессиональную и надежную разработку сметной документации. Благодаря их работе, мы смогли успешно реализовать наш проект и оставить положительное впечатление у наших клиентов. Спасибо за ваше отличное обслуживание!</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Кузьмичев Андрей Николаевич</cite> - <p className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"  >Директор торгово-строительной компании «БазисГрупп» </p>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src='/images/vorobiev.png' width={48} height={48} alt="Testimonial 02" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">— Особенно хочу отметить оперативность и гибкость в работе. Команда «КД-Стройконсалт» была всегда готова принять во внимание наши пожелания и внести необходимые изменения. Они также демонстрировали отличное понимание наших потребностей и помогли нам оптимизировать наш бюджет, не снижая при этом качество работ.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Воробьев Максим Игоревич</cite> - <p className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"  >Директор торгово-строительной компании «Бриз»</p>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-violet-950 border-solid border-2 border-violet-800 rounded" data-aos="fade-up" data-aos-delay="400">

              <blockquote className="text-lg text-gray-400 grow">

                <Image src='/images/Successful-businessman.svg' width={300} height={300} alt="Testimonial 03" />
              </blockquote>
              <blockquote className="text-lg text-gray-400 grow">
                ООО «КД-Стройконсалт» имеет наработанный опыт взаимодействия с основными государственными заказчиками, экспертными организациями, застройщиками и генподрядчиками с полным перечнем которых вы можете ознакомиться в нашем портфолио.
              </blockquote>
              <a
              href={PortfolioPdf}
              className='mx-auto'
              download="Portfolio-PDF-document"
              target="_blank"
              rel="noreferrer"
              >
                <Button className='bg-indigo-600 mx-auto mt-6' type="primary" shape="round" icon={<DownloadOutlined />} >
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
