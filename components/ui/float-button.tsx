"use client"

import { useEffect, useRef, useState } from "react"
import { MagicButton } from "@/components/ui/landing-carusel";

export default function FloatingMagicButton() {
    const [visible, setVisible] = useState(true)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const targetRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const target = document.getElementById('form') // секция, куда ведёт кнопка
        targetRef.current = target

        if (!target) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(!entry.isIntersecting) // скрываем кнопку, если секция видна
            },
            {
                root: null,
                threshold: 0.1,
            }
        )

        observer.observe(target)
        observerRef.current = observer

        return () => {
            if (target) observer.unobserve(target)
        }
    }, [])

    return (
        <div
            className={`fixed text-center animate-fade-in bottom-6 right-6 z-50 transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
                <MagicButton
                    size="large"
                    className="text-sm py-2 bg-blue-500/20 text-blue-200 border-blue-400/30"
                    onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Оставьте заявку
                </MagicButton>
        </div>
    )
}
