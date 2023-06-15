import React from 'react'
import { Link } from 'wouter'

function Banner() {
    return (
        <div className='w-vw md:h-[50vh] md:bg-[url("./multimedia/funkos-banner.webp")] bg-cover bg-fixed bg-no-repeat'>
            <div className='max-w-[85%] mx-auto text-black md:text-white py-[7.5%] text-center md:text-left mt-10 md:mt-0'>
                <h3 className='text-4xl font-bold'>Nuevos Ingresos</h3>
                <p className='my-2'>Descubri el proximo Funko Pop de tu coleccion</p>
                <Link href='/shop'><button className='w-52 h-12 bg-black md:bg-white rounded-full text-white md:text-black text-xl font-medium mt-10'>SHOP</button></Link>
            </div>
        </div>
    )
}

export default Banner