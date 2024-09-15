import React from 'react'
import bannerbackground from '../assets/home-banner-background.png'
import bannerimage from '../assets/bannerImage.png'
import nike from '../assets/Nike.png'
import adidas from '../assets/Adidas.png'
import puma from '../assets/Puma.png'
import campus from '../assets/Adidas2.png'
import Navbar from './Navbar'
import Cards from './Cards'
const Home = () => {
  return (
    <div className='relative home-container'>
        <Navbar/>
      <div className='home-banner-container'>
        <div className='home-banner-image absolute -mt-20 z-5'><img src={bannerbackground} alt=""  className='h-[60vh] ml-24 '/>
        </div>
        <h1 className='relative top-16 text-3xl ml-7 '>Welcome to our store</h1>
        <div>
            <img src={bannerimage} alt="" className='relative -rotate-[25deg]  h-96 mt-20 ml-44' />
        </div>

        <p className='relative -mt-[24rem] ml-12 text-balance'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <button className='absolute border-2 border-[#FF0000] rounded-full p-3 mt-3 ml-64 bg-[#FF0000] text-white'>Explore More</button>
      </div>

      <section className='features relative top-80 ml-40'>
        <div>
          <h1 className='text-3xl font-bold'>Top Trending</h1>
        </div>
        <div className=' flex flex-col gap-5'>
          <Cards img={nike} name="Nike Air Jordans" price="$96"/>
          <Cards img={adidas}name="Adidas" price="$112"/>
          <Cards img={puma} name="Puma" price="$100"/>
          <Cards img={campus} name="Adidas Campus" price="$76"/>
          

        </div>
      </section>
   </div>

  )
}

export default Home
