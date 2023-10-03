import styles from "./cart-item.module.css";

const CartItem = ({ name, amount, price, onRemove, onAdd }) => {
  console.log("amount", amount);
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
