"use server";
import { About } from "@/typings";

export const addAbout = async (e:FormData) => {
const title = e.get('title')?.toString();
const description = e.get('description')?.toString();
    const fileInput = (<HTMLInputElement>document.getElementById('fileInput'));
    const formData = new  FormData();

    if(!title || !description || !fileInput) return;

    formData.append("title", title);
    formData.append("description", description);
    let aboutImage;
    if(fileInput.files) {
        formData.append("aboutImage", fileInput.files[0]);
    }
    const inputModel: About= {
      title,
      description,
      aboutImage
    }
      await fetch("http://127.0.0.1:8000/about", {
      method: 'POST',
      body: JSON.stringify(inputModel),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }