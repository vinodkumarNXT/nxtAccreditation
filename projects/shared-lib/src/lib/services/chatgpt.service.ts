import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatgptService {
  public openAiApiKey =
    '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'; // Replace with your OpenAI API Key
  private messageHistory: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  constructor() {}

  // Upload the file to OpenAI and summarize its content
  async uploadFileAndSummarize(formData: FormData): Promise<string> {
    const uploadUrl = 'https://api.openai.com/v1/files'; // File upload endpoint

    try {
      // Step 1: Upload the file
      const uploadResponse = await axios.post(uploadUrl, formData, {
        headers: {
          Authorization: `Bearer ${this.openAiApiKey}`,
          'Content-Type': 'multipart/form-data',
        },
        params: {
          purpose: 'answers', // Can be 'answers' or 'fine-tune' based on use case
        },
      });

      const fileId = uploadResponse.data.id; // Get the file ID after upload
      console.log('File uploaded successfully, File ID:', fileId);

      // Step 2: Use the file ID to generate summary
      const summary = await this.generateSummary(fileId);
      console.log('Summary:', summary);

      return summary; // Return the summary
    } catch (error) {
      console.error('Error uploading or summarizing the file:', error);
      return 'Error occurred while uploading or summarizing the file.';
    }
  }

  // Generate summary using OpenAI's API with the file ID
  private async generateSummary(fileId: string): Promise<string> {
    const apiUrl = 'https://api.openai.com/v1/completions';

    try {
      const response = await axios.post(
        apiUrl,
        {
          model: 'gpt-3.5-turbo', // Use 'gpt-4' if available
          prompt: `Summarize the content of the file with ID: ${fileId}`,
          max_tokens: 150, // Adjust based on summary length
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${this.openAiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].text || 'No summary available';
    } catch (error) {
      console.error('Error generating summary:', error);
      return 'Error occurred while generating summary.';
    }
  }
}
