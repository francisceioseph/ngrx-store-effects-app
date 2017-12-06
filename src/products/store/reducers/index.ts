import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as pizzasReducers from "./pizzas.reducer";

// Defines what is the ProductState Type
export interface ProductState {
  pizzas: pizzasReducers.PizzaState;
}

// Registering the reducers
export const reducers: ActionReducerMap<ProductState> = {
  pizzas: pizzasReducers.reducer
};

// Gets the rootState object from the store
export const getProductsState = createFeatureSelector<ProductState>("products");
