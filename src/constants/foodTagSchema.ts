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
		excludeIngredients: getIngredients(['BrödOchSpannmål']),
	},
	{
		label: 'Halal',
		excludeIngredients: [
			'Fläskfilé',
			'Fläskkotlett',
			'Gris ister',
			'Gris späck',
			'Alkohol',
			'Vinäger',
		],
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
			'KycklingOchFågel',
			'Mjölkprodukter',
			'Skaldjur',
			'Nötkött',
		]),
	},
	{
		label: 'Pescetariansk',
		excludeIngredients: getIngredients([
			'Fläsk',
			'Nötkött',
			'KycklingOchFågel',
		]),
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
		includeIngredients: ['Soja', 'Sojabönor', 'Sojasås', 'Tofu'],
	},
	{
		label: 'Sojafri',
		excludeIngredients: ['Soja', 'Sojabönor', 'Sojasås', 'Tofu'],
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
		excludeIngredients: getIngredients([
			'Fisk',
			'Skaldjur',
			'Fläsk',
			'Nötkött',
			'KycklingOchFågel',
		]),
	},
	{
		label: 'Vegansk',
		excludeIngredients: getIngredients([
			'Fisk',
			'Skaldjur',
			'Fläsk',
			'Nötkött',
			'NötterOchFrön',
			'ÄggOchRomOchKaviar',
			'Mjölkprodukter',
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
		label: 'Laktovegetarisk',
		excludeIngredients: getIngredients([
			'Fisk',
			'Skaldjur',
			'Fläsk',
			'Nötkött',
			'KycklingOchFågel',
			'ÄggOchRomOchKaviar',
		]),
	},
];
