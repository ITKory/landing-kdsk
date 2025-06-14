"use client";
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import BackgroundIllustration from '@/components/background-illustartion';

export default function Newsletter() {
  const [showForm, setShowForm] = useState(true);
  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setShowForm(false);

    const form = formRef.current;
    const name = form.user_name.value;
    const job = form.user_job.value;
    const email = form.user_email.value;
    const phone = form.user_phone.value;
    const message = form.message.value;

    const htmlContent = `
      <h3><strong>Новая заявка на подписку:</strong></h3>
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Организация / Должность:</strong> ${job}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      ${message ? `<h4><strong>Комментарий:</strong></h4><p>${message}</p>` : ''}
    `;

    const templateParams = {
      date: new Date().toLocaleString('ru-RU'),
      html_content: htmlContent,
      phone,
      messenger: '—',
      task_type: 'подписка',
      region: '—',
    };

    const toastId = toast.loading('Отправка заявки...', {
      position: 'bottom-right',
      style: { background: '#333', color: '#fff', border: '1px solid #404040' },
    });

    try {
      await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams
      );

      toast.success('Ваша заявка отправлена на рассмотрение!', {
        id: toastId,
        icon: '✅',
        duration: 4000,
      });
    } catch (err) {
      console.error('Ошибка при отправке:', err);
      toast.error('Что-то пошло не так :(', {
        id: toastId,
        icon: '❌',
        duration: 5000,
      });
    }
  };

  return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gray-800 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
            <BackgroundIllustration />

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {showForm ? (
                  <div className="max-w-6xl mx-auto px-2 sm:px-2">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                      <h3 className="h2 -mx-3 mb-3">Оставьте заявку</h3>
                      <p className="text-xl text-gray-400 mb-8">
                        Стоимость разработки сметной документации индивидуальна для каждого проекта.
                        Для оценки стоимости, заполните форму обратной связи.
                      </p>
                    </div>
                    <div className="max-w-sm mx-auto">
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="full-name" className="block text-gray-300 text-sm font-medium mb-1">
                            ФИО <span className="text-red-600">*</span>
                          </label>
                          <input
                              id="full-name"
                              name="user_name"
                              type="text"
                              className="form-input w-full text-gray-300"
                              placeholder="Ваше полное имя"
                              required
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="company-name" className="block text-gray-300 text-sm font-medium mb-1">
                            Организация, должность <span className="text-red-600">*</span>
                          </label>
                          <input
                              id="company-name"
                              name="user_job"
                              type="text"
                              className="form-input w-full text-gray-300"
                              placeholder="Организация которую вы представляете"
                              required
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-1">
                            Email <span className="text-red-600">*</span>
                          </label>
                          <input
                              id="email"
                              name="user_email"
                              type="email"
                              className="form-input w-full text-gray-300"
                              placeholder="you@yourcompany.com"
                              required
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-1">
                            Ваш номер телефона <span className="text-red-600">*</span>
                          </label>
                          <input
                              id="phone"
                              name="user_phone"
                              type="tel"
                              className="form-input w-full text-gray-300"
                              placeholder="+7 (999) 999-9999"
                              required
                          />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-1">
                            Комментарии
                          </label>
                          <textarea
                              id="message"
                              name="message"
                              className="form-input w-full text-gray-300"
                          />
                        </div>

                        <div className="mt-6">
                          <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                            Отправить
                          </button>
                        </div>
                      </form>

                      <div className="text-gray-400 text-center mt-6 text-xs">
                        Нажимая на кнопку, вы даете согласие на обработку ваших персональных данных.
                        Поля, отмеченные звездочкой, обязательны для заполнения.
                      </div>
                    </div>
                  </div>
              ) : (
                  <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
                    <h3 className="h3 -mx-3 mb-3">
                      Спасибо что выбрали нашу команду, в ближайшее время наш специалист свяжется с вами.
                    </h3>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}
