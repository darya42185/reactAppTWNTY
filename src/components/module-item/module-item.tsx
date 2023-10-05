import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./module-item.module.css";
import { updateCartItems } from "../../features/cart";
import AddItem from "./add-item/add-item";
import { RootState } from "../../types/interfaces";

interface ModuleItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
  quantity: number;
}

const ModuleItem: React.FC<ModuleItemProps> = ({
  id,
  name,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const items: CartItem[] = useSelector(
    (state: RootState) => state.cart.cartItems
  );

  const addToCartHandler = (amount: number) => {
    const newItem = {
      id,
      name,
      amount,
      price,
      quantity,
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
