import CardFront from "@/components/ui/CardFront/CardFront";
import { Food } from "@/types/Food";
import styles from "./FoodCard.module.scss";

type FoodCardProps = {
  food: Food;
};

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <>
      <CardFront
        header={<h2 className={styles.place}>{food.place}</h2>}
        image={food.image}
        children={
          <>
            <p className={styles.description}>{food.description}</p>{" "}
            <p className={styles.diet}>
              <strong>Kost:</strong> {food.diet}
            </p>{" "}
            <p className={styles.sustainability}>
              <strong>Hållbarhet:</strong> {food.sustainability}/10
            </p>
          </>
        }
      ></CardFront>
    </>
  );
};

export default FoodCard;
