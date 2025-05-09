import { TAG_RULES } from '@/constants/foodTagSchema';
import { Ingredient } from '@/constants/ingredientCategories';
import { getMatchingTagIndexes } from './getMatchingTagIndexes';

export const getMatchingTagLabels = (ingredients: Ingredient[]): string[] => {
	const indexes = getMatchingTagIndexes(ingredients);
	return indexes.map((i) => TAG_RULES[i]?.label).filter(Boolean);
};
