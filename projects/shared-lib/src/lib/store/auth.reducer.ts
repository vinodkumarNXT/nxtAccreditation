import { createReducer, on } from '@ngrx/store';
import { setLoginStatus } from 'shared-lib';
// import { setLoginStatus } from './auth.actions';

// Define the initial state for authentication
export interface AuthState {
    isLoggedIn: boolean;
}

export const initialState: AuthState = {
    isLoggedIn: false, // Default to not logged in
};

// Create the reducer to handle state changes
export const authReducer = createReducer(
    initialState,
    on(setLoginStatus, (state, { status }) => ({ ...state, isLoggedIn: status }))
);
