import Banner from '/src/components/Banner'
import Carrousel from '/src/components/Carrousel'

function Home() {
  return (
    <div>
      <Banner />
      <div className='flex flex-col max-w-[85%] mx-auto'>
        <div className='flex flex-col-reverse justify-between items-center text-center mb-32 md:flex-row md:mb-0 md:text-left'>
          <div className='max-w-md flex flex-col gap-4 items-center md:items-start'>
            <h2 className='text-4xl md:text-5xl'>STAR WARS & THE MANDALORIAN</h2>
            <p className='text-xl md:text-2xl text-[#4F4F4F]'>Disfruta de una saga que sigue agregando personajes a su coleccion.</p>
            <hr className="border-t-2 border-red-500 mt-8 w-full" />
            <button className='text-xl md:text-2xl text-white bg-[#30343F] w-72 h-16 rounded-full mt-8'>VER COLECCION</button>
          </div>
          <img src="/src/multimedia/star-wars/baby-yoda-1.png" alt="" className='w-[600px] drop-shadow-2xl object-contain' />
        </div>
        <div className='flex flex-col-reverse justify-between items-center text-center mb-32 md:flex-row-reverse md:mb-0 md:text-left'>
          <div className='max-w-md flex flex-col gap-4 items-center md:items-start'>
            <h2 className='text-4xl md:text-5xl'>POKEMON INDIGO</h2>
            <p className='text-xl md:text-2xl text-[#4F4F4F]'>Atrapa todos los que puedas y disfruta de una coleccion llena de amigos.</p>
            <hr className="border-t-2 border-red-500 mt-8  w-full" />
            <button className='text-xl md:text-2xl text-white bg-[#30343F] w-72 h-16 rounded-full mt-8'>VER COLECCION</button>
          </div>
          <img src="/src/assets/multimedia/pokemon/vulpix-1.webp" alt="" className='w-[600px] drop-shadow-2xl  object-contain' />
        </div>
        <div className='flex flex-col-reverse justify-between items-center text-center mb-32 md:flex-row md:mb-0 md:text-left'>
          <div className='max-w-md flex flex-col gap-4 items-center md:items-start'>
            <h2 className='text-4xl md:text-5xl'>HARRY POTTER</h2>
            <p className='text-xl md:text-2xl text-[#4F4F4F]'>Revivi los recuerdos de una saga llena de magia y encanto.</p>
            <hr className="border-t-2 border-red-500 mt-8  w-full" />
            <button className='text-xl md:text-2xl text-white bg-[#30343F] w-72 h-16 rounded-full mt-8'>VER COLECCION</button>
          </div>
          <img src="/src/assets/snape-patronus-1.webp" alt="" className='w-[600px] drop-shadow-2xl  object-contain' />
        </div>
        <h3 className='text-center text-4xl font-bold md:text-left md:text-5xl'>ULTIMOS LANZAMIENTOS</h3>
        <Carrousel condition="isNew" condition2={true}/>
      </div>
    </div>
  )
}

export default Home