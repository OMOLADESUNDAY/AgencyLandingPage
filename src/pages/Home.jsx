import React from 'react'
import person1 from "../assets/images/21fd8eabe9529866bcfe246e063b62ddaab88852.jpg"
import person2 from "../assets/images/c5f171b23997a4b08f2dc59b41d67cb8fe523b0b.jpg"
import person3 from "../assets/images/d5af62883a3b905869e6bc1873e84fcade38610a.jpg"
const Home = () => {
  return (
    <div className='flex flex-col justify-center border items-center min-h-[80vh]'>
      <article className='flex items-center bg-[#F3F3F5] py-[6px] px-[12px] gap-[8px] w-[264.25px] h-[44px] rounded-[25px]'>
        <div className='flex'>
          <img src={person1} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] '  />
          <img src={person2} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] -ml-3' />
          <img src={person3} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] -ml-3'/>
        </div>
        <p>200+ Positive Review</p>
      </article>
      <h1 className='text-[48px]'><span>Bring joy</span> to your technology experience.</h1>
    </div>
  )
}

export default Home