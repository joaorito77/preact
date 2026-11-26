'use client'
import {useEffect, useState } from "react"

export default function Contador() {

    // Gestão de Estados

    const [count, setCount] = useState(0)

   

   
    // Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl text-black">

            <h2>Contador</h2>
            <p>O contador vai em <span> {count}  </span>!</p>

          <div className="flex gap-5">
            <button
                className='p-4 bg-white rounded-2xl text-black hover:underline hover:bg-blue-900'
                onClick={() => setCount (count + 1)}
            >
                Incrementar
            </button>

            
            <button
                className='p-4 bg-white rounded-2xl text-black hover:underline hover:bg-blue-900'
                onClick={() => setCount (count - 1)}
            >
                Decrementar
            </button>

            
            <button
                className='p-4 bg-white rounded-2xl text-black hover:underline hover:bg-blue-900'
                onClick={() => setCount (0)}
            >
                Reset
            </button>

          </div>
        </section>
    )
}