import React from 'react';
import { useState } from 'react';
import { Link } from 'wouter'

function Card({ key, funko }) {

  const [hover, setHover] = useState(false)

  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <Link href={`/products/${funko.id}`}>
      <div className="max-w-[360px] mx-auto cursor-pointer flex md:block my-1 md:my-0 h-[200px] md:h-auto py-3 md:py-0">
        <div className='relative flex'>
          <img src={hover ? funko.hoverImg : funko.img} alt={funko.title} className="h-full w-full max-w-[150px] max-h-[150px] md:max-h-none md:max-w-none object-cover m-auto md:m-0 md:w-full md:h-full" onMouseEnter={toggleHover} onMouseLeave={toggleHover} />
          {funko.isNew && (
            <span className='absolute top-0 right-0 bg-[#FF3333] py-0.5 px-2 text-xs md:py-2 md:px-5 md:text-sm font-semibold text-white'>NUEVO</span>
          )}
        </div>
        <div className='flex flex-col justify-center py-5 md:px-3.5 md:py-7 md:gap-3 flex-1 pl-4'>
          <h4 className="text-xs md:text-sm">{funko.category}</h4>
          <h3 className="text-lg font-bold">{funko.title}</h3>
          <h4 className="text-lg">${funko.price}</h4>
          <h5 className="text-xs font-bold text-blue-500">{funko.text}</h5>
        </div>
      </div>
      </Link>
      );
}

      export default Card;

      {/* <img
          src={imgUrl}
          alt={title}
          className="w-full"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        />
        {isNew && (
          <span className='absolute top-0 right-0 bg-[#FF3333] py-2 px-5 text-sm font-semibold text-white'>NUEVO</span>
        )}
      </div>
      <div className='flex flex-col px-3.5 py-7 gap-3'>
        <h4 className="text-sm">{category}</h4>
        <h3 className="text-lg font-bold">{title}</h3>
        <h4 className="text-lg">${price}</h4>
        <h5 className="text-xs font-bold text-blue-500">{dues}</h5> */}