import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AiContentGeneratorService, SharableModule, SkeltonComponent } from 'shared-lib';

@Component({
  selector: 'lib-gemini-ai',
  standalone: true,
  imports: [ SharableModule,SkeltonComponent ],
  templateUrl: './gemini-ai.component.html',
  styleUrls: ['./gemini-ai.component.scss']
})
export class GeminiAiComponent {
  title = 'gemini-inte';
  prompt: string = '';
  loading: boolean = false;
  chatHistory$: Observable<any[]>;  // Declare chatHistory$ as an observable

  constructor(private geminiService: AiContentGeneratorService) {
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
    this.geminiService.clearHistory();  // Clear history in the service
  }
}
