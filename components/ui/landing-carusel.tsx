"use client"

import {useState, useEffect, useRef} from "react"
import { ChevronLeft, ChevronRight, Users, TrendingUp, Award } from "lucide-react"
import { Card } from "@nextui-org/react"
import { CardContent } from "@mui/material"
import { Button } from "antd"

type Particle = {
    id: number
    x: number
    y: number
    dx: number
    dy: number
}

export function MagicButton(props: React.ComponentProps<typeof Button>) {
    const [particles, setParticles] = useState<Particle[]>([])
    const btnRef = useRef<HTMLButtonElement>(null)

    const emitParticles = () => {
        if (!btnRef.current) return
        const rect = btnRef.current.getBoundingClientRect()

        // По 5 частиц от каждого края — всего 20
        const edges = ["top", "bottom", "left", "right"] as const
        const newParticles: Particle[] = []

        edges.forEach((edge) => {
            for (let i = 0; i < 10; i++) {
                let x: number, y: number, angle: number

                switch (edge) {
                    case "top":
                        x = Math.random() * rect.width
                        y = 18
                        // угол от -135° до -45° (к поверхности верхнего края)
                        angle = (Math.random() * 90 - 135) * (Math.PI / 180)
                        break
                    case "bottom":
                        x = Math.random() * rect.width
                        y = rect.height
                        // угол от 45° до 135°
                        angle = (Math.random() * 90 + 45) * (Math.PI / 180)
                        break
                    case "left":
                        x = 0
                        y = Math.random() * rect.height
                        // угол от -45° до 45°
                        angle = (Math.random() * 90 - 45) * (Math.PI / 180)
                        break
                    case "right":
                        x = rect.width
                        y = Math.random() * rect.height
                        // угол от 135° до 225°
                        angle = (Math.random() * 90 + 135) * (Math.PI / 180)
                        break
                }

                const speed = Math.random() * 30 + 20
                newParticles.push({
                    id: Date.now() + edge.charCodeAt(0) + i,
                    x,
                    y,
                    dx: Math.cos(angle) * speed,
                    dy: Math.sin(angle) * speed,
                })
            }
        })

        setParticles(newParticles)
    }

    // Убираем старые частицы через 700ms
    useEffect(() => {
        if (!particles.length) return
        const t = setTimeout(() => setParticles([]), 9000)
        return () => clearTimeout(t)
    }, [particles])

    return (
        <Button
            ref={btnRef}
            {...props}
            className={[props.className, "magic-button"].join(" ")}
            onMouseEnter={(e) => {
                props.onMouseEnter?.(e)
                emitParticles()
            }}
        >
            {props.children}
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="particle"
                    style={{
                        left: p.x,
                        top: p.y,
                        "--dx": `${p.dx}px`,
                        "--dy": `${p.dy}px`,
                    } as React.CSSProperties}
                />
            ))}
        </Button>
    )
}


const slides = [
    {
        id: 3,
        type: "portfolio",
        title: "Наши успешные проекты",
        subtitle: "В рамках оказанных услуг было проведено увеличение стоимости контрактов на суммы 13-37% от первоначальной цены",
        projects: [
            "Общеобразовательная школа на 792 учащихся в микрорайоне № 3 г. Кстово Нижегородской области",
            "Строительство регионального центра спортивной подготовки по адаптивным видам спорта в г. Дзержинске Нижегородской области",
            "Благоустройство территории исторической части села Большое Болдино Нижегородской области",
            "Распределительные газопроводы высокого и низкого давления по улицам и газопроводы-вводы к жилым домам в д. Касаниха Богородского района Нижегородской области",
            "Общеобразовательной школы на 1225 мест по адресу Нижегородская область, Кстовский район, село Большая Ельня",
            "Строительство ДОУ по ул. Верховая в Приокском районе г. Нижнего Новгорода",
            "Реконструкция водозаборных сооружений г. Чкаловск Нижегородской области",
            "Строительство пожарного депо на 4 машино/места в районе п. Новинки Нижегородской области",
            "Расчистка каскада двух прудов на ул. Карла Маркса в с. Большое Болдино Нижегородской области",
            "Газификация г. Уренъ Нижегородской области (2 очередь строительства)",
            "Школа на 1000 мест в жилом районе Боталово-4 г. Бор Нижегородской области",
            "Строительство школы на 10 классов в Воскресенском районе Нижегородской области",
            "Строительство здания школы в районе улицы Козерадского города Выкса Нижегородской области",
            "Общеобразовательная школа на 1500 мест в посёлке Дубёнки Приокского района города Нижнего Новгорода",
            "Общеобразовательная школа на 800 мест в районе деревни Кузнечиха Советского района города Нижнего Новгорода",
            "Строительство детского сада на 140 мест по адресу: Нижегородская область, Богородский муниципальный округ, кадастровый номер земельного участка 52:24:0030001:7859",
            "Строительство здания ДОУ по ул. Красноуральская в Автозаводском районе г. Нижнего Новгорода",
            "Строительство газопровода в пос. Луч; строительство газопровода среднего давления от деревни Бешенцево до деревни Мордвинцево в Приокском районе; закольцовка газопровода среднего давления от ГРП Бешенцево до ГРП д. Мордвинцево",
        ],
        icon: <Award className="w-16 h-16 text-purple-400" />,
    },
    {
        id: 6,
        type: "experience",
        title: "Наш опыт",
        subtitle: "ООО «КД-Стройконсалт» имеет наработанный опыт взаимодействия с основными государственными заказчиками",
        clients: [
            "МКУ «Главное управление по капитальному строительству города Нижнего Новгорода»",
            "ГКУ НО «Нижегородстройзаказчик»",
            "АО «Корпорация развития Нижегородской области»",
            "ООО «Светлоград» (ЖК Подкова)",
            "ООО «Старт-строй» (Столица Нижний)",
            "ГК «Каркас монолит»",
            "ГБУ НО «Нижегородсмета»",
        ],
        icon: <Users className="w-16 h-16 text-orange-400" />,
    },
]

export default function LandingCarusel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsAutoPlaying(false)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setIsAutoPlaying(false)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
        setIsAutoPlaying(false)
    }

    const current = slides[currentSlide]
    const hasHeader = current.icon || current.title || current.subtitle
    // @ts-ignore
    const hasList = (current.projects || current.clients)?.length > 0

    return (
        <div className="relative w-full h-screen overflow-hidden ">
            {/* Background with animated gradient */}
            <div className="absolute inset-0 transition-all duration-1000">
                <div className="absolute inset-0 bg-gray-900/90" />

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-white/10 animate-pulse"
                            style={{
                                width: Math.random() * 10 + 5 + "px",
                                height: Math.random() * 10 + 5 + "px",
                                top: Math.random() * 100 + "%",
                                left: Math.random() * 100 + "%",
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${Math.random() * 10 + 5}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 h-full flex flex-col">
                <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col px-4">
                    {/* Conditional header rendering */}
                    {hasHeader && (
                        <div className="text-center mb-4 md:mb-8 pt-8">
                            {current.icon && (
                                <div className="flex justify-center mb-4 md:mb-6">
                                    <div className="transform transition-all duration-500 hover:scale-110">
                                        {current.icon}
                                    </div>
                                </div>
                            )}
                            {current.title && (
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-2 md:mb-4 leading-tight">
                                    {current.title}
                                </h2>
                            )}
                            {current.subtitle && (
                                <p className="text-lg md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                                    {current.subtitle}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Flexible content area */}
                    <div className={`flex-grow flex items-${hasList ? 'start' : 'center'} justify-center w-full`}>
                        {(current.type === "portfolio" || current.type === "experience") && hasList && (
                            <div className="max-w-5xl mx-auto w-full ">
                                <div className="grid gap-3 md:gap-4 max-h-[55vh] overflow-y-auto pr-2 custom-scrollbar">
                                    {(current.projects || current.clients)?.map((item, index) => (
                                        <Card
                                            key={index}
                                            className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 border-0 transition-all duration-300 transform hover:translate-x-2"
                                        >
                                            <CardContent className="p-4">
                                                <div className="flex items-start space-x-3">
                                                    <div
                                                        className="w-2 h-2 bg-current rounded-full mt-3 flex-shrink-0"
                                                        style={{
                                                            color: current.icon?.props.className?.includes("purple")
                                                                ? "#a855f7"
                                                                : current.icon?.props.className?.includes("orange")
                                                                    ? "#fb923c"
                                                                    : "#3b82f6"
                                                        }}
                                                    />
                                                    <p className="text-white text-sm leading-relaxed">{item}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Navigation controls */}
                <div className={`py-4 flex justify-center ${!hasList ? 'mt-auto mb-8' : ''}`}>
                    <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Button
                            size="small"
                            onClick={prevSlide}
                            className="bg-white/10 hover:bg-white/20 text-white border-0 flex items-center justify-center"
                        >
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>

                        <div className="flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                                        index === currentSlide
                                            ? "bg-white scale-125"
                                            : "bg-white/40 hover:bg-white/60"
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            size="small"
                            onClick={nextSlide}
                            className="bg-white/10 hover:bg-white/20 text-white border-0 flex items-center justify-center"
                        >
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Custom scrollbar styles */}
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .magic-button {
                    position: relative;
                    overflow: hidden;
                    transition: background-color 0.3s ease;
                }

                /* затемнение на hover */
                .magic-button:hover {
                    background-color: rgba(59, 130, 246, 0.3) !important;
                }

                /* мягкое пульсирующее свечение */
                .magic-button::before {
                    content: "";
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, rgba(99, 179, 237, 0.5), transparent 70%);
                    opacity: 0;
                    animation: glow 2s infinite;
                    pointer-events: none;
                }

                @keyframes glow {
                    0%, 100% {
                        opacity: 0;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }

                /* стили для частиц */
                .particle {
                    position: absolute;
                    width: 1px;
                    height: 4px;
                    background: rgba(255, 255, 255, 0.8);
                    border-radius: 70%;
                    pointer-events: none;
                    animation: particle-move 1.5s ease-out forwards;
                }

                @keyframes particle-move {
                    to {
                        opacity: 0;
                        transform: translate(var(--dx), var(--dy)) scale(0);
                    }
                }
            `}</style>
        </div>
    )
}
