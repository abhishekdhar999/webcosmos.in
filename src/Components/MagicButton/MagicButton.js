import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function MagicButton({name}) {
  return (
    <>
      
      <a href="#" className="button ">
        <span className='flex '>
            <span className="button__text text-center font-bold">
                {name}
            </span>
<span className='ml-2 text-2xl'>
<FaArrowRight />
</span>
            </span>
            <img src="cone.png" alt="" class="button__cone"/>
            <img src="torus.png" alt="" class="button__torus"/>
            <img src="icosahedron.png" alt=""   class="button__icosahedron"/>
            <img src="sphere.png" alt="" class="button__sphere"/>
        </a>

   </>
  )
}
