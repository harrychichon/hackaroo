import { Ingredient } from '@/constants/ingredientCategories';

export type Meal = {
	_id: string;
	name: string;
	description: string;
	ingredients: Ingredient[];
	image: string;
	location: string;
	expirationDate: string;
};
