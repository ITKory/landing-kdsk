import Image from "next/image";
import zigOne from '../public/images/zig-one.svg'
import zigTwo from '../public/images/zig-two.svg'
import { PhoneFilled, RocketFilled } from "@ant-design/icons";
import zigThree from '../public/images/zig-three.svg'
import { Card } from "antd";
const { Meta } = Card;


export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <span className="inline-block py-2 px-4 mb-4 text-sm font-semibold text-green-400 bg-green-900 rounded-full">
            <RocketFilled className="mr-2"/> Достигайте высоких целей с Нами
          </span>            <h1 className="h2 mb-4"> Что мы предлагаем </h1>
            <p className="text-xl text-gray-400">Наша компания предлагает услуги по разработке смет на все виды строительных, ремонтных, монтажных работ, а также принимает заказы на сметы во всех существующих на сегодня нормативных базах.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image  */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6  md:mb-0 md:order-1" data-aos="fade-up">
                <Image width={500} height={500} alt="left-first-zig" src={zigOne} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full  mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">

                  <h3 className="h3 mb-3">Наши услуги</h3>

                  <ul className="text-lg   text-gray-400  ">
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Разработка сметной документации</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Сопровождение в экспертизе</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Пересчет стоимости контракта по постановлению РФ 1315  </span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Подготовка ИД</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Сметное сопровождение объекта</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Оформление документации на дополнительные работы</span>
                    </li>
                    <li className="flex items-center    mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Анализ проектно-сметной документации на соответствие</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <Image width={500} height={500} alt='zig-three' src={zigThree}/>

              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                  <h3 className="h3 mb-3">Эффективность</h3>
                  <p className="text-xl text-gray-400 mb-4">Мы гордимся своей быстротой выполнения проектов. Наша компания уделяет особое внимание соблюдению сроков работы</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Профессиональная команда</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Четкое планирование и распределение задач</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Контроль качества</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid mt-20 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-3 lg:col-span-3  md:mb-0 " data-aos="fade-up">
              </div>
              {/* Content */}

              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">

                <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>

              </div>
              <blockquote className="text-lg text-gray-400 grow">— Звоните мне и я проконсультирую Вас лично!</blockquote>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <a
                        href="tel:+79082374167"
                        className="inline-flex items-center text-2xl font-bold text-green-400 hover:text-green-300 transition-colors"
                    >
                      +7 (908) 237-41-67
                    </a>
                    <p className="text-gray-400 mt-2">Денисов Евгений Юрьевич</p>
                    <p className="text-purple-400">Руководитель КД-Стройконсалт</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
