import { useState } from 'react'

function Filterbar() {

    const [nuevos, setNuevos] = useState(false);


    return (
        <div className='font-semibold space-y-10'>
            <div className='flex flex-col'>
                BUSCAR
                <input type="text" placeholder='Producto o Categoria' className='max-w-[200px] border-2 border-[#30343F] p-1.5 rounded-lg text-base mt-2.5' />
            </div>
            <div className='flex flex-col'>
                ORDENAR POR
                <select name="" id="" className='max-w-[200px] border-2 border-[#30343F] p-1.5 rounded-lg mt-2.5 text-sm'>
                    <option value="">Mayor a Menor</option>
                    <option value="">Menor a Mayor</option>
                </select>
            </div>
            <div className='flex flex-col'>
                PRECIO
                <div className='flex gap-3 text-xs items-center mt-2.5'>
                    <input type="number" name="" id="" placeholder='MIN' className='w-20 border-2 border-[#30343F] text-center h-7 rounded-lg' />
                    -
                    <input type="number" name="" id="" placeholder='MAX' className='w-20 border-2 border-[#30343F] text-center h-7 rounded-lg' />
                </div>
            </div>
            <div className='flex flex-col'>
                FILTRAR
                <div className='space-y-2 text-base ml-4 mt-2.5'>
                    <span className='flex gap-2 items-center'>
                        <input
                            type="checkbox"
                            name="news"
                            id=""
                            className='w-[1rem] h-[1rem]'
                            checked={nuevos}
                            onChange={e => setNuevos(e.target.checked)}
                        />
                        <label htmlFor="news">NUEVOS</label>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <input type="checkbox" name="offers" id="" className='w-[1rem] h-[1rem]' />
                        <label htmlFor="offers">OFERTAS</label>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <input type="checkbox" name="specialEdition" id="" className='w-[1rem] h-[1rem]' />
                        <label htmlFor="specialEdition">EDICION ESPECIAL</label>
                    </span>
                    <span className='flex gap-2 items-center'>
                        <input type="checkbox" name="favs" id="" className='w-[1rem] h-[1rem]' />
                        <label htmlFor="favs">FAVORITOS</label>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Filterbar