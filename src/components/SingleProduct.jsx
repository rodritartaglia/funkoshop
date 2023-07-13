import { useState } from 'react';
import { useRoute } from "wouter"
import funkos from '/data/funkos.json'
import Carrousel from '/src/components/Carrousel'

function SingleProduct() {

    const [, params] = useRoute("/products/:id")
    const product = funkos.find((funko) => funko.id == params.id)

    const [hover, setHover] = useState(false)
    const [cantidad, setCantidad] = useState(0)

    const toggleHover = () => {
        setHover(!hover)
    }

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1)
    }

    const decremantarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1)
        }
    }



    return (
        <div className='max-w-[85%] mx-auto space-y-28'>
            <div className='flex'>
                <img src={hover ? product.hoverImg : product.img} alt={product.title} className='flex-1 w-[550px] h-[550px] object-contain' onMouseEnter={toggleHover} onMouseLeave={toggleHover} />
                <div className='flex flex-col flex-1 justify-center space-y-5'>
                    <h4 className="text-sm">{product.category}</h4>
                    <h3 className="text-3xl font-bold">{product.title}</h3>
                    <p className='text-lg'>Figura coleccionable de {product.title} - {product.category} edicion limitada</p>
                    <h4 className="text-2xl">${product.price}</h4>
                    <div className='flex justify-start text-center items-center align-middle space-x-5'>
                        <button className='w-9 h-9 bg-[#4F4F4F] text-white flex justify-center align-middle items-center' onClick={decremantarCantidad}>
                            <span className='text-3xl w-fit'>-</span>
                        </button>
                        <span className='w-8 h-8 border border-solid border-[#C9C9C9] flex justify-center align-middle items-center text-lg'>{cantidad}</span>
                        <button className='w-9 h-9 bg-[#4F4F4F] text-white text-4xl flex justify-center align-middle items-center' onClick={aumentarCantidad}>
                            <span className='text-3xl w-fit'>+</span>
                        </button>
                        <button className='w-44 h-9 bg-[#FF3333] text-white'>Agregar al Carrito</button>
                    </div>
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