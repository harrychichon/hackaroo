export const getDaysLeft = (expirationDate: string) => {
	const today = new Date();
	const expiry = new Date(expirationDate);
	const diffTime = expiry.getTime() - today.getTime();
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};
