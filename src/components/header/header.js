import Cart from "../cart/cart";
import styles from "./header.module.css";
import solarModule from "./images/solarModule2.jpg";
const Header = () => {
  return (
    <nav>
      <header className={styles.header}>
        <h1>Solar Modules</h1>
        <Cart />
      </header>
      <div className={styles.mainImage}>
        <img src={solarModule} alt="Solar module" />
      </div>
    </nav>
  );
};
export default Header;
