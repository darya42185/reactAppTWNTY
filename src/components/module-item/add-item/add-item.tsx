import React, { useState } from "react";
import styles from "./add-item.module.css";

interface AddItemProps {
  maxItem: number;
  onAddToCart: (value: number) => void;
  id: string;
}

const AddItem: React.FC<AddItemProps> = ({ maxItem, onAddToCart }) => {
  const [value, setValue] = useState(1);
  const addItem = () => onAddToCart(+value);

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <label>Amount</label>
        <input
          value={value}
          type="number"
          min="1"
          max={maxItem.toString()}
          step="1"
          // onChange={(e) => {
          //   if (e.target.value >= maxItem) setValue(maxItem);
          //   else setValue(e.target.value);
          // }}
          onChange={(e) => {
            const inputValue = parseInt(e.target.value, 10); // Parse to integer
            if (
              !isNaN(inputValue) &&
              inputValue >= 1 &&
              inputValue <= maxItem
            ) {
              setValue(inputValue);
            }
          }}
        />
      </div>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  );
};

export default AddItem;
