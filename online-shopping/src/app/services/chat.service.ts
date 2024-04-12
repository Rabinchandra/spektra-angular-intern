import { Injectable, input } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiKey = 'AIzaSyAhGhLsnEMCzPNot1DYKzBmjdzmAEl0Ib0';
  private genAI: GoogleGenerativeAI;

  constructor(private cartService: CartService) {
    this.genAI = new GoogleGenerativeAI(this.apiKey);
  }

  // Run user's prompt
  async run(userInput: string): Promise<string> {
    // For text-only input, use the gemini-pro model
    const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
    // Get the cart data
    const cartData = JSON.stringify(this.cartService.getCart());

    const prompt =
      `I am using you to analyse about products in my ecommerce website. Now these are the data of the products: ${cartData}. User will give you prompt. Important: Give in html div with the important points in bold properly formatted with proper line breaks with <br> but do not include html as a text. User Input is:` +
      userInput;
    userInput;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  }
}
