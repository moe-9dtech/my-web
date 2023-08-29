"use client";
import React, { useState } from 'react'

type Props = {}

export default function Page({}: Props) {
  const [title, setTitel] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const formData = new FormData();
  
  async function hitApi (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault()
    formData.append('title', title);
    formData.append('description', message);
    if (file) {
      formData.append('aboutImage', file);
    }
    
      try {
        const response = await fetch("http://localhost/my-web-api/public/api/postabout", {
        method: "POST",
        body: formData,
        headers: {
        Content_type: "multipart/form-data",
        },
      });

      if (response.ok) {
      const responseData = await response.json();
      if (responseData.code === 200) {
        console.log(responseData.json);
      } else {
        console.log("There was an error");
      }
      } else {
        console.log("Fetch failed");
      }
      } catch (err: any) {
        console.log(`Error: ${err}`);
      }
  }

  async function getApi () {
    const url = "http://localhost/my-web-api/public/api/getabout"
    // const url = "http://172.16.150.109//cPanel-API-Simple-PHP/getallemail.php"
    try {
        await fetch(url, {
        method: "GET",
        headers: {
        Content_type: "application/json",
        },
      }).then((data) => {
        data.json().then((response) => {
          if (response.code === 200) {
            console.log(response.json);
          } else {
            console.log("there was an error");
          }
        });
      });
    } catch (err: any) {
      console.log(`error is ${err}`);
    }
  }
  
  return (
    <div className='flex flex-col max-w-7xl justify-center items-center mx-auto'>
      <form className='flex flex-col space-y-5'>
        <input onChange={(e) => setTitel(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='title' type="text" placeholder='title' required/>
        <input onChange={(e) => setMessage(e.target.value)} className='p-2 rounded-sm bg-gray-500/50 outline-none' name='description' type="text" placeholder='about you' required/>
        <input onChange={(e) =>{
            const selectedFile = (e.target.files as FileList)[0];
            setFile(selectedFile);

        }} id='aboutImageInput' className='p-2 rounded-sm bg-gray-500/50' name='aboutImage' type="file" required/>
        <button className='bg-blue-500 rounded-md p-2 font-semibold text-white/80' onClick={hitApi}>Enter Value</button>
        <button className='bg-blue-500 rounded-md p-2 mt-5 font-semibold text-white/80' onClick={getApi}>get data</button>
      </form>
    </div>
  )
}