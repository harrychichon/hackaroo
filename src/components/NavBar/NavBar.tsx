'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';

const navItems = [
	{ label: '🏠', href: '/' },
	{ label: '🔍', href: '/search' },
	{ label: '👤', href: '/my-profile' },
];

const NavBar = () => {
	const pathname = usePathname();

	return (
		<nav className={styles.navBar}>
			{navItems.map(({ label, href }) => {
				const isActive = pathname === href;
				return (
					<Link
						key={href}
						href={href}
						className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
						{label}
					</Link>
				);
			})}
		</nav>
	);
};

export default NavBar;
