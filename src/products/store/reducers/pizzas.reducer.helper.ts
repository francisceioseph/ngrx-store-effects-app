import { Pizza } from "../../models/pizza.model";
import { PizzaState } from "./pizzas.reducer";

export const createPizzaEntitiesObject = (
  pizzas: Pizza[],
  state: PizzaState
) => {
  return pizzas.reduce(
    (entities: { [id: number]: Pizza }, pizza: Pizza) => {
      return {
        ...entities,
        [pizza.id]: pizza
      };
    },
    { ...state.entities }
  );
};
