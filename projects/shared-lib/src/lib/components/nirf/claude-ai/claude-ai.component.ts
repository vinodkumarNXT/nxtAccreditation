import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ClaudeService, SharableModule } from 'shared-lib';

@Component({
  selector: 'lib-claude-ai',
  standalone: true,
  imports: [SharableModule, CommonModule],
  templateUrl: './claude-ai.component.html',
  styleUrl: './claude-ai.component.scss'
})
export class ClaudeAiComponent {
  userMessage = '';
  aiResponse = '';

  constructor(private claudeService: ClaudeService) {}

  async sendMessage() {
    if (!this.userMessage.trim()) return;
    this.aiResponse = 'Thinking...';
    this.aiResponse = await this.claudeService.generateResponse(this.userMessage);
  }
}