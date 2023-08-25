"use server";
export const addAbout = async (e:FormData) => {
  const title = e.get('title')?.toString();
  const description = e.get('description')?.toString();
  const fileInput: File | null = e.get('aboutImage') as unknown as File;
  let formData = new FormData();
  console.log(`${title} ${description} ${fileInput}`)
  if(!title || !description || !fileInput){
    console.error("there is a missing field");
    return;
  } 
  formData.append("title", title);
  formData.append("description", description);
  formData.append("aboutImage", fileInput, "aboutImage");
  const entries = formData.entries();
  for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
  console.log(formData);
  const url:string = "http://172.16.150.11/my-web-api/public/api/postabout" 
  try {
    await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
  } catch (e) {
    console.error(e);

  }

}