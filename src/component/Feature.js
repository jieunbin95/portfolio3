import React from 'react'
import { FaCheck } from "react-icons/fa";

const Feature = () => {
  return (
    <section name='feature' className='w-full my-40 h-screen'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center pt-40'>Features</h2>
        <p className='py-8 text-2xl text-center text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-20'>
          <div className='flex'>
            <div>
             <FaCheck className='text-blue-600 mt-1 mr-3 w-7'/>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Real-Time</h3>
              <p className='pt-2 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
             <FaCheck className='text-blue-600 mt-1 mr-3 w-7'/>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Real-Time</h3>
              <p className='pt-2 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
             <FaCheck className='text-blue-600 mt-1 mr-3 w-7'/>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Real-Time</h3>
              <p className='pt-2 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
             <FaCheck className='text-blue-600 mt-1 mr-3 w-7'/>
            </div>

            <div>
              <h3 className='text-lg font-bold'>Real-Time</h3>
              <p className='pt-2 pb-4 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores maxime deserunt voluptatibus consequatur similique
                voluptates!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feature