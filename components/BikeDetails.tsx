import React from "react";
type BikeDetailsProps = {
  name: string;
  description: string;
  image: string;
  manufacturer: string;
  colors: string[];
  frameSize: string;
};
export const BikeDetails = ({
  name,
  description,
  image,
  manufacturer,
  colors,
  frameSize,
}: BikeDetailsProps) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt={name}
          className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          src={image}
          title={name}
        />
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">
            {manufacturer}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {name}
          </h1>
          <p className="leading-relaxed">{description}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              {colors.map((color: string, id: number) => (
                <div
                  key={id}
                  style={{ backgroundColor: color }}
                  className={`border-2 border-gray-300 ml-1  rounded-full w-6 h-6 focus:outline-none bg-${color.toLowerCase()}-700`}
                />
              ))}
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Frame Size</span>
              <div className="relative rounded border appearance-none capitalize border-gray-400 py-1 focus:outline-none text-base  p-1">
                {frameSize}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
