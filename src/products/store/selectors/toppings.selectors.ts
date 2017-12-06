import { createSelector } from "@ngrx/store";

import * as rootModule from "../../store";
import * as reducersModule from "../reducers";
import * as toppingsReducers from "../reducers/toppings.reducer";

export const getToppingsState = createSelector(
  reducersModule.getProductsState,
  (state: reducersModule.ProductState) => state.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  toppingsReducers.getToppingEntities
);

export const getAllToppings = createSelector(getToppingsEntities, entities =>
  Object.keys(entities).map(id => entities[parseInt(id)])
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  toppingsReducers.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  toppingsReducers.getToppingsLoaded
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  toppingsReducers.getSelectedToppings
);
