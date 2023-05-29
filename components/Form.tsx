'use client';

import React, { useState } from 'react'
import { SearchBox } from './SearchBox';

interface MyFormProps {
    className: string
}

export const Form: React.FC<MyFormProps> = ({ className }) => {
    
    const [city, setCity] = useState('')
    
    function addMessage(message: string) {
        setCity(message)
    }

    console.log(city)

    const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=3a803e279cd7486fb90175812232805&q=`
    const [weather, setWeather] = useState({
        city: '',
        country: '',
        day: 0,
        temp: '',
        condition: '',
        icon: '',
        conditionText: '',
    })

    const [error, setError] = useState({
        error: false,
        message: '',
    })

    const onSubmit = async (e: { preventDefault: () => void; }) => {


        e.preventDefault()

        try {
            if (!city.trim()) throw { message: 'Este campo es obligatorio' }
            const response = await fetch(`${API_WEATHER}${city}&aqi=no`)
            const data = await response.json()
            setWeather({
                city: data.location.name,
                country: data.location.country,
                day: data.current.is_day,
                temp: data.current.temp_c,
                condition: data.current.condition,
                icon: data.current.condition.icon,
                conditionText: data.current.condition.text,
            })
        } catch (error: any) {
            setError({
                error: true,
                message: error.message,
            })
        }
    }

    console.log(weather)

    return (
        <form className={className} onSubmit={onSubmit}>
            <SearchBox addMessage={addMessage} placeholder={"Busca una ciudad"} className={"text-black p-1  h-10 rounded-lg lg:w-96"} />

            {weather.city && (
                <div className='flex flex-col text-center items-center'>
                    <h1 className='text-xl lg:text-4xl'>{weather.city}, {weather.country}</h1>
                    <img className='w-16' src={weather.icon} alt="" />
                    <h2 className='lg:text-xl'>{weather.temp} °C</h2>
                    <p className='lg:text-xl'>{weather.conditionText}</p>
                </div>
            )}
        </form>
    )
}
