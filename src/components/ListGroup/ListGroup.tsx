import { useState } from "react";
import styles from "./ListGroup.module.css";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook, lets us tap into built in React features
  // State hooks tell React this component has data or state that changes over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 5 && <p>No items found</p>}
      <ul className={styles["list-group"]}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}{" "}
      </ul>
    </>
  );
}

export default ListGroup;
