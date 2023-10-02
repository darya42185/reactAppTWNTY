import styles from "./solar-panel-list.module.css";
import { useGetSolarPanelQuery } from "../../services/solarPanel.js";
import ModuleItem from "../module-item/module-item";
import { useState } from "react";

const SolarPanelsList = () => {
  const { data = [], error, isLoading } = useGetSolarPanelQuery();
  const [isOpen, setIsOpen] = useState(false);

  const moduleList = Object.keys(data)
    .map((key) => ({
      name: key,
      id: Math.floor(Math.random() * 1000000),
      ...data[key],
    }))
    .map((item) => (
      <ModuleItem
        id={item.id}
        key={item.id}
        name={item.name}
        quantity={item.quantity}
        price={item.price}
      />
    ));
  if (isLoading) return <div>Loading</div>;
  return (
    <section className={styles.modules}>
      <div className={styles.card}>
        <ul>{moduleList}</ul>
      </div>
      <button
        onClick={() => {
          setIsOpen((value) => !value);
        }}
      >
        Togglke
      </button>
    </section>
  );
};

export default SolarPanelsList;
