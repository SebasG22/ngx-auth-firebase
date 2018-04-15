import * as authActions from '../actions/auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export type Action = authActions.All;

export interface AuthFeatureModel {
  authState: AuthState
}

export interface AuthState {
  userLogged: string;
  currentUser: string;
  provider: string;
}

export const initialState: AuthState = {
  userLogged: null,
  currentUser: null,
  provider: null
}

export function reducer(state: AuthState = initialState, action: Action) {
  switch (action.type) {
    case authActions.LOGIN_USER_SUCCESS:
      return { ...state, currentUser: action.payload, userLogged: true }
  }
}

export const getAuthFeatureModel = createFeatureSelector<AuthFeatureModel>('authFeatureModel');
export const getAuthState = createSelector(getAuthFeatureModel, (state: AuthFeatureModel) => state.authState);
export const userIsLogged = createSelector(getAuthState, (state: AuthState) => state.userLogged);
export const getCurrentUser = createSelector(getAuthState, (state: AuthState) => state.currentUser);
export const getProvider = createSelector(getAuthState, (state: AuthState) => state.provider);