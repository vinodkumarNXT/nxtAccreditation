import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { addMessage, clearChatHistory } from 'shared-lib';
import { ChatState } from 'shared-lib';

@Injectable({
  providedIn: 'root'
})
export class AiContentGeneratorService {
  
  private generativeAI: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);  // Initialize as empty array

  constructor() {
    this.generativeAI = new GoogleGenerativeAI('AIzaSyB22PauIvUIzY1ZD0uhFX5fKw0SHEHIHKI');
  }

  // Method to generate text and update message history
  async generateText(prompt: string): Promise<void> {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next([...this.messageHistory.value, { from: 'user', message: prompt }]);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // Update chat history with bot response
    this.messageHistory.next([...this.messageHistory.value, { from: 'bot', message: text }]);
  }

  // Method to get the message history as observable
  public getMessageHistory(): Observable<any[]> {
    return this.messageHistory.asObservable();
  }

  // Method to clear chat history if needed
  public clearHistory(): void {
    this.messageHistory.next([]);  // Clears the chat history
  }
} 