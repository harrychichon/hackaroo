import { MealProvider } from '@/contexts/MealProvider';
import styles from './page.module.scss';

export default function Home() {
	return (
		<MealProvider>
			<div className={styles.page}>
				<p>Välkommen till</p>
				<h1>MatResQ</h1>
				<p>Maten du inte behöver – till någon som gör det.</p>
			</div>
		</MealProvider>
	);
}
