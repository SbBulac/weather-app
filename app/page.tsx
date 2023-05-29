import { Form } from '@/components/Form';
import React from 'react';


export default function Home() {
  return (
    <>
      <div className="w-screen h-screen p-4 bg-gradient-to-r from-cyan-300 to-sky-400">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-white text-4xl lg:text-8xl">Weather App 🌥️</h1>
          <Form className="flex flex-col justify-center items-center gap-8" />
        </div>
      </div>
    </>
  )
}
