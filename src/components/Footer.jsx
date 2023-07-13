import { Link } from 'wouter'

function Footer() {
  return (
    <footer className='bg-[#30343F] relative pt-16 pb-20 md:pt-24 md:pb-32'>
      <div className='max-w-[85%] mx-auto flex justify-between text-white'>
        <ul className='md:text-xl space-y-2'>
          <li><Link href='/shop'>SHOP</Link></li>
          <li>REGISTRARSE</li>
          <li>INGRESAR</li>
          <li><Link href='/contact'>CONTACTO</Link></li>
        </ul>
        <img src="/multimedia/branding/isotype.svg" alt="" className='w-28 md:w-36 h-auto' />
        <span className='text-sm absolute bottom-2 md:text-base left-1/2 transform -translate-x-1/2 text-center w-full'>Todos los derechos reservados 2023 - Funkoshop - Tartaglia Rodrigo</span>
      </div>
    </footer>
  )
}

export default Footer