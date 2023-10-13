"use client"
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddTopic(){

    const router = useRouter();
    const [userInfo, setUserInfo] = useState({})

     const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .post('api/post' , userInfo )
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setUserInfo({});
          router.push('/');
          // alert("Added your content")
        })
     }

     const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setUserInfo((prevState) => ({...prevState, [name]: value}))
     }

  return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input name= "title" value= {userInfo.title || ""} 
      type="text" placeholder="Topic Title" 
      onChange={handleChange}className="border 
      border-slate-500 px-8 py-2"/>

      <input type="text" name='content' value={userInfo.content || ""}
      placeholder="Content"  onChange={handleChange} className="border 
      border-slate-500 px-8 py-2"/>

      <button type= "submit" className="bg-green-600 font-bold text-white py-3 
      px-3 w-fit"
      >Submit </button>

  </form>
}