import React from "react";
import { heroMenu } from "./../data/menu";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Typography from "../typography/typography";
import { BsJustifyRight, BsXLg } from "react-icons/bs";
import { useRouter } from "next/router";

function Layout({ children, IsMenuHidden }) {
  const [isMenuOn, setIsMenuOn] = React.useState(false);
  const Router = useRouter();
  
  return (
    <div className="relative w-full ">
      <div className="lg:max-w-7xl lg:mx-auto">
        {" "}
        {!IsMenuHidden && (
          <div className="absolute ease-in-out duration-300  lg:px-32 flex  justify-between bg-primary-basic ease-in-out duration-100 text-white w-full p-10 top-0 right-0 z-40 ">
            {isMenuOn && (
              <div className="flex flex-col left-0 lg:hidden absolute w-full z-50 top-10 bg-primary-dark shadow p-12 justify-center items-center">
                <button className="mb-10 text-right  w-full flex justify-end"
                  onClick={() => {
                    setIsMenuOn(false);
                  }}
                >
                 <BsXLg className="text-right w-[20px] h-[20px] "/>
                </button>
                <Menu gap="gap-[18px]" options={heroMenu} variant="column" onClick={()=>{setIsMenuOn(false)}} className="items-center justify-center"/>
              </div>
            )}
            <div className="w-[52px] h-[32px]" onClick={()=>{Router.push("/")}}>
              <img src="/logo.png" alt="logo" />
            </div>
            <div className="hidden lg:flex">
              <Menu options={heroMenu} />
            </div>
            <button
              onClick={() => {
                setIsMenuOn(true);
              }}
              className="w-[28px] h-[28px] flex lg:hidden items-center"
            >
              <BsJustifyRight className="w-full h-full" />
            </button>
          </div>
        )}
        {/* display on scroll */}
        {IsMenuHidden && (
          <div className="fixed lg:px-32 ease-in-out duration-300  shadow-lg ease-in-out duration-100 flex  justify-between  bg-primary-dark text-white w-full p-10 top-0  right-0 z-40 ">
            <div className="w-[52px] h-[32px]" onClick={()=>{Router.push("/")}}>
              <img src="/logo.png" alt="logo" />
            </div>
            {isMenuOn && (
              <div className="flex flex-col left-0 lg:hidden absolute w-full z-50 top-10 bg-primary-dark shadow p-12 justify-center items-center">
                <button
                  onClick={() => {
                    setIsMenuOn(false);
                  }}
                   className="mb-10 text-right  w-full flex justify-end"
                >
                  <BsXLg className="text-right w-[20px] h-[20px]  "/>
                </button>
                <Menu gap="gap-[18px]" onClick={()=>{setIsMenuOn(false)}} options={heroMenu} variant="column" className="items-center justify-center"/>
              </div>
            )}
            <div className="hidden lg:flex">
              <Menu options={heroMenu} />
            </div>
            <button
              onClick={() => {
                setIsMenuOn(true);
              }}
              className="w-[28px] h-[28px] flex lg:hidden items-center"
            >
              <BsJustifyRight className="w-full h-full" />
            </button>
          </div>
        )}
      </div>
      {children}

      <Footer />
    </div>
  );
}

export default Layout;
