'use client';

import { Ingredient, INGREDIENTS } from '@/constants/ingredientCategories'; // or wherever your list is
import { useMealContext } from '@/contexts/MealProvider';
import Image from 'next/image';
import { useState } from 'react';
import styles from './MealForm.module.scss';

const MealForm = () => {
	const { dispatch } = useMealContext();
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [ingredientInput, setIngredientInput] = useState('');
	const [suggestions, setSuggestions] = useState<Ingredient[]>([]);
	const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
		[]
	);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImagePreview(URL.createObjectURL(file));
		}
	};

	const updateSuggestions = (value: string, exclude: string[]) => {
		if (!value) return setSuggestions([]);
		const filtered = INGREDIENTS.filter(
			(i) =>
				i.toLowerCase().includes(value.toLowerCase()) && !exclude.includes(i)
		).slice(0, 5);
		setSuggestions(filtered);
	};

	const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setIngredientInput(value);
		updateSuggestions(value, selectedIngredients);
	};

	const addIngredient = (ingredient: Ingredient) => {
		if (!selectedIngredients.includes(ingredient)) {
			setSelectedIngredients((prev) => [ingredient, ...prev]);
		}
		setIngredientInput('');
		setSuggestions([]);
	};

	const handleSuggestionClick = (suggestion: Ingredient) => {
		addIngredient(suggestion);
	};

	const handleIngredientKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (suggestions.length > 0) {
				addIngredient(suggestions[0]); // ← use top suggestion
			}
		}
	};

	return (
		<form className={styles.mealForm}>
			<div className={styles.formGroup}>
				<label htmlFor='name'>Namn</label>
				<input
					type='text'
					id='name'
					name='name'
					required
				/>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='description'>Beskrivning</label>
				<textarea
					id='description'
					name='description'
					required
				/>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='ingredients'>Ingredienser</label>
				<input
					type='text'
					id='ingredients'
					name='ingredients'
					value={ingredientInput}
					onChange={handleIngredientChange}
					onKeyDown={handleIngredientKeyDown}
					autoComplete='off'
				/>
				{suggestions.length > 0 && (
					<ul className={styles.suggestions}>
						{suggestions.map((s, i) => (
							<li
								key={i}
								onClick={() => handleSuggestionClick(s)}>
								{s}
							</li>
						))}
					</ul>
				)}
				{selectedIngredients.length > 0 && (
					<ul className={styles.selectedList}>
						{selectedIngredients.map((item, index) => (
							<li key={index}>
								{item}
								<button
									type='button'
									className={styles.removeBtn}
									onClick={() => {
										const updated = selectedIngredients.filter(
											(_, i) => i !== index
										);
										setSelectedIngredients(updated);
										updateSuggestions(ingredientInput, updated);
									}}>
									×
								</button>
							</li>
						))}
					</ul>
				)}
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='location'>Plats</label>
				<input
					type='text'
					id='location'
					name='location'
					required
				/>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='expirationDate'>Bäst före</label>
				<input
					type='date'
					id='expirationDate'
					name='expirationDate'
					defaultValue={new Date().toISOString().split('T')[0]}
					required
				/>
			</div>

			<div className={styles.formGroup}>
				<label htmlFor='image'>Ladda upp bild</label>
				<input
					type='file'
					id='image'
					name='image'
					accept='image/*'
					onChange={handleImageUpload}
				/>
				{imagePreview && (
					<Image
						height={100}
						width={100}
						src={imagePreview}
						alt='Preview'
						className={styles.imagePreview}
					/>
				)}
			</div>

			<button
				type='submit'
				className={styles.submitButton}
				onClick={(e) => {
					e.preventDefault();
					if (selectedIngredients.length === 0) return;

					const form = e.currentTarget.closest('form');
					if (!form) return;

					const name = (form.elements.namedItem('name') as HTMLInputElement)
						?.value;
					const description = (
						form.elements.namedItem('description') as HTMLTextAreaElement
					)?.value;
					const location = (
						form.elements.namedItem('location') as HTMLInputElement
					)?.value;
					const expirationDate = (
						form.elements.namedItem('expirationDate') as HTMLInputElement
					)?.value;

					if (
						!name ||
						!description ||
						!imagePreview ||
						!location ||
						!expirationDate
					)
						return;

					dispatch({
						type: 'ADD_MEAL',
						payload: {
							_id: crypto.randomUUID(),
							name,
							description,
							image: imagePreview,
							ingredients: selectedIngredients,
							location,
							expirationDate,
							isMine: true,
						},
					});

					setTimeout(() => {
						form.reset();
						setImagePreview(null);
						setSelectedIngredients([]);
						setIngredientInput('');
						setSuggestions([]);
					}, 500);
				}}>
				Skänk måltid
			</button>
		</form>
	);
};

export default MealForm;
