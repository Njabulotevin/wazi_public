import React from 'react'

function TextField({label, className}) {
    const [isActive, setIsActive] = React.useState(false);
    const [value, setValue] = React.useState("")
    const input = React.useRef({})
  return (
    <div className="relative ">
         <span onClick={()=>{setIsActive(true);input.current.focus()}} className={`absolute text-sm pb-4 text-slate-300 ${isActive ?"text-xs text-slate-500 left-4 top-[5px]":"left-4 top-4"}`}>{label}</span>
        <input ref={input} className={`bg-transparent ${className} text-sm text-slate-300 border border-slate-200 rounded px-4 py-4`} onFocus={()=>{setIsActive(true)}} value={value} onBlur={()=>{value===""?setIsActive(false):null}} onChange={(e)=>{setValue(e.target.value)}}  type="text" />
    </div>
  )
}

export default TextField