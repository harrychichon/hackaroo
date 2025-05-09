import { INGREDIENTS_BY_CATEGORY } from './ingredientCategories';

type Ingredient =
	(typeof INGREDIENTS_BY_CATEGORY)[keyof typeof INGREDIENTS_BY_CATEGORY][number];
type IngredientCategory = keyof typeof INGREDIENTS_BY_CATEGORY;

type FoodTag = {
	label: string;
	excludeIngredients?: Ingredient[];
	includeIngredients?: Ingredient[];
};

const getIngredients = (categories: IngredientCategory[]) =>
	categories.flatMap((category) => INGREDIENTS_BY_CATEGORY[category]);

export const TAG_RULES: FoodTag[] = [
	{
		label: 'Äggfri',
		excludeIngredients: ['Ägg', 'Äggula', 'Äggvita'],
	},
	{
		label: 'Glutenfri',
		excludeIngredients: ['Vete', 'Råg', 'Korn', 'Spelt', 'Graham'],
	},
	{
		label: 'Halal',
		excludeIngredients: getIngredients(['Fläsk', 'Övrigt']).filter((i) =>
			[
				'Fläskfilé',
				'Fläskkotlett',
				'Gris ister',
				'Gris späck',
				'Alkohol',
				'Vinäger',
			].some((a) => i.includes(a))
		),
	},
	{
		label: 'Jordnötter',
		includeIngredients: ['Jordnötter'],
	},
	{
		label: 'Kosher',
		excludeIngredients: getIngredients(['Fläsk', 'Skaldjur']),
	},
	{
		label: 'Laktosfri',
		excludeIngredients: getIngredients(['Mjölkprodukter']),
	},
	{
		label: 'Lupin',
		includeIngredients: ['Lupin'],
	},

	{
		label: 'Nötfri',
		excludeIngredients: getIngredients(['NötterOchFrön']),
	},
	{
		label: 'Ovovegetarisk',
		excludeIngredients: getIngredients([
			'NötterOchFrön',
			'Fläsk',
			'Fisk',
			'Mjölkprodukter',
			'Skaldjur',
		]),
	},
	{
		label: 'Pescetariansk',
		excludeIngredients: getIngredients(['Grönsaker']).filter((i) =>
			['Kyckling', 'Fågel'].some((k) => i.includes(k))
		),
	},
	{
		label: 'Selleri',
		includeIngredients: ['Selleri', 'Rotselleri'],
	},
	{
		label: 'Senap',
		includeIngredients: ['Senap'],
	},
	{
		label: 'Sesamfrön',
		includeIngredients: ['Sesam', 'Sesamfrö', 'Sesamolja'],
	},
	{
		label: 'Skaldjur',
		includeIngredients: getIngredients(['Skaldjur']),
	},
	{
		label: 'Sojabönor',
		includeIngredients: getIngredients(['BaljväxterOchSvamp']),
	},
	{
		label: 'Sojafri',
		excludeIngredients: getIngredients(['BaljväxterOchSvamp']),
	},
	{
		label: 'Sockerfri',
		excludeIngredients: getIngredients(['SockerOchSötningsmedel']),
	},
	{
		label: 'Sulfiter',
		includeIngredients: ['Vinäger'],
	},
	{
		label: 'Vegetarisk',
		excludeIngredients: getIngredients(['Fisk', 'Skaldjur']).filter((i) =>
			['Fisk', 'Skaldjur', 'Kyckling', 'Fågel'].some((k) => i.includes(k))
		),
	},
	{
		label: 'Vegansk',
		excludeIngredients: getIngredients([
			'Fisk',
			'Skaldjur',
			'Fläsk',
			'NötterOchFrön',
			'ÄggOchRomOchKaviar',
			'Övrigt',
		]).filter((i) =>
			[
				'Mjölk',
				'Ägg',
				'Rom',
				'Kaviar',
				'Lever',
				'Njure',
				'Tunga',
				'Nötkött',
			].some((term) => i.includes(term))
		),
	},
	{
		label: 'Ägg',
		includeIngredients: ['Ägg', 'Äggula', 'Äggvita'],
	},
	{
		label: 'Laktovegetarisk',
		excludeIngredients: getIngredients(['Fläsk', 'Fisk']).filter((i) =>
			['Ägg', 'Rom', 'Kaviar', 'Nötkött', 'Kyckling'].some((term) =>
				i.includes(term)
			)
		),
	},
];
