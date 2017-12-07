import { Action } from "@ngrx/store";
import { NavigationExtras } from "@angular/router";

export const GO = "[Router] Go";
export const BACK = "[Router] Back";
export const FORWARD = "[Router] Forward";

export class Go implements Action {
  readonly type = GO;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: object;
    }
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: object;
    }
  ) {}
}

export class Forward implements Action {
  readonly type = FORWARD;
  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: object;
    }
  ) {}
}

export type Actions = Go | Back | Forward;
