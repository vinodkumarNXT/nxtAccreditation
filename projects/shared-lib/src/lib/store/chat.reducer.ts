import { createReducer, on } from '@ngrx/store';
import { addMessage, clearChatHistory } from './chat.actions';

export interface ChatState {
  chatHistory: { from: 'user' | 'bot'; message: string }[];
}

export const initialChatState: ChatState = {
  chatHistory: [],  // Initially empty chat history
};

export const chatReducer = createReducer(
  initialChatState,
  on(addMessage, (state, { from, message }) => ({
    ...state,
    chatHistory: [...state.chatHistory, { from, message }],
  })),
  on(clearChatHistory, (state) => ({
    ...state,
    chatHistory: [],  // Clear chat history
  }))
);
