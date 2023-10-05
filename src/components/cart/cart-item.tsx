import styles from "./cart-item.module.css";
import { CartItemProps } from "../../types/interfaces";

const CartItem: React.FC<CartItemProps> = ({
  name,
  amount,
  price,
  onRemove,
  onAdd,
}) => {
  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}$</span>
        </div>
      </div>
      <div className={styles.actions}>
        <span className={styles.amount}>{amount}</span>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
