import styles from "./solar-panel-list.module.css";
import { useGetSolarPanelQuery } from "../../services/solarPanel";
import ModuleItem from "../module-item/module-item";
import { v4 as uuidv4 } from "uuid";

const SolarPanelsList = () => {
  const { data = [], error, isLoading } = useGetSolarPanelQuery();

  const moduleList = Object.keys(data)
    .map((key) => ({
      name: key,
      id: uuidv4(),
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

  return (
    <>
      {isLoading && (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
        </div>
      )}
      <section className={styles.modules}>
        <div className={styles.card}>
          <ul>{moduleList}</ul>
        </div>
      </section>
    </>
  );
};

export default SolarPanelsList;
