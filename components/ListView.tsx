import React from "react";
import { ListItem } from "./ListItem";

type ListViewProps = {
  items: [];
};

export const ListView = ({ items }: ListViewProps) => {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {items.map(
        ({ id, title, thumb, manufacturer_name: manufacturerName }: any) => {
          return (
            <ListItem
              key={id}
              id={id}
              title={title}
              manufacturerName={manufacturerName}
              image={thumb}
            />
          );
        }
      )}
    </ul>
  );
};

export default ListView;
