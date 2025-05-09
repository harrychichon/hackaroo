import MealCard from '@/components/meal/MealCard/MealCard';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<MealCard ingredients={['Abborre']} />
		</div>
	);
}
