import React from 'react'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div class='mx-auto container mt-3'>
      <section className="hero_section md:px-8 py-8">
         <h1 className="text-white font-bold text-2xl px-3 xl:px-0 xl:text-4xl  "> Enroll Course </h1>
         <h1 className="text-white font-bold text-2xl px-3 xl:px-0 xl:text-4xl "> Join with us</h1>
         <p className="text-gray-300 py-2 text-sm max-w-xl leading-relaxed px-3 xl:px-0  "> It is a long established fact that a reader will be distracted by the readable content.</p>

          <form class='px-2 xl:px-0'>
              <input type="email" class='ms-1 px-4 py-3 ' placeholder="Type your Email"/>
              <button className="px-4 py-3 lg:my-2 lg:ms-1 sm:items-center bg-teal-600 text-white text-center block rounded sm:w-auto  sm:px-2 sm:py-2">
                 Subscribe
              </button>
           </form>
           
      </section>
    </div>
  )
}

export default HeroSection