import { TAG_RULES } from '@/constants/foodTagSchema';
import styles from './Tag.module.scss';

type TagProps = {
	text: number; // We pass the index of the tag from TAG_RULES
};

const Tag = ({ text }: Readonly<TagProps>) => {
	const tag = TAG_RULES[text]; // This is safe because TAG_RULES is an array

	if (!tag) return null; // Defensive: avoid crashing on invalid index

	return <div className={styles.tag}>{tag.label}</div>;
};

export default Tag;
