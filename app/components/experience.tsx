import React from 'react'
import ExpCard from '@/user-components/expCard';
type Props = {}

export default function Experience({}: Props) {
  return (
    <div className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-18 justify-evenly mx-auto items-center'>
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#00C6CF]/80">
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
        <ExpCard/>
      </div>
    </div>
  )
}