import React from "react";
import Head from "next/head";
import AboutSection from "../components/home/AboutSection";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import FeaturesSection from "../components/home/FeaturesSection"
import { clients } from "../components/data/clients";
import TextField from "../components/textField/TextField";
import Typography from "../components/typography/typography"
import Button from "../components/buttons/Button";

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>home</title>
        <meta name="description" content="Wazi technologies pty ltd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <div className="bg-white flex gap-32 justify-center p-10 items-center">
        {clients.map((client, i) => {
          return <div key={i}><img src={client.img} /></div>
        })}
      </div>
      <div className="pt-[112px] pb-[106px] p-10 flex flex-col lg:flex-row w-full justify-stretch lg:justify-between lg:max-w-7xl lg:mx-auto">
        <div className="w-full mb-6 lg:mb-0">
          <Typography className="text-white mb-4 text-center lg:text-start" variant="h2">Get In Touch</Typography>
          <Typography className="text-white text-center lg:text-start">Contact us for more information.</Typography>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 w-full "> <div className="mb-6 lg:mb-0"><TextField className="w-full lg:w-[425px] mb-2" label="Email Address" /> 
        <Typography className="text-white" >Leave your email & We&apos;ll get back to you.</Typography>
         </div> 
        <Button className="font-medium">Submit</Button></div>
      </div>



    </div>
  );
}
