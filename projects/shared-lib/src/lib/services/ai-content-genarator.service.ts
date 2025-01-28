import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AiContentGeneratorService {

  constructor() {}

  // OpenAI API endpoint
  private apiUrl = 'https://api.openai.com/v1/chat/completions';

  // Securely handle API key (e.g., load it from environment variables or a configuration file)
  private apiKey = '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'; 

  /**
   * Function to send a question to OpenAI API and fetch the response.
   * @param question - The user's question to send to the AI.
   * @returns A promise that resolves to the AI's response as a string.
   */
  async askQuestion(question: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          model: 'gpt-4', // Use a supported model like gpt-4 or gpt-3.5-turbo
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: question }
          ],
          max_tokens: 200, // Adjust token limit as needed
          temperature: 0.7 // Controls randomness of the response
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      // Return the AI's response text
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error fetching AI response:', error);
      throw new Error('Failed to fetch AI response');
    }
  }
}
