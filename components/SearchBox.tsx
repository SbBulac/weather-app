'use client';

import React, { useState } from 'react'

interface MySearchBoxProps {
  placeholder: string,
  className: string,
  addMessage: (message: string) => void
}

export const SearchBox: React.FC<MySearchBoxProps> = ({ addMessage, placeholder, className }) => {

  const [city, setCity] = useState("")

  const sendMessage = () => {
    addMessage(city)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <input onChange={(e) => setCity(e.target.value)} value={city} placeholder={placeholder} type="text" className={className} required />
      <button onClick={sendMessage} className={"bg-blue-700 w-32 py-3 px-8 rounded-full hover:bg-blue-600 lg:w-40"}>Buscar</button>
    </div>

  )
}