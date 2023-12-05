import React from 'react'
import supportImg from '../assets/support.jpeg'
import { FaArrowRight } from "react-icons/fa6";

const Support = () => {
  return (
    <section name='support' className='w-full relative'>
      <div className='w-full bg-slate-900/90 absolute'>
        <img className='mix-blend-overlay w-full h-full' src={supportImg} alt='support_img'/>
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-3xl text-center uppercase text-slate-300 font-bold'>Support</h2>
          <h3 className='py-6 text-5xl font-bold text-center'>We support you</h3>
          <p className='text-md py-4 md:text-3xl text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</p>
        </div>

        <div className='grid grid-cols-1 px-4 md:pt-12 text-black lg:grid-cols-3 gap-x-8'>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='py-6 text-2xl font-bold'>Support</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>

            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>More Info...<FaArrowRight className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='py-6 text-2xl font-bold'>Inquiries</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>

            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>More Info...<FaArrowRight className='w-5 ml-2'/></p>
            </div>
          </div>
          <div className='bg-white shadow-2xl rounded-xl'>
            <div className='p-8'>
              <h3 className='py-6 text-2xl font-bold'>Sales</h3>
              <p className='text-xl text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
            </div>

            <div className='py-4 pl-8 bg-slate-100'>
              <p className='flex items-center text-blue-600'>More Info...<FaArrowRight className='w-5 ml-2'/></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support