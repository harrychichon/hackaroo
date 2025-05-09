'use client';

import MealForm from '@/components/meal/MealForm/MealForm';
import MealList from '@/components/meal/MealList/MealList';
import styles from './page.module.scss';

export default function MyProfile() {
	return (
		<div className={styles.page}>
			<header className={styles.header}>
				<img
					className={styles.avatar}
					src='/testImages/profile-pic.jpg'
					alt='User avatar'
				/>
				<div>
					<h1>Dina måltider</h1>
					<p>Välkommen tillbaka, Chef.</p>
				</div>
			</header>

			<section className={styles.glassSection}>
				<MealForm />
			</section>

			<MealList />
		</div>
	);
}
