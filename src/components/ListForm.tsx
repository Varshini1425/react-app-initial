import { useState } from "react";

interface Props {
  items: { id: number; country: string; code: string }[];
  heading: string;
  onSelectedItem: (item: { id: number; country: string; code: string }) => void;
}

const ListForm = ({ items, heading, onSelectedItem }: Props) => {
  // countries = [];

  // event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  /* HOOKS */

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    onSelectedItem(items[index]);
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
