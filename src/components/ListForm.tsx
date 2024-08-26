import { useState } from "react";

interface Props {
  items: { id: number; country: string; code: string }[];
  heading: string;
}

const ListForm = ({ items, heading }: Props) => {
  // countries = [];

  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  /* HOOKS */

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    console.log(`Clicked: ${items[index].country} (Index ${index})`);
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.id}
            onClick={() => handleClick(index)}
          >
            CountryID: {item.id}, CountryName: {item.country}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListForm;
