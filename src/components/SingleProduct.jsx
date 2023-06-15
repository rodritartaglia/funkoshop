import React from 'react'
import { useState } from 'react';
import { useRoute } from "wouter"
import funkos from '../../data/funkos.json'
import Carrousel from './Carrousel'

function SingleProduct() {

    const [match, params] = useRoute("/products/:id")
    const product = funkos.find((funko) => funko.id == params.id)

    const [hover, setHover] = useState(false)

    const toggleHover = () => {
        setHover(!hover)
    }

    return (
        <div className='max-w-[85%] mx-auto space-y-28'>
            <div className='flex'>
                <img src={hover ? product.hoverImg : product.img} alt={product.title} className='flex-1 w-[550px] h-[550px] object-contain' onMouseEnter={toggleHover} onMouseLeave={toggleHover} />
                <div className='flex flex-col flex-1 justify-center space-y-2'>
                    <h4 className="text-sm">{product.category}</h4>
                    <h3 className="text-3xl font-bold">{product.title}</h3>
                    <p className='text-lg'>Figura coleccionable de {product.title} - {product.category} edicion limitada</p>
                    <h4 className="text-2xl">${product.price}</h4>
                    <h5 className="text-xs font-bold text-blue-500"><a href="">Ver métodos de pago</a> - {product.text}</h5>
                </div>
            </div>
            <div>
                <h3 className='text-center text-4xl font-bold md:text-left md:text-5xl'>PRODUCTOS RELACIONADOS</h3>
                <Carrousel condition2={product.category} condition="category" />
            </div>
        </div>
    )
}

export default SingleProduct