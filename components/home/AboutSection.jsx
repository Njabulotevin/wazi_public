import React from 'react'
import SectionTitle from "../typography/sectionTitle";
import Typography from "../typography/typography";
import Button from "../buttons/Button"
import { stacts } from "../data/stacks";


function AboutSection() {
  return (
    <div className="flex flex-col gap-16 items-center w-full  bg-primary-dark py-16 ">
        <Typography className="text-white" variant="h3">Our Tech Stack</Typography>
        <div className="flex justify-between w-full slide-track">
          {stacts.map((icon, i) => {
            return (
              <div key={i} className="w-[200px]">
                <img src={icon.imgSrc} alt="" />
              </div>
            );
          })}
        </div>
        <div className="justify-self-start w-full p-10 lg:max-w-7xl">
          <SectionTitle className="text-white" title="Our Story" subtitle="" />
          <Typography  className="my-10 text-white">
            We are an established tech company with a mission to reinvent africa
            through the power of technology. Established by individuals who has
            worked many years as freelance developers and understand the needs
            of clients. Through technology we can build sustainable businesses
            and organisations that help to boost our nation and the continent.
          </Typography>
          <Button>Read More</Button>
        </div>
      </div>
  )
}

export default AboutSection