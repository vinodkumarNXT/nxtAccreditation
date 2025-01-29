import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChatState } from './chat.reducer';

// Feature selector for chat state
export const selectChatState = createFeatureSelector<ChatState>('chat');

// Selector for chat history
export const selectChatHistory = createSelector(selectChatState, (state) => state.chatHistory);
