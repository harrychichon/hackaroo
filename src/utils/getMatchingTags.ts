import { TAG_RULES } from '@/constants/foodTagSchema';
import type { Ingredient } from '@/constants/ingredientCategories';

export const getMatchingTags = (ingredients: Ingredient[]): number[] => {
	return TAG_RULES.flatMap((tag, index) => {
		const hasIncludes =
			tag.includeIngredients?.some((i) => ingredients.includes(i)) ?? false;

		const hasExcludes =
			tag.excludeIngredients?.some((i) => ingredients.includes(i)) ?? false;

		const matchesIncludes = !tag.includeIngredients || hasIncludes;
		const matchesExcludes = !tag.excludeIngredients || !hasExcludes;

		return matchesIncludes && matchesExcludes ? [index] : [];
	});
};
