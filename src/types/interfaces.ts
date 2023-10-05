export interface CartItemProps {
  id: string;
  name: string;
  amount: number;
  price: number;
  quantity: number;
  onRemove: () => void;
  onAdd: () => void;
}

export type CartState = {
  cartItems: CartItemProps[];
};

export type RootState = {
  cart: CartState;
};

export interface OrderProps {
  closeOrder: () => void;
  openCart: () => void;
}
