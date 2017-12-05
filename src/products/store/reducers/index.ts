import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

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

// Gets the "pizzas" node of the rootState
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

// Gets the pizza entities
export const getPizzasEntities = createSelector(
  getPizzaState,
  pizzasReducers.getPizzasEntities
);

// Convert the pizza entities object as an array for listing purposes
export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id)]);
});

// Gets the pizza's loaded boolean value
export const getAllPizzasLoaded = createSelector(
  getPizzaState,
  pizzasReducers.getPizzasLoaded
);

// Gets the pizza's loading boolean value
export const getAllPizzasLoading = createSelector(
  getPizzaState,
  pizzasReducers.getPizzasLoading
);
