"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox"
import { RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "../lib/utils"
import StatusPopup from "@/components/ui/status-popup"
import sendCalculatorResults from "@/components/lib/mail";

interface FormData {
    taskType: string
    otherTaskType: string
    providedInfo: string[]
    otherProvidedInfo: string
    normativeBase: string
    otherNormativeBase: string
    region: string
    urgency: string
    otherUrgency: string
    phone: string
    messenger: string
}

export interface PopupState {
    isOpen: boolean
    status: "success" | "error"
    message: string
    details?: string
}


export default function Calculator() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        taskType: "",
        otherTaskType: "",
        providedInfo: [],
        otherProvidedInfo: "",
        normativeBase: "",
        otherNormativeBase: "",
        region: "",
        urgency: "",
        otherUrgency: "",
        phone: "",
        messenger: "",
    })
    const [phoneError, setPhoneError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [popup, setPopup] = useState<PopupState>({
        isOpen: false,
        status: "success",
        message: "",
        details: "",
    })

    const handleRadioChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value })
    }

    const handleCheckboxChange = (field: string, value: string) => {
        const currentValues = formData[field as keyof typeof formData] as string[]
        const newValues = currentValues.includes(value)
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value]
        setFormData({ ...formData, [field]: newValues })
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value })
    }

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "")

        if (value.length <= 11) {
            let formattedValue = ""
            if (value.length > 0) formattedValue = "+7"
            if (value.length > 1) formattedValue += ` (${value.substring(1, Math.min(4, value.length))}`
            if (value.length > 4) formattedValue += `) ${value.substring(4, Math.min(7, value.length))}`
            if (value.length > 7) formattedValue += `-${value.substring(7, Math.min(9, value.length))}`
            if (value.length > 9) formattedValue += `-${value.substring(9, 11)}`

            setFormData({ ...formData, phone: formattedValue })
            setPhoneError(value.length === 11 ? "" : "Введите полный номер телефона")
        }
    }

    const submitForm = async () => {
        setIsSubmitting(true)
        try {
            await sendCalculatorResults(formData)
            // Сброс формы после успешной отправки
            setFormData({
                taskType: "",
                otherTaskType: "",
                providedInfo: [],
                otherProvidedInfo: "",
                normativeBase: "",
                otherNormativeBase: "",
                region: "",
                urgency: "",
                otherUrgency: "",
                phone: "",
                messenger: "",
            })
            setStep(1)
        } catch (error) {
            console.error("Ошибка при отправке формы:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const nextStep = () => {
        if (step === 6 && formData.phone.replace(/\D/g, "").length !== 11) {
            setPhoneError("Введите полный номер телефона")
            return
        }
        step < 6 ? setStep(step + 1) : submitForm()
    }

    const prevStep = () => step > 1 && setStep(step - 1)
    const skipStep = () => (step === 2 || step === 5) && setStep(step + 1)

    const closePopup = () => {
        setPopup((prev) => ({ ...prev, isOpen: false }))
    }

    return (
        <section className="py-12 md:py-16 lg:py-20  ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#D9E3EA] mb-6 text-center">
                        Калькулятор стоимости сметных услуг
                    </h2>
                    <p className="text-[#9BA9B4] max-w-2xl text-center mb-8">
                        Ответьте на несколько вопросов и получите предварительную стоимость услуг
                    </p>

                    <div className="w-full max-w-3xl bg-[#212325] rounded-lg shadow-xl p-6 md:p-8">
                        <div className="mb-6">
                            <div className="flex justify-between mb-2">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <div
                                        key={num}
                                        className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium",
                                            step === num
                                                ? "bg-[#2c2e63] text-white"
                                                : step > num
                                                    ? "bg-[#2c2e63] text-white"
                                                    : "bg-gray-700 text-[#9BA9B4]",
                                        )}
                                    >
                                        {num}
                                    </div>
                                ))}
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full">
                                <div
                                    className="bg-[#2c2e63] h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${(step / 6) * 100}%` }}
                                />
                            </div>
                        </div>

                        <div className="text-[#9BA9B4]">
                            {step === 1 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">Что требуется сделать</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {["Анализ сметы", "Сформировать смету", "Составить акты КС", "Другое"].map((task) => (
                                            <div
                                                key={task}
                                                className={cn(
                                                    "p-4 rounded-lg border cursor-pointer",
                                                    formData.taskType === task
                                                        ? "border-[#2c2e63] bg-[#2c2e63]/10"
                                                        : "border-gray-700 bg-[#2a2c2e]",
                                                )}
                                                onClick={() => handleRadioChange("taskType", task)}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={task}
                                                        checked={formData.taskType === task}
                                                        onChange={() => handleRadioChange("taskType", task)}
                                                    />
                                                    <Label className="cursor-pointer">{task}</Label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {formData.taskType === "Другое" && (
                                        <Input
                                        className="form-input w-full text-gray-300"
                                        placeholder="Укажите что требуется сделать"
                                            value={formData.otherTaskType}
                                            onChange={(e) => handleInputChange("otherTaskType", e.target.value)}
                                        />
                                    )}
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">Что сможете предоставить</h3>
                                    <p className="text-sm italic">можно пропустить</p>
                                    <p>Это не обязательный вопрос. Ответьте если обладаете данной информацией.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {["Проектную документацию", "Рукописные записи", "Ведомость объёмов", "Другое"].map(info => (
                                            <div key={info} className={cn(
                                                "p-4 rounded-lg border cursor-pointer",
                                                formData.providedInfo.includes(info) ? "border-[#2c2e63] bg-[#2c2e63]/10" : "border-gray-700 bg-[#2a2c2e]"
                                            )} onClick={() => handleCheckboxChange("providedInfo", info)}>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox
                                                        checked={formData.providedInfo.includes(info)}
                                                        onChange={() => handleCheckboxChange("providedInfo", info)}
                                                    />
                                                    <Label className="cursor-pointer">{info}</Label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {formData.providedInfo.includes("Другое") && (
                                        <Input
                                            className="mt-4 bg-[#2a2c2e] border-gray-700 text-[#D9E3EA]"
                                            placeholder="Укажите что сможете предоставить"
                                            value={formData.otherProvidedInfo}
                                            onChange={(e) => handleInputChange("otherProvidedInfo", e.target.value)}
                                        />
                                    )}
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">В какой нормативной базе нужно составить смету?</h3>
                                    <p>Требования по нормативной базе зачастую исходят от того кто требует от вас смету. Основные нормативные базы: ФЕР, ТЕР, ТСН, СН-2012, ГОСЭТАЛОН 2012</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {["ФЕР", "ТЕР", "ТСН", "СН-2012", "ГОСЭТАЛОН 2012", "Другое"].map(base => (
                                            <div key={base} className={cn(
                                                "p-4 rounded-lg border cursor-pointer",
                                                formData.normativeBase === base ? "border-[#2c2e63] bg-[#2c2e63]/10" : "border-gray-700 bg-[#2a2c2e]"
                                            )} onClick={() => handleRadioChange("normativeBase", base)}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={base}
                                                        checked={formData.normativeBase === base}
                                                        onChange={() => handleRadioChange("normativeBase", base)}
                                                    />
                                                    <Label className="cursor-pointer">{base}</Label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {formData.normativeBase === "Другое" && (
                                        <Input
                                            className="mt-4 bg-[#2a2c2e] border-gray-700 text-[#D9E3EA]"
                                            placeholder="Укажите нормативную базу"
                                            value={formData.otherNormativeBase}
                                            onChange={(e) => handleInputChange("otherNormativeBase", e.target.value)}
                                        />
                                    )}
                                </div>
                            )}

                            {step === 4 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">Для какого региона будет составляться смета</h3>
                                    <p>Регион для которого составляется смета, кардинально влияет на ценообразование</p>
                                    <Input
                                        className="bg-[#2a2c2e] border-gray-700 text-[#D9E3EA]"
                                        placeholder="Введите регион"
                                        value={formData.region}
                                        onChange={(e) => handleInputChange("region", e.target.value)}
                                    />
                                </div>
                            )}

                            {step === 5 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">Как срочно нужна смета</h3>
                                    <p className="text-sm italic">можно пропустить</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {["Вчера", "Сегодня", "1-2 дня", "Не срочно", "Другое"].map(urgency => (
                                            <div key={urgency} className={cn(
                                                "p-4 rounded-lg border cursor-pointer",
                                                formData.urgency === urgency ? "border-[#2c2e63] bg-[#2c2e63]/10" : "border-gray-700 bg-[#2a2c2e]"
                                            )} onClick={() => handleRadioChange("urgency", urgency)}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value={urgency}
                                                        checked={formData.urgency === urgency}
                                                        onChange={() => handleRadioChange("urgency", urgency)}
                                                    />
                                                    <Label className="cursor-pointer">{urgency}</Label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {formData.urgency === "Другое" && (
                                        <Input
                                            className="mt-4 bg-[#2a2c2e] border-gray-700 text-[#D9E3EA]"
                                            placeholder="Укажите срочность"
                                            value={formData.otherUrgency}
                                            onChange={(e) => handleInputChange("otherUrgency", e.target.value)}
                                        />
                                    )}
                                </div>
                            )}

                            {step === 6 && (
                                <div className="space-y-4">
                                    <h3 className="text-xl text-[#D9E3EA] font-semibold">Отлично! Вопросы кончились а мы готовы прислать Вам стоимость!</h3>
                                    <p>Куда прислать результат? Можно выбрать мессенджер если удобно!</p>
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="phone" className="block mb-2">Введите телефон</Label>
                                            <Input
                                                id="phone"
                                                className="bg-[#2a2c2e] border-gray-700 text-[#D9E3EA]"
                                                placeholder="+7 (XXX) XXX-XX-XX"
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                            />
                                            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                                        </div>
                                        <div>
                                            <Label className="block mb-2">Предпочитаемый мессенджер (необязательно)</Label>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                {["WhatsApp", "Telegram", "Viber"].map(messenger => (
                                                    <div key={messenger} className={cn(
                                                        "p-4 rounded-lg border cursor-pointer",
                                                        formData.messenger === messenger ? "border-[#2c2e63] bg-[#2c2e63]/10" : "border-gray-700 bg-[#2a2c2e]"
                                                    )} onClick={() => handleRadioChange("messenger", messenger)}>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem
                                                                value={messenger}
                                                                checked={formData.messenger === messenger}
                                                                onChange={() => handleRadioChange("messenger", messenger)}
                                                            />
                                                            <Label className="cursor-pointer">{messenger}</Label>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 flex justify-between">
                            {step > 1 && (
                                <Button
                                    variant="outline"
                                    onClick={prevStep}
                                    className="bg-transparent border-[#9BA9B4] text-[#9BA9B4] hover:bg-[#2a2c2e] hover:text-[#D9E3EA]"
                                >
                                    Назад
                                </Button>
                            )}
                            {(step === 2 || step === 5) && (
                                <Button
                                    variant="ghost"
                                    onClick={skipStep}
                                    className="text-[#9BA9B4] hover:text-[#D9E3EA] hover:bg-[#2a2c2e]"
                                >
                                    Пропустить
                                </Button>
                            )}
                            <Button
                                onClick={nextStep}
                                className="ml-auto bg-[#2c2e63] text-[#D9E3EA] hover:bg-[#2c2e63]/70"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Отправка..." : step === 6 ? "Отправить" : "Далее"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Status Popup */}
            <StatusPopup
                isOpen={popup.isOpen}
                onClose={closePopup}
                status={popup.status}
                message={popup.message}
                details={popup.details}
            />
        </section>
    )
}
