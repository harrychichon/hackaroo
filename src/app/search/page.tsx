'use client';

import MealCard from '@/components/meal/MealCard/MealCard';
import { TAG_RULES } from '@/constants/foodTagSchema';
import { useMealContext } from '@/contexts/MealProvider';
import { getMatchingTags } from '@/utils/getMatchingTags';
import { useState } from 'react';
import styles from './page.module.scss';

export default function SearchPage() {
	const { state } = useMealContext();
	const [query, setQuery] = useState('');
	const [activeTags, setActiveTags] = useState<string[]>([]);
	const [selectedLocation, setSelectedLocation] = useState('');

	const toggleTag = (tag: string) => {
		setActiveTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
		);
	};

	const filteredResults = state.meals.filter((meal) => {
		const matchesQuery =
			meal.name.toLowerCase().includes(query.toLowerCase()) ||
			meal.description.toLowerCase().includes(query.toLowerCase());

		const hasTagMatch =
			activeTags.length === 0 ||
			activeTags.some((tag) =>
				getMatchingTags(meal.ingredients).map(String).includes(tag)
			);

		const matchesLocation =
			selectedLocation === '' || meal.location === selectedLocation;

		return matchesQuery && hasTagMatch && matchesLocation;
	});

	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<h1>Sök</h1>
				<p>Hitta mat, ingredienser och taggar</p>
				<input
					className={styles.searchInput}
					type='text'
					placeholder='Skriv något...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>

				<div className={styles.tagFilters}>
					{TAG_RULES.map((tag) => (
						<button
							key={tag.label}
							type='button'
							className={`${styles.tagChip} ${
								activeTags.includes(tag.label) ? styles.active : ''
							}`}
							onClick={() => toggleTag(tag.label)}>
							{tag.label}
						</button>
					))}
				</div>

				<div className={styles.filterGroup}>
					<label htmlFor='location'>Plats</label>
					<select
						id='location'
						value={selectedLocation}
						onChange={(e) => setSelectedLocation(e.target.value)}>
						<option value=''>Alla platser</option>
						{Array.from(new Set(state.meals.map((meal) => meal.location))).map(
							(loc) => (
								<option
									key={loc}
									value={loc}>
									{loc}
								</option>
							)
						)}
					</select>
				</div>
			</header>

			<section className={styles.results}>
				{filteredResults.map((meal) => (
					<MealCard
						key={meal._id}
						{...meal}
					/>
				))}
			</section>
		</div>
	);
}
