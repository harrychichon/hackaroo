import { INGREDIENT_CATEGORIES_CONFIG } from './ingredientCategories';
import { INGREDIENTS_CONFIG } from './ingredients';

type IngredientName = (typeof INGREDIENTS_CONFIG)[number];
type IngredientCategory = (typeof INGREDIENT_CATEGORIES_CONFIG)[number];

type FoodTag = {
	label: string;
	excludeCategories?: IngredientCategory[];
	excludeIngredients?: IngredientName[];
	includeCategories?: IngredientCategory[];
	includeIngredients?: IngredientName[];
};

export const TAG_RULES: FoodTag[] = [
	{
		label: 'Vegetarisk',
		excludeCategories: ['Kyckling, fågel', 'Fisk, skaldjur'],
	},
	{
		label: 'Vegansk',
		excludeCategories: [
			'Kyckling, fågel',
			'Fisk, skaldjur',
			'Mjölkprodukter',
			'Ost',
			'Ägg, rom, kaviar',
			'Lever, njure, tunga etc.',
		],
	},
	{
		label: 'Pescetariansk',
		excludeCategories: ['Kyckling, fågel'],
	},
	{
		label: 'Laktovegetarisk',
		excludeCategories: [
			'Kött',
			'Kyckling, fågel',
			'Fisk, skaldjur',
			'Ägg, rom, kaviar',
		],
	},
	{
		label: 'Ovovegetarisk',
		excludeCategories: [
			'Kött',
			'Kyckling, fågel',
			'Fisk, skaldjur',
			'Mjölkprodukter',
			'Ost',
		],
	},
	{
		label: 'Glutenfri',
		excludeIngredients: ['Vete', 'Råg', 'Korn', 'Spelt', 'Graham'],
	},
	{
		label: 'Laktosfri',
		excludeCategories: ['Mjölkprodukter', 'Ost'],
	},
	{
		label: 'Sockerfri',
		excludeIngredients: ['Socker', 'Sirap', 'Honung'],
	},
	{
		label: 'Nötfri',
		excludeCategories: ['Nötter, frön'],
	},
	{
		label: 'Äggfri',
		excludeIngredients: ['Ägg', 'Äggula', 'Äggvita'],
	},
	{
		label: 'Sojafri',
		excludeIngredients: ['Soja', 'Sojabönor', 'Sojasås', 'Tofu'],
	},
	{
		label: 'Halal',
		excludeCategories: ['Fläsk', 'Alkohol'],
	},
	{
		label: 'Kosher',
		excludeCategories: ['Fläsk', 'Skaldjur'],
	},

	{
		label: 'Gluten',
		includeIngredients: ['Vete', 'Råg', 'Korn', 'Spelt', 'Graham'],
	},
	{
		label: 'Skaldjur',
		includeCategories: ['Fisk', 'Skaldjur'],
	},
	{
		label: 'Fisk',
		includeCategories: ['Fisk', 'Skaldjur'],
	},
	{
		label: 'Ägg',
		includeIngredients: ['Ägg', 'Äggula', 'Äggvita'],
	},
	{
		label: 'Jordnötter',
		includeIngredients: ['Jordnötter'],
	},
	{
		label: 'Sojabönor',
		includeIngredients: ['Sojabönor', 'Soja', 'Sojasås', 'Tofu'],
	},
	{
		label: 'Mjölk',
		includeCategories: ['Mjölkprodukter', 'Ost'],
	},
	{
		label: 'Nötter',
		includeCategories: ['Nötter, frön'],
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
		label: 'Sulfiter',
		includeIngredients: ['Vinäger'],
	},
	{
		label: 'Lupin',
		includeIngredients: ['Lupin'],
	},
	{
		label: 'Blötdjur',
		includeIngredients: ['Bläckfisk', 'Snäcka', 'Mussla'],
	},
];
