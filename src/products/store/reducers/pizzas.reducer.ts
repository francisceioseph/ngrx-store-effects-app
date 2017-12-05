import { Pizza } from "../../models/pizza.model";
import * as fromPizzas from "../actions/pizzas.action";

const blazingInfernoPizza = {
  name: "Blazin' Inferno",
  toppings: [
    {
      id: 10,
      name: "pepperoni"
    },
    {
      id: 9,
      name: "pepper"
    },
    {
      id: 3,
      name: "basil"
    },
    {
      id: 4,
      name: "chili"
    },
    {
      id: 7,
      name: "olive"
    },
    {
      id: 2,
      name: "bacon"
    }
  ],
  id: 1
};

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [blazingInfernoPizza],
  loading: false,
  loaded: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;