import styles from './IssueGrid.module.scss';

type GridProps<T> = {
	children: React.ReactNode;
	items: Array<T>;
	title: string;
	key: string;
};

export const Grid = <T,>({
	items,
	title,
	children,
	key,
}: Readonly<GridProps<T>>) => {
	if (items.length === 0) return <p>No items to display.</p>;

	return (
		<section className={styles.wrapper}>
			<h2 className={title}>{title}</h2>
			<div className={styles.grid}>
				{items.map(() => (
					<div
						key={key}
						className={styles.gridItem}>
						{children}
					</div>
				))}
			</div>
		</section>
	);
};
