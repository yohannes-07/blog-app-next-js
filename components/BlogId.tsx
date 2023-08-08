'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import ImageUpload from './ImageUpload'
import Input from './input/Input'
import { toast } from 'react-hot-toast'


interface BlogProps {
    name?:string
    description?:string
    imageSrc?:any
    blogId?:string
}


interface InitalStateProps {
    name:string,
    description:string
    imageSrc:string
    
  }   
  
  
  const initialState:InitalStateProps = {
    name:'',
    description:'',
    imageSrc:''
  }
  


export default function BlogId({name,description,imageSrc,blogId}:BlogProps) {


    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const [state,setState] = useState(initialState)

    useEffect(() => {
      setState({
        name: name || '',
        imageSrc: imageSrc || '',
        description: description || ''
      })
    
      
    }, [name, imageSrc, description])
    

    function handleChange(event:ChangeEvent<HTMLInputElement> ) {
        setState({ ...state, [event.target.name]: event.target.value });
      }

    const onSubmit = (event:FormEvent) => {

      setIsLoading(true)

      event.preventDefault()
      axios.put(`/api/blogs/${blogId}`,state)
      .then(() => {
        toast.success('Updated Successfully')
          router.refresh()
          router.push('/')
      })

      .catch((err) => {
          throw new Error(err)
      })
      .finally(() => {
          setIsLoading(false)
      })
  }

    const setCustomValue = (id:any, value:any) => {
      setState((prevValues) => ({
        ...prevValues,
        [id]: value,
      }));
    };

  return (
    <div className="w-[500px] mx-auto py-16 bg-black-200 px-12 flex flex-col gap-4">  
        <form onSubmit={onSubmit}>
          <div>
            <ImageUpload value={state.imageSrc} onChange={(value) => setCustomValue('imageSrc',value)}/>
          </div>
            <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
              <Input placeholder='Name' id="name" type='text' value={state.name} name='name' onChange={handleChange}/>
              <Input placeholder='Description' id="description" type='text' value={state.description} name='description' onChange={handleChange}/>
            <div> 
            </div>
              <button type='submit' disabled={isLoading}>Submit</button>
            </div>
            
      </form>
    </div>
  )
}