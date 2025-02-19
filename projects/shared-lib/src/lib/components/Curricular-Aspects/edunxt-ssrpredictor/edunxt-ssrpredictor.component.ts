import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AiContentGeneratorService,
  ChatgptService,
  SharableModule,
  SkeltonComponent,
} from 'shared-lib';

@Component({
  selector: 'lib-edunxt-ssrpredictor',
  imports: [SharableModule, CommonModule, SkeltonComponent],
  templateUrl: './edunxt-ssrpredictor.component.html',
  styleUrl: './edunxt-ssrpredictor.component.scss',
})
export class EdunxtSSRPredictorComponent {
  title = 'gemini-inte';
  prompt: string = '';
  loading: boolean = false;
  chatHistory$: Observable<any[]>;
  selectedFile: File | null = null;
  analysisReport: any;

  // selectedFile: File | null = null;
  // loading = false;
  summary: any = '';

  constructor(
    private chatGpt: ChatgptService,
    private geminiService: AiContentGeneratorService
  ) {
    this.chatHistory$ = this.geminiService.getMessageHistory();
  }

  async sendData() {
    if (this.prompt && !this.loading) {
      this.loading = true;
      const data = this.prompt;
      this.prompt = '';
      await this.geminiService.generateText(data);
      this.loading = false;
    }
  }

  formatText(text: string): string {
    // Format the text
    return text.replace(/\*\*/g, '').replace(/\*/g, '\n').replace(/\n+/g, '\n');
  }

  clearData() {
    // Implement the clear functionality
    this.geminiService.clearHistory(); // Clear history in the service
  }
  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  // Upload the file and get the summary
  async uploadFile(): Promise<void> {
    if (this.selectedFile) {
      this.loading = true; // Show loading spinner

      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);

      try {
        // Upload the file and summarize it
        this.summary = await this.chatGpt.uploadFileAndSummarize(formData);
      } catch (error) {
        console.error('Error:', error);
        this.summary = 'An error occurred while processing the file.';
      } finally {
        this.loading = false; // Hide the loading spinner
      }
    }
  }
}
