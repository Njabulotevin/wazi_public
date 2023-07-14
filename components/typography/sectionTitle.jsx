import React from 'react'
import Typography from './typography'

function SectionTitle({title, subtitle, className}) {
  return (
    <div className={`border-l-2 border-secondary pl-6 ${className}`}>
        <Typography className=" mb-2" variant="h1">{title}</Typography>
        <Typography className="" variant="h3">{subtitle}</Typography>
    </div>
  )
}

export default SectionTitle