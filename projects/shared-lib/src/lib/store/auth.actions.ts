import { createAction } from '@ngrx/store';

// Action to set login status
export const setLoginStatus = createAction(
    '[Auth] Set Login Status',
    (status: boolean) => ({ status })
);
