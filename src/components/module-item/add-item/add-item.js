import { useState } from "react";
import styles from "./add-item.module.css";

/* import styles from "./ModuleItemForm.module.css"; */

const AddItem = ({ maxItem, onAddToCart, id }) => {
  const [value, setValue] = useState(1);
  const addItem = () => onAddToCart(value);

  return (
    <div className={styles.form}>
      <div className={styles.input}>
        <label>Amount</label>
        <input
          value={value}
          type="number"
          min="1"
          max={maxItem}
          step="1"
          onChange={(e) => {
            if (e.target.value >= maxItem) setValue(maxItem);
            else setValue(e.target.value);
          }}
        />
      </div>
      <button onClick={addItem}>Add to Cart</button>
    </div>
  );
};

export default AddItem;
