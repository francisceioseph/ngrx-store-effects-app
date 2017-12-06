import * as toppingsActions from "../actions/toppings.action";
import { Topping } from "../../models/topping.model";

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: toppingsActions.ToppingsAction
): ToppingsState {
  switch (action.type) {
    case toppingsActions.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case toppingsActions.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping: Topping) => {
          return {
            ...entities,
            [topping.id]: topping
          };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case toppingsActions.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case toppingsActions.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings
      };
    }
  }

  return state;
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) =>
  state.selectedToppings;
