import { About } from '@/typings';
import React from 'react'

type Props = {}

export default async function page({}: Props) {

  const addAbout = async (e:FormData) => {
    "use server";
    const title = e.get('title')?.toString();
    const description = e.get('description')?.toString();
    const fileInput = e.get('aboutImage');
    if(!title || !description || !aboutImage) return;
    let aboutImage;
    if(fileInput) {
      aboutImage = fileInput[0];
    }
    const inputModel: About= {
      title,
      description,
      aboutImage
    }
    const inputres = await fetch("localhost/adminapi/about", {
      method: 'POST',
      body: JSON.stringify(inputModel),
      headers: {
        "Content-Type": "application/json"
      }
    })
  } 
  
  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto'>
      <form className='flex flex-col space-y-5' action={addAbout}>
        <input className='p-2 rounded-sm bg-gray-500/50' name='title' type="text" placeholder='title'/>
        <input className='p-2 rounded-sm bg-gray-500/50' name='description' type="text" placeholder='about you'/>
        <input className='p-2 rounded-sm bg-gray-500/50' name='aboutImage' type="file"/>
        <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80'>Enter Value</button>
      </form>
    </div>
  )
}