import React from 'react'

export default function Input({
    name,
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
    className
    
  })  {
  return (
    <div className="flex-col mb10 ">
<label className="mb10">{label}</label>
    <div className="flex-row">
    {type=="textarea"? 
         <textarea placeholder={placeholder} className={className} />:
    <input type= {type} className={className} placeholder={placeholder} />
    }
    </div>
    </div>
  )
}
