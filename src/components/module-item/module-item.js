import { useDispatch, useSelector } from "react-redux";
/* import ModuleItemForm from "./ModuleItemForm"; */
import styles from "./module-item.module.css";
import { updateCartItems } from "../../features/cart";
import AddItem from "./add-item/add-item";

const ModuleItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);

  const addToCartHandler = (amount) => {
    const newItem = {
      id: id,
      name: name,
      amount: amount,
      price: price,
    };
    if (items.some((el) => el.id === id)) {
      const result = items.map((el) => {
        if (el.id === id) return { ...el, amount: el.amount + +amount };
        else return el;
      });
      dispatch(updateCartItems(result));
    } else dispatch(updateCartItems([...items, newItem]));
  };

  return (
    <li className={styles.module}>
      <div>
        <h3>{name}</h3>
        <div className={styles.price}>{price}$</div>
        <div className={styles.quantity}>Available quantity: {quantity}</div>
      </div>
      <div>
        <AddItem id={id} onAddToCart={addToCartHandler} maxItem={quantity} />
      </div>
    </li>
  );
};

export default ModuleItem;
