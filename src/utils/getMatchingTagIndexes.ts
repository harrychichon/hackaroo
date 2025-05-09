import { TAG_RULES } from '@/constants/foodTagSchema';
import { Ingredient } from '@/constants/ingredientCategories';

export const getMatchingTagIndexes = (ingredients: Ingredient[]): number[] => {
	return TAG_RULES.reduce((matches, tag, index) => {
		const includes = tag.includeIngredients ?? [];
		const excludes = tag.excludeIngredients ?? [];

		const ingredientSet = new Set(ingredients);

		const hasInclude =
			includes.length === 0 || includes.some((i) => ingredientSet.has(i));
		const hasExclude = excludes.some((i) => ingredientSet.has(i));

		if (hasInclude && !hasExclude) {
			matches.push(index);
		}

		return matches;
	}, [] as number[]);
};
