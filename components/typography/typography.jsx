import React from 'react'

function Typography({variant, className, title, children}) {

    const sizes = {
        12: "text-[12px]",
        14: "text-[14px]",
        18: "text-[18px]",
        20: "text-[20px]",
        24: "text-[24px]",
        30: "text-[30px]",
        36: "text-[36px]",
        48: "text-[48px]",
        60: "text-[60px]",
        72: "text-[72px]"
    }



switch(variant){
    case "h1":
        return <h1 className={`${className}  ${sizes[36]} lg:${sizes[72]} `}>{title || children}</h1>
    case "h2":
        return <h2 className={`${className}  ${sizes[24]}  lg:${sizes[36]} `}>{title || children}</h2>
    case "h3":
        return <h3 className={`${className}  ${sizes[18]}  lg:${sizes[24]} `}>{title || children}</h3>
        case "h4":
            return <h4 className={`${className}  ${sizes[14]}  lg:${sizes[18]} `}>{title || children}</h4>
    case "small":
            return <h3 className={`${className}  text-[10px] lg:${sizes[12]} `}>{title || children}</h3>
    case "large":
            return <h1 className={`${className}  text-3xl lg:text-6xl `}>{title || children}</h1>
    default:
        return <p className={`${className}  text-[12px] lg:text-[14px]  ${className&&className.includes("font")?"":"font-thin"}`}>{title || children}</p>
}
}

export default Typography