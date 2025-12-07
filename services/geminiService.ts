// Feature removed as requested.
// This file is kept as a placeholder to avoid build errors if referenced elsewhere,
// but the functionality has been disabled.

/*
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Digital Twin" of Hanifa, a Senior Frontend Engineer.
Your goal is to answer questions about Hanifa's professional background, skills, and projects in a professional yet conversational tone.
`;

let chatSession: Chat | null = null;

export const initChat = (): Chat => {
  if (chatSession) return chatSession;
  const apiKey = process.env.API_KEY || '';
  const ai = new GoogleGenAI({ apiKey });
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
   return "Feature disabled.";
};
*/

export const initChat = () => null;
export const sendMessageToGemini = async (message: string) => "Feature disabled.";