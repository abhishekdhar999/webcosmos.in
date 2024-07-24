import React from 'react'
// import Earth from '@/Components/Earth/Earth'
import SmoothScroller from '@/Components/SmoothScroller/SmoothScroller'
import dynamic from 'next/dynamic'
import Projects from '@/Components/Projects/Projects'
import { LuArrowDownRightFromCircle } from "react-icons/lu";
export default function Productspage() {
    const Earth = dynamic(() => import('@/Components/Earth/Earth'), {

        ssr: false,
      
        loading: () => <img src="https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=2048&q=75"></img>
      
      })
  return (
    <>
    {/* <div className='flex justify-between mx-24 my-12'>
        <h1 className='text-8xl mx-12 font-thin'>OUR <br /><span className='mx-24'>SERVICES</span> </h1>
        <span className='text-8xl mx-24 mt-20'><LuArrowDownRightFromCircle /></span>
    </div> */}
      
      <div className='flex justify-center items-center text-center mx-52 lg:mx-72 my-12 mb-40'>
        <h1 className='curved-line text-6xl font-thin '>We engineer one-of-a-kind websites with a focus on these core principles</h1>
      </div>
      <div>
<SmoothScroller>
<main className="main">

<Earth />
<Projects></Projects>
</main>
        </SmoothScroller>
      </div>
     
    </>
  )
}
