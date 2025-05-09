'use client';

import { mockMeals } from '@/constants/mockMeals';
import { Meal } from '@/types/Meal';
import { createContext, useContext, useReducer } from 'react';

type MealState = {
	meals: Meal[];
	myMeals: Meal[];
};

type MealAction =
	| { type: 'ADD_MEAL'; payload: Meal }
	| { type: 'REMOVE_MEAL'; payload: string };

const initialState: MealState = {
	meals: mockMeals,
	myMeals: mockMeals.filter((meal) => meal.isMine),
};

const MealContext = createContext<{
	state: MealState;
	dispatch: React.Dispatch<MealAction>;
}>({
	state: initialState,
	dispatch: () => null,
});

const mealReducer = (state: MealState, action: MealAction): MealState => {
	switch (action.type) {
		case 'ADD_MEAL': {
			const meal = action.payload;
			return {
				meals: [meal, ...state.meals],
				myMeals: meal.isMine ? [meal, ...state.myMeals] : state.myMeals,
			};
		}
		case 'REMOVE_MEAL':
			return {
				...state,
				meals: state.meals.filter((m) => m._id !== action.payload),
				myMeals: state.myMeals.filter((m) => m._id !== action.payload),
			};
		default:
			return state;
	}
};

export const MealProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(mealReducer, initialState);
	return (
		<MealContext.Provider value={{ state, dispatch }}>
			{children}
		</MealContext.Provider>
	);
};

export const useMealContext = () => useContext(MealContext);
