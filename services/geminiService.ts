
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are the personal AI assistant for MD SHAMIM, a world-class Senior Software Engineer.
Your goal is to answer questions from visitors about MD SHAMIM's career, skills, projects, and professional background.

About MD SHAMIM:
- Name: MD SHAMIM
- Role: Senior Software Engineer with 6+ years of experience.
- Top Skills: React, Next.js, TypeScript, Node.js, and Generative AI integration.
- Philosophy: Building performant, user-centric web applications that solve real-world problems.
- Communication Style: Professional, friendly, and helpful.

If asked about projects, mention CloudScale Dashboard, Nexus E-commerce, or Veritas Auth.
If asked about contact info, refer them to the contact form or social links.
Always speak in the first person ("MD SHAMIM is...") or as his representative.
Keep responses concise but informative.
`;

export class GeminiAssistant {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async chat(history: ChatMessage[], userInput: string) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      // Prepare history in the format required by the SDK if needed, 
      // but simple messages usually work fine for sendMessage.
      const response = await chat.sendMessage({ message: userInput });
      return response.text;
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having a bit of trouble connecting to my brain right now. Please try again or contact MD SHAMIM directly!";
    }
  }
}

export const geminiAssistant = new GeminiAssistant();
