import React from "react";

type ListItemProps = {
  id: string;
  title: string;
  image: string;
  manufacturerName: string;
};

export const ListItem = ({
  id,
  title,
  image,
  manufacturerName,
}: ListItemProps) => {
  return (
    <li className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700">
            <a href={`/bike/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{manufacturerName}</p>
        </div>
      </div>
    </li>
  );
};
