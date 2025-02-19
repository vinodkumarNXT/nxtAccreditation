import { Injectable } from '@angular/core';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'projects/shell/environments/environment';
// Import environment

@Injectable({
  providedIn: 'root',
})
export class AiContentGeneratorService {
  private generativeAI: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );

  public openAiApiKey =
    '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'; // Replace with your OpenAI API Key

  constructor() {
    this.generativeAI = new GoogleGenerativeAI(
      'AIzaSyB22PauIvUIzY1ZD0uhFX5fKw0SHEHIHKI'
    ); // Secure API key in environment

    //  chatGptAPIKEY:
    // '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',
  }

  async generateText(prompt: string): Promise<void> {
    const model = this.generativeAI.getGenerativeModel({ model: 'gemini-pro' });

    this.messageHistory.next([
      ...this.messageHistory.value,
      { from: 'user', message: prompt },
    ]);

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text; // This should always be a string
      console.log('AI Response:', text);

      this.messageHistory.next([
        ...this.messageHistory.value,
        { from: 'bot', message: text },
      ]);
    } catch (error) {
      console.error('Error generating text:', error);
    }
  }

  public getMessageHistory(): Observable<any[]> {
    return this.messageHistory.asObservable();
  }

  public clearHistory(): void {
    this.messageHistory.next([]);
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async uploadFileAndSummarize(formData: FormData): Promise<any> {
    const uploadUrl = 'https://api.openai.com/v1/completions'; // OpenAI's file upload endpoint
    const apiKey = this.openAiApiKey; // Your OpenAI API key

    try {
      // Step 1: Upload the file
      const uploadResponse = await axios.post(uploadUrl, formData, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      const fileId = uploadResponse.data.id; // The ID of the uploaded file
      console.log('File uploaded successfully, File ID:', fileId);

      // Step 2: Summarize the file
      const summary = await this.generateText(
        `Summarize the content of the file with ID: ${fileId}`
      );
      console.log('Summary', summary);
      // return summary; // Returning the generated summary:
    } catch (error) {
      console.error('Error uploading or summarizing the file:', error);
      return 'Error occurred while uploading or summarizing the file.';
    }
  }
}
