import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'

function DevWatermark() {
  return (
      <div className="dev-watermark">
        <a href='http://primehillz.ru' className="font-architects-daughter text-xl text-purple-600 "> POWERED BY PRIMEHILL </a>
      </div>
  );
}

const TelegramIcon = () => (
    <svg className="w-5 h-5 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 2.5L1.5 10.5l5.25 2.25 1.5 4.5 3-3 5.25 3.75 4.5-13.5zM9 15l-1.5-4.5 9-6-7.5 10.5z"/>
    </svg>
);

const WhatsAppIcon = () => (
    <svg className="w-5 h-5 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.04L0 24l5.96-1.58A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.52 17.04a8.4 8.4 0 01-4.5-1.32l-.32-.2-3.18.84.85-3.1-.21-.33a8.4 8.4 0 1111.36 4.1 8.3 8.3 0 01-4.2 1.01zm4.68-6.3c-.26-.13-1.54-.76-1.78-.85-.24-.1-.42-.13-.6.13-.18.26-.7.85-.86 1.02-.16.18-.32.2-.58.07-.26-.13-1.1-.4-2.1-1.3-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.06-.13-.6-1.44-.82-1.97-.22-.52-.44-.45-.6-.46-.15-.01-.33-.01-.5-.01-.17 0-.45.06-.68.33-.23.26-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.67.13.18 1.8 2.75 4.36 3.85.61.26 1.08.41 1.45.53.61.2 1.17.17 1.61.1.49-.08 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.26-.18-.53-.31z"/>
    </svg>
);

export default function Footer() {
  return (
      <>
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image width={120} height={120} alt='footer-logo' src={Logo} />
                </Link>
              </div>
              <div className="text-gray-400 ">Мы стремимся к тому, чтобы обеспечить комфорт и упростить ведение бизнеса. Мы — это команда, которая формирует новые подходы в областях строительства, снабжения и услуг по пересчету смет, разрушая общепринятые мнения о том, что строительство — это хаос, комплексное снабжение обходится в копеечку, и пересчет сметы — это невозможно.</div>
            </div>
            {/* 2nd, 3rd and 4th blocks */}
          </div>
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Copyrights note */}
            <div className="text-sm">
              <h6 className="text-gray-200 font-medium mb-1">Контакты</h6>
              <ul>
                <li className="mb-1">
                  <div className="text-gray-400">Нижний Новгород, 603006</div>
                </li>
                <li className="mb-1">
                  <div className="text-gray-400">д.27/8, офис №41</div>
                </li>
                <li className="mb-1 flex items-center space-x-2">
                  <a href="tel:+79082374167" className="text-gray-400 hover:text-gray-200">+7 908 237-41-67</a>
                  <a href="https://t.me/+79082374167" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-gray-200">
                    <TelegramIcon />
                  </a>
                  <a href="https://wa.me/79082374167" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gray-200">
                    <WhatsAppIcon />
                  </a>
                </li>
                <li className="mb-1">
                  <a href="mailto:kd-sk52@mail.ru">kd-sk52@mail.ru</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-gray-400 text-sm mr-4 mt-4">&copy; КД-СТРОЙКОНСАЛТ Все права защищены.</div>
              <DevWatermark />
            </div>
          </div>
        </div>
      </div>
    </footer>
</>
)
}
