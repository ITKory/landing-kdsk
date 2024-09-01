import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'

export default function Footer() {
  return (
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
                <li className="mb-1">
                  <div className="text-gray-400">+7 908 237-41-67</div>
                </li>
                <li className="mb-1">
                  <a href="mailto:kd-sk52@mail.ru">kd-sk52@mail.ru</a>
                </li>
              </ul>
            </div>
            <div className="text-gray-400 text-sm mr-4  mt-4">&copy; КД-СТРОЙКОНСАЛТ Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
