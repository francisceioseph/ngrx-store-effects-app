import { ActionReducerMap } from "@ngrx/store";

import * as pizzasReducers from "./pizzas.reducer";

export interface ProductState {
  pizzas: pizzasReducers.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: pizzasReducers.reducer
};
