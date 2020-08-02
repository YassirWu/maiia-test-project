import { Action } from "redux";

export interface ActionPayload<T> extends Action {
  payload: T;
};