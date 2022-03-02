import React from 'react'

export default function Select({ name, value,className, label, onChange, children }) {
  return (
    <>
    <div className="flex-col mb10">
    <label className="mb10">{label}</label>
    <div className="selectContainer">
    <select value ={value} className={className} onChange={onChange}>
        {children}
    </select>
    <span class="rowselect"></span>
    </div>
    
</div>
    
    
    </>
  )
}
