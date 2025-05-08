import FoodForm from "@/components/food/FoodForm/FoodForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <FoodForm />
    </div>
  );
}
