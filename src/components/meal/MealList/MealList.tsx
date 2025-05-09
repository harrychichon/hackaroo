import { useMealContext } from '@/contexts/MealProvider';
import MealCard from '../MealCard/MealCard';
import styles from './MealList.module.scss';

type MealListProps = {
	source: 'all' | 'mine';
};

const MealList = ({ source = 'all' }: MealListProps) => {
	const { state } = useMealContext();
	const meals = source === 'mine' ? state.myMeals : state.meals;

	if (meals.length === 0) {
		return <p>Inga måltider hittades.</p>;
	}

	return (
		<section className={styles.mealList}>
			{meals.map((meal) => (
				<MealCard
					key={meal._id}
					{...meal}
				/>
			))}
		</section>
	);
};

export default MealList;
