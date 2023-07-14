import React from 'react'
import Button from '../components/buttons/Button';
import TextField from '../components/textField/TextField';
import SectionTitle from '../components/typography/sectionTitle';
import Typography from '../components/typography/typography';

function Contacts() {
  return (
    <div className='pt-[220px] max-w-7xl lg:mx-auto  p-10'>
        <SectionTitle className="text-white" title="Contact Us"/>

        <div className="my-12 mt-20">
          <div className="flex gap-6 mb-10">
            <img src="/phone.png" alt="" />
            <Typography className="text-white">(+27) 64 891 7936 / (+27) 76 507 6997</Typography>
          </div>
          <div className="flex gap-6">
            <img src="/envilop.png" alt="" />
            <Typography className="text-white">info@wazitechnologies.com</Typography>
          </div>
        </div>
        <div className="my-16">
          <Typography className="text-white mb-4" variant="h2">Fill all the required fields</Typography>
          <Typography className="text-white">We&apos;ll get back to you.</Typography>

          <div className="my-10 grid grid-cols-2 gap-4 max-w-[500px]">
            <div className="col-span-2 lg:col-span-1"> <TextField label="Name" className="w-full"/></div>
             <div className="col-span-2 lg:col-span-1"><TextField label="Subject" className="w-full"/></div>
             <div className="col-span-2"> <TextField label="Email Address" className="w-full"/></div>
              <div className='col-span-2'>
                <textarea className="w-full bg-transparent border border-slate-100 rounded p-4 text-white" placeholder="Your Message" rows="10">

                </textarea>
              </div>
             <Button color="bg-secondary" className="font-medium full col-span-2 lg:col-span-1">Submit</Button>
          </div>
        </div>
    </div>
  )
}

export default Contacts