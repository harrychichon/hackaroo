'use client';

import { useMealContext } from '@/contexts/MealProvider';
import MealCard from '../MealCard/MealCard';
import styles from './MealList.module.scss';

const MealList = () => {
	const { state } = useMealContext();

	if (state.meals.length === 0) {
		return <p className={styles.empty}>No meals added yet.</p>;
	}

	return (
		<section className={styles.mealList}>
			{state.meals.map((meal, index) => (
				<MealCard
					key={index}
					{...meal}
				/>
			))}
		</section>
	);
};

export default MealList;
