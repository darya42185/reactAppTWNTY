import { useState } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateCartItems } from "../../features/cart";
import styles from "./order.module.css";
import { RootState, OrderProps } from "../../types/interfaces";

const Order: React.FC<OrderProps> = ({ closeOrder, openCart }) => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState(false);

  const emailValidation: RegisterOptions = {
    required: "Email is required",
    maxLength: {
      value: 80,
      message: "Email is too long",
    },
    minLength: {
      value: 5,
      message: "Email is too short",
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Invalid email format",
    },
  };

  const items = useSelector((state: RootState) => state.cart.cartItems);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const totalAmount = items.reduce((acc, curr) => {
    return acc + curr.price * curr.amount;
  }, 0);
  const onSubmit = () => {
    setIsSuccess(true);
    setTimeout(() => {
      closeOrder();
      dispatch(updateCartItems([]));
    }, 2000);
  };

  return (
    <div>
      <p
        className={styles.back}
        onClick={() => {
          closeOrder();
          openCart();
        }}
      >
        Back
      </p>
      <h1>Your order</h1>
      {items.map((item) => {
        return (
          <div key={item.id} className={styles.cartItem}>
            <h2>
              {item.name} x {item.amount}
            </h2>
          </div>
        );
      })}
      <h2>Total Price: {totalAmount}</h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 25,
          width: "60%",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={styles.input}
          type="text"
          placeholder="First name"
          {...register("first_name", {
            required: true,
            maxLength: 80,
            minLength: 5,
          })}
        />
        {errors?.first_name && (
          <p className={styles.warning}>Please specify your First Name</p>
        )}
        <input
          className={styles.input}
          type="text"
          placeholder="Last name"
          {...register("last_name", {
            required: true,
            maxLength: 80,
            minLength: 5,
          })}
        />
        {errors?.last_name && (
          <p className={styles.warning}>Please specify your Last Name</p>
        )}
        <input
          className={styles.input}
          type="text"
          placeholder="email"
          {...register("email", emailValidation)}
        />
        {errors?.email && (
          <p className={styles.warning}>Please specify your Email</p>
        )}
        <input
          className={styles.input}
          type="text"
          placeholder="Mobile Phone"
          {...register("mobile", {
            required: true,
            maxLength: 80,
            minLength: 5,
          })}
        />
        {errors?.mobile && (
          <p className={styles.warning}>Please specify your Mobile</p>
        )}
        <input
          className={styles.input}
          type="text"
          placeholder="Address"
          {...register("address", {
            required: true,
            maxLength: 80,
            minLength: 5,
          })}
        />
        {errors?.address && (
          <p className={styles.warning}>Please specify your Address</p>
        )}
        <button className={styles.submit} type="submit" disabled={isSuccess}>
          Send
        </button>
      </form>
      {isSuccess && (
        <h1 className={styles.successOrder}>The order is successful!</h1>
      )}
    </div>
  );
};
export default Order;
