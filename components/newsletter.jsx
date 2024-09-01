"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import BackgroundIllustration from '@/components/background-illustartion';

export const metadata = {
  title: 'Sign Up - Open PRO',
  description: 'Page description',
}

export default function Newsletter() {
  const [showForm, setShowForm] = useState(true);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setShowForm(false);
    emailjs.sendForm('service_ybynq75', 'template_or1y2pr', form.current, 'zHd0zM7ZzmtGQQff_')
      .then((result) => {
        toast.success('Ваша заявка отправлена на рассмотрение !')
        setShowForm(false);
      }, (error) => {
        toast.error("Что-то пошло не так :(")
      });
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-gray-800 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <BackgroundIllustration />

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {showForm ?
              <div className="max-w-6xl mx-auto px-2 sm:px-2">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                  <h3 className="h2 -mx-3 mb-3">Оставьте заявку.</h3>
                  <p className="text-xl text-gray-400 mb-8">Стоимость разработки сметной документации индивидуальна для каждого проекта. Для оценки стоимости, заполните форму обратной связи.</p>
                </div>
                <div className="max-w-sm mx-auto">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full ">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">ФИО <span className="text-red-600">*</span></label>
                        <input id="full-name" type="text" name='user_name' className="form-input w-full text-gray-300 " placeholder="Ваше полное имя" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full ">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Организация, должность<span className="text-red-600">*</span></label>
                        <input id="company-name" type="text" name="user_job" className="form-input w-full text-gray-300 " placeholder="Организация которую вы представляете " required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full ">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email"> Email <span className="text-red-600">*</span></label>
                        <input id="email" type="email" name="user_email" className="form-input w-full text-gray-300 " placeholder="you@yourcompany.com" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full ">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email"> Ваш номер телефона <span className="text-red-600">*</span></label>
                        <input id="phone" type="phone" name="user_phone" className="form-input w-full  text-gray-300 " placeholder="+7 (999) 999-999" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full ">
                        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Комментарии </label>
                        <textarea name="message" className="form-input w-full text-gray-300" />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mt-6">
                      <div className="w-full px-3">
                        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Отправить</button>
                      </div>
                    </div>
                  </form>
                  <div className="text-gray-400 text-center mt-6"> Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных.Поля, отмеченные звездочкой, обязательны для заполнения.</div>
                </div>

              </div>
              :
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                <h3 className="h3 -mx-3 mb-3">Спасибо что выбрали нашу команду, в ближайшее время наш специалист свяжется с вами.</h3>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
