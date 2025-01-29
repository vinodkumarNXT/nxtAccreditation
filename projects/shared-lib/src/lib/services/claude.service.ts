import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClaudeService {

  private apiUrl = '/api/v1/complete'; // Use the proxy URL

  // private apiUrl = 'https://api.anthropic.com/v1/complete'; // Replace with correct endpoint
  private apiKey = 'apikey_01Rj2N8SVvo6BePZj99NhmiT'; // Replace with your Claude API key

 async generateResponse(prompt: string): Promise<string> {
    try {
      const response = await axios.post(
        this.apiUrl,
        {
          prompt: `${prompt}`,  // Format the prompt
          max_tokens_to_sample: 200,  // Max tokens for completion
          stop_sequences: ["\n\nHuman:"],  // Stop sequence after assistant's response
        },
        {
          headers: {
            'x-api-key': this.apiKey,  // Pass API key in headers
            'anthropic-version': '2023-06-01',  // Use the required version header
            'content-type': 'application/json',  // Set content-type to JSON
          },
        }
      );

      return response.data.completion;  // Get the completion response from Claude
    } catch (error) {
      console.error('Claude AI request failed:', error);
      return 'Error generating response';
    }
  }
}
