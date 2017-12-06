import {
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

import * as ngrxRouter from "@ngrx/router-store";

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: ngrxRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: ngrxRouter.routerReducer
};

// Reducer selectors

export const getRouterState = createFeatureSelector<
  ngrxRouter.RouterReducerState<RouterStateUrl>
>("routerReducer");

export class CustomSerializer
  implements ngrxRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}
