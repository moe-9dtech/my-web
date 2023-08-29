"use server";
import { addAbout, addContactInfo } from '@/actions/aboutSectionActions';
import React from 'react'

type Props = {}

export default async function Page({}: Props) {
  
  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto'>
      <form className='flex flex-col space-y-5' action={addContactInfo}>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='platform' type="text" placeholder='title' required/>
        <input className='p-2 rounded-sm bg-gray-500/50 outline-none' name='link' type="text" placeholder='about you' required/>
        <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80'>Enter Value</button>
      </form>
    </div>
  )
}