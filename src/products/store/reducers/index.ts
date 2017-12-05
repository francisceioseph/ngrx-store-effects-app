import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

import * as pizzasReducers from "./pizzas.reducer";

export interface ProductState {
  pizzas: pizzasReducers.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: pizzasReducers.reducer
};

export const getProductsState = createFeatureSelector<ProductState>("products");

export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getAllPizzas = createSelector(
  getPizzaState,
  pizzasReducers.getPizzas
);

export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  pizzasReducers.getPizzasLoaded
);

export const getAllPizzasLoading = createSelector(
  getPizzaState,
  pizzasReducers.getPizzasLoading
);
