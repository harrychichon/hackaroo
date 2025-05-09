'use client';

import Tag from '@/components/ui/Tag/Tag';
import { Ingredient } from '@/constants/ingredientCategories';
import { getMatchingTags } from '@/utils/getMatchingTags';
import Image from 'next/image';
import styles from './MealCard.module.scss';

type MealCardProps = {
	ingredients: Ingredient[];
};

const MealCard = ({ ingredients }: MealCardProps) => {
	const tags = getMatchingTags(ingredients);

	return (
		<article className={styles.mealCard}>
			<header className={styles.header}>
				<h2>Meal Name</h2>
				<p>Meal Description</p>
			</header>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src='/testImages/pexels-photo-1860208-3096156442.jpeg'
					alt='Meal'
					fill
				/>
			</div>
			<div className={styles.tags}>
				{tags.map((tag) => (
					<Tag
						key={tag}
						text={tag} // Now supports both string and number
					/>
				))}
			</div>
		</article>
	);
};

export default MealCard;
