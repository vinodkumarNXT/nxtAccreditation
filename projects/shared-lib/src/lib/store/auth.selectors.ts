import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = (state: any) => state.auth;

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (authState: AuthState) => authState.isLoggedIn
);
