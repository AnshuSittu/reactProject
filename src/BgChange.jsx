import React from 'react'
import { useState } from 'react'

const BgChange = () => {
    const [color, setColor] = useState('#ECEEDF')

    // function ChangeColor(color){
    //     setColor(color)
    // }
     
  return (
    <>
       <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
       <h2 className='flex justify-center p-2 font-bold text-2xl text-white'>On Click The background Color will change</h2>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
                <button onClick={()=> setColor('#F78D60')} className='otline-none px-4 cursor-pointer py-1 rounded-full backdrop-blur-2xl text-orange-500 shadow-lg'>Orange</button>
                <button onClick={()=> setColor('#FFC900')} className='otline-none px-4 cursor-pointer py-1 rounded-full backdrop-blur-2xl text-yellow-500 shadow-lg'>Yellow</button>
                <button onClick={()=> setColor('#386641')} className='otline-none px-4 cursor-pointer py-1 rounded-full backdrop-blur-2xl text-green-500 shadow-lg'>Green</button>
                
            </div>
        </div>
       </div>
    </>
  )
}

export default BgChange