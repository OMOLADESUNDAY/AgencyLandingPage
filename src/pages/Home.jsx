import React from 'react'
import person1 from "../assets/images/21fd8eabe9529866bcfe246e063b62ddaab88852.jpg"
import person2 from "../assets/images/c5f171b23997a4b08f2dc59b41d67cb8fe523b0b.jpg"
import person3 from "../assets/images/d5af62883a3b905869e6bc1873e84fcade38610a.jpg"
import heroimage from "../assets/images/Frame 1984079597.png"
import { MoveRight } from 'lucide-react'
const Home = () => {
  return (
    <div className='flex flex-col justify-center  items-center min-h-[80vh]'>
      <article className='flex items-center bg-[#F3F3F5] py-[6px] px-[12px] gap-[8px] w-[264.25px] h-[44px] rounded-[25px] mt-5 mb-5'>
        <div className='flex'>
          <img src={person1} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] '  />
          <img src={person2} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] -ml-3' />
          <img src={person3} alt="" className='rounded-full w-[34px] h-[34px] border-[1px] -ml-3'/>
        </div>
        <p>200+ Positive Review</p>
      </article>
      <h1 className='sora text-[48px] font-[700] w-[620px] capitalize leading-[150%] text-center'><span className='text-[#1B72E8]'>Bring joy</span> to your technology experience.</h1>
      <p className='sora w-[790px] opacity-75 text-[20px] text-center mt-5 mb-5'>Take the head scratching and fist shaking out of your technology experience. With The IT, we’ve got your experience in mind first.</p>
       <button className="flex items-center btn-primary  mt-5 mb-5">
          <span>Explore Now</span><span className="bg-white rounded-full w-[26px] ml-[5px]"><MoveRight className="text-black w-[18px] m-auto" /></span>
        </button>
      <img src={heroimage} alt="" />
    </div>
  )
}

export default Home