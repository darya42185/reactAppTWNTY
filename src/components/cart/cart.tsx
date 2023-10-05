import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "./cart.module.css";
import Modal from "@mui/material/Modal";
import CartItem from "./cart-item";
import { updateCartItems } from "../../features/cart";
import Order from "../order/order";
import { CartItemProps, RootState } from "../../types/interfaces";

const Cart = () => {
  const [open, setOpen] = useState(false);
  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenOrder = () => setIsOpenOrder(true);
  const handleCloseOrder = () => setIsOpenOrder(false);
  const items = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const numberOfCartItems = items.reduce(
    (curNum: number, item: CartItemProps) => {
      return curNum + +item.amount;
    },
    0
  );

  const totalAmount = items.reduce((acc: number, curr: CartItemProps) => {
    return acc + curr.price * curr.amount;
  }, 0);

  const cartItemRemoveHandler = (element: CartItemProps) => {
    if (element.amount <= 1) {
      const filteredArray = items.filter(
        (item: CartItemProps) => item.id !== element.id
      );
      dispatch(updateCartItems(filteredArray));
    } else {
      const result = { ...element, amount: element.amount - 1 };
      const editArray = items.map((items: CartItemProps) => {
        if (element.id === items.id) return result;
        else return items;
      });
      dispatch(updateCartItems(editArray));
    }
  };

  const cartItemAddHandler = (item: CartItemProps) => {
    if (item.amount >= item.quantity) return;
    const result = { ...item, amount: item.amount + 1 };
    const editArray = items.map((items: CartItemProps) => {
      if (item.id === items.id) return result;
      else return items;
    });
    dispatch(updateCartItems(editArray));
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item: CartItemProps) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          quantity={item.quantity}
          price={item.price}
          onRemove={() => cartItemRemoveHandler(item)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <button className={styles.button} onClick={handleOpen}>
        <span>Your Cart</span>
        <span className={styles.badge}>{+numberOfCartItems}</span>
      </button>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          {cartItems}
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}$</span>
          </div>
          <div className={styles.actions}>
            <button className={styles["button--alt"]} onClick={handleClose}>
              Close
            </button>
            {items.length > 0 && (
              <button
                onClick={() => {
                  handleOpenOrder();
                  handleClose();
                }}
                className={styles.button}
              >
                Order
              </button>
            )}
          </div>
        </div>
      </Modal>
      <Modal open={isOpenOrder} onClose={handleCloseOrder}>
        <div className="modal-container">
          <Order closeOrder={handleCloseOrder} openCart={handleOpen} />
        </div>
      </Modal>
    </>
  );
};

export default Cart;
