import Link from 'next/link'
import React from 'react'
import Typography from '../typography/typography'

function Menu({options, variant, onClick, gap}) {
  return (
    <ul className={`${variant&&variant==="column"?"flex flex-col justify-center": "flex items-center "} ${gap?gap:"gap-[12px]"} `}>
        {options.map(({link, title}, i)=>{
            return <Link  key={i} href={link} ><li onClick={onClick} className="cursor-pointer min-w-[130px]"><Typography className={`font-semibold hover:text-secondary ${variant==="column"?"text-center":""}`}>{title}</Typography></li></Link>
        })}
    </ul>
  )
}


// function NavLink(){
//     return
// }





export default Menu



