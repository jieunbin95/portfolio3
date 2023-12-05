import React from 'react'

const About = () => {
  return (
    <section name='about' className='w-full h-screen'>
      <div className='flex flex-col justify-center p-4 max-w-screen-lg mx-auto'>
        <div className='text-center mt-20'>
          <h1 className='text-5xl font-bold md:pt-10'>
            About this company
          </h1>
          <p className='py-6 text-3xl text-gray-500'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.
          </p>
        </div>

        <p className='mt-10 text-md md:mt-20 md:text-xl'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
                    deserunt illum mollitia officiis qui exercitationem perferendis neque
                    quasi a recusandae necessitatibus tempora iusto! Blanditiis error
                    iste, totam fugiat recusandae rerum laborum perferendis molestiae
                    aperiam asperiores nemo. Magni dolor maxime debitis vitae, eaque hic
                    ab mollitia voluptatibus, a nostrum eveniet laborum!
        </p>

        <br/>

        <p className='text-md md:text-xl'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
                    pariatur, vel similique sint, nobis aspernatur ut praesentium
                    explicabo ipsam aliquid quasi laboriosam et culpa possimus repudiandae
                    quisquam ullam maiores ab unde. Fugiat odio mollitia nemo alias.
                    Commodi facilis atque nulla vero voluptatem explicabo. Quibusdam,
                    magni quo! Eum cupiditate debitis labore.
        </p>
      </div>
    </section>
  )
}

export default About