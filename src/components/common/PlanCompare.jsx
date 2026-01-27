import React, { useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid'
import ButtonPrimary from './ButtonPrimary';

const PlanCompare = ({ plans, features, tipo }) => {

    const [selectedPlan, setSelectedPlan] = useState(0);

    const renderValue = (value) => {
        if (value === true) {
            return <CheckIcon className={`w-5 h-5 mx-auto ${tipo === "farma" ? "text-[#1d98b7]" : "text-[#17359d]"}`} />
        }
        if (value === false) {
            return <XMarkIcon className="w-5 h-5 text-gray-400 mx-auto" />
        }
        // Es texto o número
        return <span className="text-gray-600 italic font-semibold">{value}</span>
    }

    const getHeaderBg = (index) => {
        if (index === 1) {
            return tipo === "farma"
                ? "bg-gradient-to-b from-[#1d98b7] to-[#2ec6df]"
                : "bg-gradient-to-b from-[#17359d] to-[#486de1]"
        }
        return "bg-[#f3faff]"
    }

    const getTextColor = (index) => {
        if (index === 1) return "text-white"
        return tipo === "farma" ? "text-[#1d98b7]" : "text-[#17359d]"
    }

    const getTabStyle = (index) => {
        const isActive = selectedPlan === index
        if (isActive) {
            return tipo === "farma"
                ? "bg-[#1d98b7] text-white"
                : "bg-[#17359d] text-white"
        }
        return "bg-gray-100 text-gray-600"
    }

    return (
        <div className="w-full">
            {/* Tabla para desktop */}
            <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="p-4 text-left bg-white min-w-[200px]">
                                <span className={`font-bold uppercase text-lg ${tipo === "farma" ? "text-[#1d98b7]" : "text-[#17359d]"}`}>
                                    Categorías
                                </span>
                            </th>
                            {plans.map((plan, index) => (
                                <th
                                    key={plan.id}
                                    className={`p-6 text-center min-w-[180px] ${getHeaderBg(index)} ${index === 1 ? "rounded-t-lg" : ""}`}
                                >
                                    <h3 className={`text-base font-bold uppercase mb-4 tracking-wide ${getTextColor(index)}`}>
                                        {plan.name}
                                    </h3>
                                    {tipo === "farma" ?
                                        <ButtonPrimary colorFrom='#2ec6df' colorTo='#2ec6df' className="uppercase" children='Comenzar' to="/demo" />
                                        : <ButtonPrimary colorFrom='#2b50c0' colorTo='#2b50c0' className="uppercase" children='Comenzar' to="/demo" />
                                    }

                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, featureIndex) => (
                            <tr
                                key={featureIndex}
                                className="border-b border-gray-100"
                            >
                                <td className="p-4 text-gray-700 text-sm bg-white">
                                    {feature.label}
                                </td>
                                {feature.values.map((value, valueIndex) => (
                                    <td
                                        key={valueIndex}
                                        className={`p-4 text-center ${valueIndex === 1 ? "bg-[#e8f7fa]/40" : "bg-white"}`}
                                    >
                                        {renderValue(value)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista móvil - Tabs para seleccionar plan */}
            <div className="lg:hidden">
                {/* Tabs de selección */}
                <div className="flex rounded-xl overflow-hidden mb-6 bg-gray-100 p-1">
                    {plans.map((plan, index) => (
                        <button
                            key={plan.id}
                            onClick={() => setSelectedPlan(index)}
                            className={`flex-1 py-3 px-2 text-xs font-bold uppercase tracking-wide transition-all rounded-lg ${getTabStyle(index)}`}
                        >
                            {plan.name}
                        </button>
                    ))}
                </div>

                {/* Header del plan seleccionado */}
                <div className={`p-6 text-center rounded-t-2xl ${getHeaderBg(selectedPlan)}`}>
                    <h3 className={`text-xl font-bold uppercase mb-3 ${getTextColor(selectedPlan)}`}>
                        {plans[selectedPlan]?.name}
                    </h3>
                    {tipo === "farma" ?
                        <ButtonPrimary colorFrom='#2ec6df' colorTo='#2ec6df' className="uppercase" children='Comenzar' to="/demo"/>
                        : <ButtonPrimary colorFrom='#17359d' colorTo='#17359d' className="uppercase" children='Comenzar' to="/demo"/>
                    }
                </div>

                {/* Lista de características del plan seleccionado */}
                <div className="bg-white rounded-b-2xl shadow-lg overflow-hidden">
                    {features.map((feature, featureIndex) => (
                        <div
                            key={featureIndex}
                            className={`flex justify-between items-center px-4 py-3 ${featureIndex % 2 === 0 ? "bg-white" : "bg-[#f8fcff]"} border-b border-gray-100`}
                        >
                            <span className="text-gray-700 text-sm flex-1 pr-3">
                                {feature.label}
                            </span>
                            <div className="flex-shrink-0">
                                {renderValue(feature.values[selectedPlan])}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicador de navegación */}
                <div className="flex justify-center mt-4 gap-2">
                    {plans.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedPlan(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${selectedPlan === index
                                ? (tipo === "farma" ? "bg-[#1d98b7]" : "bg-[#17359d]")
                                : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlanCompare