'use client'

interface InputProps {
    type:any,
    value:any,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    textarea?:boolean
    id:string
    placeholder?:string
    big?:boolean
}


const Input = ({type,value,onChange,name,textarea,id,placeholder,big}:InputProps) => {
    return (
        <input id={id} placeholder={placeholder} type={type} value={value} onChange={onChange} name={name} style={{borderColor:'grey'}} className={`w-full p-4 pt-6 font-normal  border-black transition text-black ${textarea ? 'w-700px h-500px' : 'w-full'} ${big ? 'w-[400px] pb-[6rem]': ''}`}/>
      )
}

export default Input