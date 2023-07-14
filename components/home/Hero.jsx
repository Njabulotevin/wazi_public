import React from "react";
import Button from "../buttons/Button";
import Menu from "../menu/Menu";
import Typography from "../typography/typography";
import {useRouter} from "next/router"

function Hero({ IsMenuHidden }) {
  const Router = useRouter()

  return (
    <section className="relative w-full h-[660px] max-w-7xl   p-10  lg:mx-auto lg:h-[784px]   pt-36 lg:flex lg:flex-col  lg:pt-72">
      <div className="max-w-7xl relative z-10">
        <Typography
          variant="large"
          className="mb-4 text-center lg:text-start leading-7 font-semibold text-white"
        >
          <span className="lg:mb-4 block">
            Leverage the <span className="text-secondary">power</span>
          </span>{" "}
          of{" "}
          <span className="">
            <span className="text-secondary">latest</span> Technologies
          </span>
        </Typography>
        <Typography
          variant="h3"
          className="text-center lg:text-start text-white"
        >
          We specialise in building custom software using the hot tech stack in
          the industry.
        </Typography>

        <div className="lg:flex gap-4 mt-6">
          <Button onClick={()=>{Router.push("/contacts"); console.log("clicked..")}} className="w-full mx-auto lg:m-0 my-4 lg:max-w-[232px] font-semibold shadow-lg  shadow-yellow-400/50">
            Get Started
          </Button>
          <Button onClick={()=>{Router.push("/services"); console.log("clicked..")}}
            variant="outline"
            className="w-full mx-auto lg:m-0 my-4 lg:max-w-[232px] font-semibold "
          >
            Our Services
          </Button>
        </div>
      </div>
   
      <img
        className="absolute z-0 right-0 bottom-0 lg:right-[-17%] lg:w-[50vw] hero_vector2"
        src="/vector_home.png"
        alt=""
      />
    </section>
  );
}

export default Hero;
