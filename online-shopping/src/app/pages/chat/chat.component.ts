import { Component } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  responseText = '';
  inputText = '';
  isLoading = false;

  constructor(private chatService: ChatService) {}

  formatTextWithBold(text: string) {
    // Replace starting '**' with '<b>'
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    return text;
  }

  ask() {
    this.isLoading = true;
    this.chatService.run(this.inputText).then((res) => {
      this.isLoading = false;
      this.responseText = this.formatTextWithBold(res);
    });
  }
}
