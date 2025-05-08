import { FOOD_CONFIG } from '@/constants/preferences';
import styles from './Tag.module.css';

type TagProps = {
	text: keyof typeof FOOD_CONFIG;
};

const Tag = ({ text }: Readonly<TagProps>) => {
	return <div className={styles.tag}>{FOOD_CONFIG[text]}</div>;
};

export default Tag;
