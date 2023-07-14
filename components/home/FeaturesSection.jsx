import React from "react";
import Typography from "../typography/typography";
import { featuresList } from "../data/features";

function FeaturesSection() {
  const [isActiveFeature, setIsActiveFeature] = React.useState({
    name: "Product Orientated",
  });
  return (
    <div className=" bg-white   ">
      <div className="max-w-7xl lg:mx-auto flex flex-col px-10 justify-center items-center gap-24 py-20">
        <div className="flex flex-col gap-2 justify-center ">
          {/* <Typography
            variant="h3"
            className="text-primary-basic font-medium text-center"
          >
            Our Model
          </Typography> */}
          <Typography
            variant="h1"
            className="text-primary-basic font-semibold text-center"
          >
            Why you should choose working with Us?
          </Typography>
          {/* <Typography
            className="text-primary-basic font-semibold text-center"
            variant="h2"
          >
            How is Wazi different?
          </Typography> */}
          {/* <Typography className="text-primary-dark font-semibold text-center">
            African solutions for global problems.
          </Typography> */}
        </div>
        <div className="flex gap-6 my-12">
          {
            <div className="hidden lg:block">
              <img
                src={
                  featuresList.find(
                    (item) => item.name === isActiveFeature.name
                  ).imgSrc
                }
              />
            </div>
          }
          <ul className="flex flex-col gap-12  justify-center">
            {featuresList.map(({ content, name, imgSrc }, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setIsActiveFeature({ name: name });
                  }}
                  className={`text-primary-basic flex gap-6 relative ${
                    isActiveFeature.name === name ? "" : ""
                  } ${
                    isActiveFeature.name === name
                      ? ""
                      : "hover:text-primary-dark"
                  } cursor-pointer lg:w-[800px]`}
                >
                  <div className="flex gap-6">
                    <div
                      className={`w-[4px]  ${
                        isActiveFeature.name === name
                          ? "bg-primary-dark w-[6px]"
                          : "bg-slate-200"
                      }`}
                    ></div>
                    <div>
                      <Typography variant="h3" className=" font-medium  mb-4">
                        {name}
                      </Typography>
                      {isActiveFeature.name === name && (
                        <>
                          <Typography className=" font-medium  ">
                            {content}
                          </Typography>{" "}
                          <div className="hidden lg:flex">
                            <img className="block lg:hidden" src={imgSrc} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
