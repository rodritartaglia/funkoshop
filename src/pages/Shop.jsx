import Card from '/src/components/Card'
import funkos from '/data/funkos.json'
import Filterbar from '/src/components/Filterbar.jsx'

function Shop() {
  return (
    <div className='flex flex-col h-full max-w-[85%] mx-auto mt-16 text-lg md:flex-row'>
      <aside className='md:w-[18%]'>
        <Filterbar/>
      </aside>
      <section className='flex-1 mt-16 md:mt-0 md:grid md:grid-rows-3 md:gap-5 md:p-5 md:grid-cols-3'>
        {funkos.map(funko => (
          <Card key={funko.id} funko={funko}/>
        ))}
      </section>
    </div>
  )
}

export default Shop