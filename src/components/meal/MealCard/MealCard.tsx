'use client';

import Tag from '@/components/ui/Tag/Tag';
import { useMealContext } from '@/contexts/MealProvider';
import { Meal } from '@/types/Meal';
import { getMatchingTagIndexes } from '@/utils/getMatchingTagIndexes';
import Image from 'next/image';
import styles from './MealCard.module.scss';

type MealCardProps = Meal;

const MealCard = ({
	name,
	description,
	image,
	ingredients,
	location,
	expirationDate,
	_id,
}: MealCardProps) => {
	const { dispatch } = useMealContext();

	const tags = getMatchingTagIndexes(ingredients);

	return (
		<article className={styles.mealCard}>
			<button
				className={styles.removeBtn}
				onClick={() => dispatch({ type: 'REMOVE_MEAL', payload: _id })}
				aria-label={`Ta bort ${name}`}>
				×
			</button>
			<header className={styles.header}>
				<h2>{name}</h2>
				<p>{description}</p>
			</header>
			<div className={styles.imageWrapper}>
				<Image
					className={styles.image}
					src={image}
					alt={name}
					fill
				/>
			</div>
			<div className={styles.meta}>
				<p>
					<strong>Plats:</strong> {location}
				</p>
				<p>
					<strong>Bäst före:</strong> {expirationDate}
				</p>
			</div>

			<div className={styles.tags}>
				{tags.map((tag) => (
					<Tag
						key={tag}
						text={tag}
					/>
				))}
			</div>
		</article>
	);
};

export default MealCard;
