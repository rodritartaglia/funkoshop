import React from 'react'
import Card from '../components/Card'
import funkos from '../../data/funkos.json'
import Filterbar from '../components/Filterbar'

function Shop() {
  return (
    <div className='flex flex-col h-full max-w-[85%] mx-auto mt-16 text-lg md:flex-row'>
      <aside className='w-[18%]'>
        <Filterbar/>
      </aside>
      <section className='flex-1 md:grid md:grid-rows-3 md:gap-5 md:p-5 md:grid-cols-3'>
        {funkos.map(funko => (
          <Card key={funko.id} funko={funko}/>
        ))}
      </section>
    </div>
  )
}

export default Shop