"use server";
export const addAbout = async (e:FormData) => {
  const title = e.get('title')?.toString();
  const description = e.get('description')?.toString();
  const fileInput: File | null = e.get('aboutImage') as unknown as File;
  let formData = new FormData();
  if(!title || !description || !fileInput){
    console.error("there is a missing field");
    return;
  } 
  console.log("api hit");
  
  formData.append("title", title);
  formData.append("description", description);
  formData.append("aboutImage", fileInput, "aboutImage");
  // const entries = formData.entries();
  // for (const [key, value] of entries) {
  //   console.log(`${key}: ${value}`);
  // }
  const url:string = "http://172.16.150.11/my-web-api/public/api/postabout" 
    await fetch(url, {
      cache: "no-cache",
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })

}