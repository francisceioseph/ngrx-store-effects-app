import { Action } from "@ngrx/store";

import { Pizza } from "../../models/pizza.model";

// ACTIONS
export const LOAD_PIZZAS = "[Products] Load Pizzas";
export const LOAD_PIZZAS_FAIL = "[Products] Load Pizzas Fail";
export const LOAD_PIZZAS_SUCCESS = "[Products] Load Pizzas Success";

export const CREATE_PIZZA = "[Products] Create Pizza";
export const CREATE_PIZZA_FAIL = "[Products] Create Pizza Fail";
export const CREATE_PIZZA_SUCCESS = "[Products] Create Pizza Success";

export const UPDATE_PIZZA = "[Products] Update Pizza";
export const UPDATE_PIZZA_FAIL = "[Products] Update Pizza Fails";
export const UPDATE_PIZZA_SUCCESS = "[Products] Update Pizza Success";

export const DELETE_PIZZA = "[Products] Delete Pizza";
export const DELETE_PIZZA_FAIL = "[Products] Delete Pizza Fail";
export const DELETE_PIZZA_SUCCESS = "[Products] Delete Pizza Success";

// ACTION CREATORS
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;

  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;

  constructor(public payload: Pizza[]) {}
}

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

export class DeletePizza implements Action {
  readonly type = DELETE_PIZZA;
  constructor(public payload: Pizza) {}
}

export class DeletePizzaSuccess implements Action {
  readonly type = DELETE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) {}
}

export class DeletePizzaFail implements Action {
  readonly type = DELETE_PIZZA_FAIL;
  constructor(public payload: any) {}
}

// Action Types
export type PizzasAction =
  | LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | DeletePizza
  | DeletePizzaSuccess
  | DeletePizzaFail;
