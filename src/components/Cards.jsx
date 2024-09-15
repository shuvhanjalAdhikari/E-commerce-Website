import React from 'react'
import nike from '../assets/Nike.png'
import { FaStar } from "react-icons/fa";

const Cards = (props) => {
  return (
    <div className=' h-[47vh] max-h-auto mt-5 w-[100%] -ml-16 flex flex-col justify-center items-center border-2  rounded-3xl p-10 shadow-lg '>
      
      <img src={props.img} alt="" className='flex justify-center max-h-[25vh] max-w-[50vw] object-contain ' />
      
      <div className=' flex flex-col  flex-1 mt-5 ] items-center justify-center '>
        {/* <hr className='w-[80%] ml-7 mb-10'/> */}
      <h1 className='text-center font-bold text-2xl -mt-5'>{props.name}</h1>
      <p className=' mt-3 text-2xl '>Price: {props.price}</p>
      <p className=' mt-5  text-yellow-500 text-3xl flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
      <button className=' bg-[#FF0000] text-white p-3 mt-5 rounded-full'>Add to Cart</button>
      </div>
      
     
    </div>
  )
}

export default Cards
