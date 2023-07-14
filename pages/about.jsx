import React from "react";
import SectionTitle from "./../components/typography/sectionTitle";
import Typography from "../components/typography/typography";
import { featuresList } from './../components/data/features';

function About() {
  return (
    <div className="max-w-7xl lg:mx-auto pb-[220px] pt-[100px] ">
      
      <div className="  mx-auto p-10">
        <SectionTitle className="text-white" title="Our Story" />
        <Typography className="mb-10 mt-12 text-white">
          Wazi technologies Pty (Ltd) is an established tech company founded two
          years ago after a group of freelance developers saw the need to become
          part of the vision to elevate africa.
        </Typography>
        <Typography className=" text-white">
          We are committed to bring african solutions to global problems. Our
          aims is to reinvent africa though the power of mdern technologies. The
          name Wazi is a direct translation of the word “clear” in swahili.{" "}
        </Typography>
      
        <div className="mt-12">
          <Typography className="mb-12 text-white" variant="h3">How we plan to do it?</Typography>
          <Typography className=" text-white" >
            Through the use of mdern technology, we plan to centralise the
            operation of sectors and induries by syncing the flow of data.{" "}
          </Typography>
          <Typography className="text-white font-medium mt-16" variant="h2">
            How is Wazi different?
          </Typography>
          <Typography className="text-secondary font-medium mt-6">
            African solutions for global problems.
          </Typography>
          <div className="mt-16 grid grid-cols-2 gap-6">
            {featuresList.map(({name, content}, i)=>{
              return <div key={i} className="col-span-2 lg:col-span-1">
                <Typography className="text-secondary mb-10" variantr="h3">{name}</Typography>
                <Typography className="text-white">{content}</Typography>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
