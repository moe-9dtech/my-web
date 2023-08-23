import { addAbout } from '@/actions/aboutSectionActions';
import React from 'react'

type Props = {}

export default async function page({}: Props) {
  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto'>
      <form className='flex flex-col space-y-5' action={addAbout}>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='title' type="text" placeholder='title'/>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='description' type="text" placeholder='about you'/>
        <input id='fileInput' className='p-2 rounded-sm bg-gray-500/50' name='aboutImage' type="file"/>
        <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80'>Enter Value</button>
      </form>
    </div>
  )
}