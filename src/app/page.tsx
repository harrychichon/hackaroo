import { MealProvider } from '@/contexts/MealProvider';
import styles from './page.module.scss';

export default function Home() {
	return (
		<MealProvider>
			<div className={styles.page}>
				<h1>Welcome to MealShare</h1>
				<p>Share your meals with the world!</p>
			</div>
		</MealProvider>
	);
}
