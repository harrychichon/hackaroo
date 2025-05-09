'use client';

import Tag from '@/components/ui/Tag/Tag';
import { useMealContext } from '@/contexts/MealProvider';
import { Meal } from '@/types/Meal';
import { getMatchingTagIndexes } from '@/utils/getMatchingTagIndexes';
import Image from 'next/image';
import { useState } from 'react';
import styles from './MealCard.module.scss';

type MealCardProps = Meal;

const MealCard = ({
	name,
	description,
	image,
	ingredients,
	location,
	expirationDate,
	isMine = false,
	_id,
}: MealCardProps) => {
	const { dispatch } = useMealContext();
	const [isClaimed, setIsClaimed] = useState(false);

	const tags = getMatchingTagIndexes(ingredients);

	return (
		<article
			className={`${styles.mealCard} ${isClaimed ? styles.claimedCard : ''}`}>
			<div className={styles.topBar}>
				{isMine && (
					<>
						<div className={styles.ownerBadge}>Din måltid</div>
						<button
							className={styles.removeBtn}
							onClick={() => dispatch({ type: 'REMOVE_MEAL', payload: _id })}
							aria-label={`Ta bort ${name}`}>
							×
						</button>
					</>
				)}
			</div>
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
			<div className={styles.claimArea}>
				{!isMine && (
					<>
						{!isClaimed ? (
							<button
								className={styles.wishBtn}
								onClick={() => setIsClaimed(true)}>
								Jag vill ha denna
							</button>
						) : (
							<p className={styles.claimedText}>Den är din 🤗</p>
						)}
					</>
				)}
			</div>
		</article>
	);
};

export default MealCard;
