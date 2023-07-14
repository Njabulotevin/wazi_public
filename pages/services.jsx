import React from 'react'
import SectionTitle from '../components/typography/sectionTitle'
import Typography from '../components/typography/typography';
import { services } from './../components/data/services';

function Services() {
  return (
    <div className=' py-[190px] bg-white p-10 '>
      <div className="max-w-7xl mx-auto ">
        <SectionTitle className="text-primary-basic" title="Our Services" subtitle="What we do?"/>


        <div className="grid grid-cols-2 gap-12 mt-16 ">
          {services.map(({content, name, icon, fullContent},i)=>{
            return <div key={i} className="bg-white rounded-lg drop-shadow  p-10 col-span-2 lg:col-span-1">
              <div className="flex gap-6">
                <div className="p-4  flex justify-center items-center bg-secondary rounded"><img className='w-6 h-6' src={icon}/> </div>
                <Typography variant="h3" className="font-medium">{name}</Typography>
                
                </div>
                <Typography variant="h4" className="mt-4 font-semibold">{content}</Typography>
                {fullContent.map((content, i)=>{
                  return <Typography key={i} className="mt-4">{content}</Typography>
                })}
            </div>
          })}
        </div>
      </div>


      

    </div>
  )
}

export default Services