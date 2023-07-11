import { Link } from 'wouter'
import cartIcon from '/multimedia/icons/cart-icon.svg'

function Navbar() {
  return (
    <div className="bg-[#30343F] w-full py-5">
      <div className='text-white flex justify-between max-w-[85%] mx-auto'>
        <Link href='/'>
          <div className='flex items-center gap-5 cursor-pointer'>
            <img src="../multimedia/branding/isotype.svg" alt="" className='w-14 h-10 md:w-20 md:h-16' />
            <h1 className='hidden text-3xl md:inline'>FUNKOSHOP</h1>
          </div>
        </Link>
        <ul className='hidden md:flex items-center gap-14'>
          <li><Link href='/shop'>SHOP</Link></li>
          <li><Link href='/contact'>CONTACTO</Link></li>
          <li>LOGIN</li>
          <li><img src={cartIcon} alt="" className='w-8 h-6' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar