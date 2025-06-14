"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { cn } from "../lib/utils"

interface StatusPopupProps {
    isOpen: boolean
    onClose: () => void
    status: "success" | "error"
    message: string
    details?: string
}

export default function StatusPopup({ isOpen, onClose, status, message, details }: StatusPopupProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            // Auto close after 8 seconds
            const timer = setTimeout(() => {
                handleClose()
            }, 8000)

            return () => clearTimeout(timer)
        }
    }, [isOpen])

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => {
            onClose()
        }, 300) // Animation duration
    }

    return isOpen ? (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose()
            }}
        >
            <div
                className={cn(
                    "w-full max-w-md rounded-lg p-6 shadow-xl transform transition-all duration-300 bg-[#1a1c1e]",
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                        <h3 className={cn("text-xl font-semibold", status === "success" ? "text-green-400" : "text-red-400")}>
                            {status === "success" ? "Успешно" : "Ошибка"}
                        </h3>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="mb-4">
                    <p className="text-[#D9E3EA] text-lg mb-2">{message}</p>
                    {details && <p className="text-[#9BA9B4] text-sm">{details}</p>}
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={handleClose}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-colors bg-[#2c2e63]",
                        )}
                    >
                        Закрыть
                    </button>
                </div>
            </div>
        </div>
    ) : null
}
