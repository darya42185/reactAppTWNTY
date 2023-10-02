import cartIcon from "./images/cart-icon.svg";
import styles from "./cart.module.css";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const Cart = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className={styles.button} onClick={handleOpen}>
        <img src={cartIcon} alt="icon" />

        <span>Your Cart</span>
        <span className={styles.badge}>{0}</span>
      </button>

      <Modal open={open} onClose={handleClose}>
        <div className="modal-container">
          {/*  {cartItems} */}

          <div className={styles.total}>
            <span>Total Amount</span>
            {/*  <span>{totalAmount}</span> */}
          </div>
          <div className={styles.actions}>
            <button className={styles["button--alt"]} onClick={handleClose}>
              Close
            </button>
            {/* {hasItems && <button className={styles.button}>Order</button>} */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Cart;
