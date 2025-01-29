import { createAction, props } from '@ngrx/store';

// Action to add a message
export const addMessage = createAction(
  '[Chat] Add Message',
  props<{ from: 'user' | 'bot'; message: any }>()
);

// Action to clear the chat history
export const clearChatHistory = createAction('[Chat] Clear Chat History');
