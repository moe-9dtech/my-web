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
  formData.append("aboutImage", fileInput);
  const url:string = "http://172.16.150.11/my-web-api/public/api/postabout" 
    await fetch(url, {
      cache: "no-cache",
      method: 'POST',
      body: formData,
      headers: {
        Content_Type: "multipart/form-data",
      }
    })

}


export const addContactInfo = async (e:FormData) => {
  const platform = e.get('platform')?.toString();
  const link = e.get('link')?.toString();
  if(!platform || !link){
    console.error("there is a missing field");
    return;
  } 

  let formData = new FormData();
  formData.append('platform', platform);
  formData.append('link', link);
  console.log("api hit");

  const infoInput = {
    platform,
    link,
  }
  
  const url:string = "http://172.16.150.11/my-web-api/public/api/postcontact" 
  try {
    const response = await fetch(url, {
      cache: "no-cache",
      method: 'POST',
      body: formData,
      headers: {
        Content_Type: "multipart/form-data",
      }
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.code === 200) {
        console.log(responseData.json);
      } else {
        console.log("There was an error", responseData.code);
      }
      } else {
        console.log("Fetch failed");
        console.log(response.status);
      }

  } catch (e) {
    console.error(e);
  }
    

}