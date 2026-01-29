
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

export const analyzeCvWithGemini = async (cvText: string, jobDescription: string): Promise<AnalysisResult> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Aja como um recrutador sênior e especialista em ATS (Applicant Tracking Systems). 
    Analise o Currículo abaixo em relação à Descrição da Vaga fornecida.
    
    Currículo:
    ${cvText}
    
    Descrição da Vaga:
    ${jobDescription}
    
    Sua análise deve ser técnica e detalhada.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER, description: "A score from 0 to 100 based on the match." },
          matchPercentage: { type: Type.NUMBER, description: "Percentage of match between skills." },
          missingKeywords: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Essential keywords or skills from the job description missing in the CV." 
          },
          foundKeywords: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Keywords or skills from the job description already found in the CV." 
          },
          suggestions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Actionable tips to improve the CV for this specific role." 
          },
          optimizedSummary: { type: Type.STRING, description: "A rewritten professional summary tailored for this job." },
          feedback: { type: Type.STRING, description: "General professional feedback about the candidate's profile." }
        },
        required: ["score", "matchPercentage", "missingKeywords", "foundKeywords", "suggestions", "optimizedSummary", "feedback"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text || '{}');
    return data as AnalysisResult;
  } catch (error) {
    console.error("Error parsing AI response", error);
    throw new Error("Falha ao processar a análise da IA.");
  }
};
