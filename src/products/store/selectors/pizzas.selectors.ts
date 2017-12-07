import { createSelector } from "@ngrx/store";

import * as rootStoreModule from "../../../app/store";
import * as reducersModule from "../reducers";
import * as pizzasReducerModule from "../reducers/pizzas.reducer";
import * as toppingsSelectors from "./toppings.selectors";
import { Pizza } from "../../models/pizza.model";

// Gets the "pizzas" node of the rootState
export const getPizzaState = createSelector(
  reducersModule.getProductsState,
  (state: reducersModule.ProductState) => state.pizzas
);

// Gets the pizza entities
export const getPizzasEntities = createSelector(
  getPizzaState,
  pizzasReducerModule.getPizzasEntities
);

// Convert the pizza entities object as an array for listing purposes
export const getAllPizzas = createSelector(getPizzasEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id)]);
});

// Gets the pizza's loaded boolean value
export const getPizzasLoaded = createSelector(
  getPizzaState,
  pizzasReducerModule.getPizzasLoaded
);

// Gets the pizza's loading boolean value
export const getPizzasLoading = createSelector(
  getPizzaState,
  pizzasReducerModule.getPizzasLoading
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  rootStoreModule.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);

export const getPizzaVisualized = createSelector(
  getSelectedPizza,
  toppingsSelectors.getToppingsEntities,
  toppingsSelectors.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return { ...pizza, toppings };
  }
);
