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
        {/* <img src="/branding/isotype.svg" alt="" className='w-28 md:w-36 h-auto' /> */}
        <svg width="7rem" height="auto"  viewBox="0 0 143 117" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M85.847 65.844c-3.777 0-6.852 5.695-6.852 12.731 0 7.034 3.075 12.744 6.852 12.744 3.774 0 6.844-5.708 6.844-12.744.006-7.04-3.064-12.73-6.844-12.73ZM57.17 65.844c-3.784 0-6.853 5.695-6.853 12.731 0 7.034 3.07 12.744 6.854 12.744 3.779 0 6.846-5.708 6.846-12.744s-3.067-12.73-6.846-12.73Z" fill="#F33"/><path d="M131.39 29.845c1.154-2.823 4.938-14.21-1.199-29.593 0 0-9.404-2.975-30.705 11.58C90.567 9.376 80.983 9.01 71.504 9.01s-19.056.367-28.002 2.829C22.21-2.725 12.81.25 12.81.25c-6.13 15.391-2.34 26.77-1.191 29.595C4.4 37.647 0 47.608 0 59.819c0 45.974 29.778 56.37 71.337 56.37 41.579 0 71.663-10.394 71.663-56.37 0-12.211-4.4-22.174-11.62-29.974h.01Zm-59.882 77.547c-29.52 0-53.453-1.383-53.453-29.983 0-6.83 3.361-13.208 9.124-18.477 9.598-8.796 25.875-4.147 44.33-4.147 18.47 0 34.723-4.649 44.332 4.137 5.768 5.279 9.14 11.637 9.14 18.48 0 28.609-23.949 29.99-53.47 29.99h-.003Z" fill="#F33"/></svg>
        <span className='text-sm absolute bottom-2 md:text-base left-1/2 transform -translate-x-1/2 text-center w-full'>Todos los derechos reservados 2023 - Funkoshop - Tartaglia Rodrigo</span>
      </div>
    </footer>
  )
}

export default Footer