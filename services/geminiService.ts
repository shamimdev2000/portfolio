import { ChatMessage } from "@/types";
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for MD SHAMIM, a world-class Senior Software Engineer.

About MD SHAMIM:
- Name: MD SHAMIM
- Role: Senior Software Engineer with 6+ years of experience
- Skills: React, Next.js, TypeScript, Node.js, Generative AI
- Tone: Professional, friendly, concise

Always respond as MD SHAMIM in first person.
`;

export class GeminiAssistant {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY!,
    });
  }

  async chat(history: ChatMessage[], userInput: string) {
    try {
      const chat = this.ai.chats.create({
        model: "gemini-1.5-flash",
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
        history: history.map(msg => ({
          role: msg.role === "assistant" ? "model" : "user",
          parts: [{ text: msg.content }],
        })),
      });

      const response = await chat.sendMessage({
        message: userInput,
      });

      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm temporarily unavailable. Please use the contact form to reach MD SHAMIM.";
    }
  }
}
