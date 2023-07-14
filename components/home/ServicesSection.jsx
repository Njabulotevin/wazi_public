import React from "react";
import SectionTitle from "../typography/sectionTitle";
import { services } from "../data/services";
import Typography from "../typography/typography";
import Button from "./../buttons/Button";

function ServicesSection() {
  const [hover, setHover] = React.useState({});
  const [onReadMode, setIsOnReadMode] = React.useState(false);
  return (
    <div
      className={`p-10 py-36  lg:mx-auto max-w-7xl ${
        onReadMode ? "max-w-7xl" : ""
      }`}
    >
      {/* <div className=" mb-[123px]"> <SectionTitle className=" text-white  mt-[60px]" title="Our Services" subtitle="What we offer?"/></div> */}

      <div className="flex flex-col lg:flex-row flex-wrap justify-between gap-14">
        <div className="">
          <Typography
            variant="h3"
            className="text-secondary max-w-[500px] mb-4 font-medium"
          >
            What we do?
          </Typography>
          <Typography
            variant="h1"
            className="text-white max-w-[500px] mb-10 font-semibold"
          >
            We can help you build what seems impossible
          </Typography>

          <Typography className="max-w-[500px] text-slate-400 mb-10">
            Any size business may have a custom built software to bring any
            business or technology solution. In our changing world it is
            important to recognise the need of technology as part of our lives,
            thus we here to help with transitioning of any business solution
            into a more advanced technological business solution. We can also
            help move your current systems into a cloud application that uses
            more advanced technologies.
          </Typography>

          <Button className="font-medium">Explore</Button>
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          {services.map((item, i) => {
            return (
              <div
                key={i}
                className="w-full lg:w-[250px]  h-[250px] bg-primary-dark rounded shadow p-6 col-span-2 lg:col-span-1"
              >
                <div className="bg-secondary w-14 h-14 flex justify-center items-center rounded mb-10 p-2">
                  <img src={item.icon} className="w-[70%]" />
                </div>
                <Typography variant="h3" className="text-white mb-3">
                  {item.name}
                </Typography>
                <Typography className="text-slate-400">
                  {item.content}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      {/* {!onReadMode&&<div className="flex flex-wrap gap-6 justify-center">
    {
      services.map(({icon, name, content, color},i)=>{
        return <div key={i} onMouseEnter={()=>{setHover({name: name})}} onMouseLeave={()=>{setHover({})}} className={`${color} shadow-lg text-primary-basic transform hover:scale-105 ease-in-out duration-100 cursor-pointer w-[292px] h-[368px] p-12 rounded-[9px] flex flex-col gap-10 justify-end`}>
         {hover.name !== name && <div className=""><img src={icon} alt="" /></div>}
          <div className=""><Typography className="font-semibold" variant="h3">{name}</Typography></div>
          <div className="text-primary-basic">
            <Typography className="font-medium" textColor="text-primary-basic">{content}</Typography>
          </div>
          {hover.name === name && <Button color={color === "bg-secondary"?"bg-white text-priamry-dark":"bg-secondary "}  onClick={()=>{setIsOnReadMode({icon:icon, name:name, content:content, color:color})}} className="shadow-lg font-medium">Read More</Button>}
        </div>
      })
    }
   
   </div>}

   {onReadMode && <div  className={`${onReadMode.color} shadow-lg text-primary-basic transform hover:scale-105 ease-in-out duration-100 cursor-pointer w-full h-[368px] p-12 rounded-[9px] flex flex-col gap-10 justify-end`}>
        
          <div className=""><Typography className="font-semibold" variant="h3">{onReadMode.name}</Typography></div>
          <div className="text-primary-basic">
            <Typography className="font-medium" textColor="text-primary-basic">{onReadMode.content}</Typography>
          </div>
          <Button color={onReadMode.color === "bg-secondary"?"bg-white text-priamry-dark":"bg-secondary "}  onClick={()=>{setIsOnReadMode(false)}} className="shadow-lg font-medium">Close</Button>
        </div>} */}
    </div>
  );
}

export default ServicesSection;
