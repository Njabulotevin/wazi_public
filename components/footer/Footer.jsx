import React from 'react'
import Typography from './../typography/typography';

function Footer() {
  return (
   
    <div className="border-t border-slate-100 py-10 max-w-7xl lg:mx-auto flex lg:flex-row gap-6 flex-col-reverse justify-between p-10">
    <Typography className="text-white text-center lg:text-start">2022 wazi technologies. All rights reserved</Typography>
    <div className="flex justify-between gap-12">
      <Typography className="text-white">Terms of use</Typography>
      <Typography className="text-white">Privacy policy</Typography>
    </div>

  </div>
  )
}

export default Footer