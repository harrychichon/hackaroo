'use client';

import { mockMeals } from '@/constants/mockMeals';
import { Meal } from '@/types/Meal';
import { createContext, useContext, useReducer } from 'react';

type MealState = {
	meals: Meal[];
};

type MealAction =
	| { type: 'ADD_MEAL'; payload: Meal }
	| { type: 'REMOVE_MEAL'; payload: string };

const initialState: MealState = {
	meals: mockMeals,
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
		case 'ADD_MEAL':
			return { ...state, meals: [action.payload, ...state.meals] };
		case 'REMOVE_MEAL':
			return {
				...state,
				meals: state.meals.filter((meal) => meal._id !== action.payload),
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
