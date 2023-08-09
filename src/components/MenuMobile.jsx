import { Link } from "wouter"

function MenuMobile({onClick}) {
    return (
        <div className='bg-[#30343F] absolute items-center w-full h-1/2 top-0 left-0 z-10'>
            <ul className="flex flex-col p-5 text-2xl absolute w-full bottom-0 divide-y-2" onClick={onClick}>
                <li className=" p-4"><Link href='/shop'>SHOP</Link></li>
                <li className=" p-4"><Link href='/contact'>CONTACTO</Link></li>
                <li className=" p-4">LOGIN</li>
                <li className=" p-4">CARRITO</li>
            </ul>
        </div>
    )
}

export default MenuMobile