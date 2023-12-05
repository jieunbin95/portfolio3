import React from 'react'

const Feedback = () => {
  const image='https://www.adobe.com/acrobat/hub/media_173d13651460eb7e12c0ef4cf8410e0960a20f0ee.jpeg?width=750&format=jpeg&optimize=medium'

  return (
    <section name='feedback' className='w-full my-24 text-white bg-slate-700 h-screen'>
      <div className='max-w-6xl px-5 mx-auto text-center py-12'>
        <h2 className='text-4xl font-bold pt-20'>Testionials</h2>
        <p className='py-8 text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                    ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                    nostrum tempore.
        </p>


        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          <div className='flex flex-col items-center p-6 rounded-lg bg-gray-100/30 space-y-6 md:w-1/3'>
            <img src={image} alt='image' className='w-20 -mt-14 rounded-full'/>
            <h5 className='text-lg font-bold'>Ali ko</h5>
            <p className='text-sm'> “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
            </p>
          </div>
          <div className='hidden md:flex flex-col items-center p-6 rounded-lg bg-gray-100/30 space-y-6 md:w-1/3'>
            <img src={image} alt='image' className='w-20 -mt-14 rounded-full'/>
            <h5 className='text-lg font-bold'>Ali ko</h5>
            <p className='text-sm'> “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
            </p>
          </div>
          <div className='hidden md:flex flex-col items-center p-6 rounded-lg bg-gray-100/30 space-y-6 md:w-1/3'>
            <img src={image} alt='image' className='w-20 -mt-14 rounded-full'/>
            <h5 className='text-lg font-bold'>Ali ko</h5>
            <p className='text-sm'> “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
            </p>
          </div>
        </div>

        <button className='px-6 py-3 my-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl hover:scale-110'>Get Started</button>
      </div>
    </section>
  )
}

export default Feedback
