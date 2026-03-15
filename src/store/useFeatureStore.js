import { create } from "zustand";
import { sectionsToText } from "../utils/sectionToText";

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const useFeatureStore = create((set) => ({
  selectedTopic: null,
  summarizeSections: async (sections) => {
    try {
      if (!API_KEY) {
        console.error("Groq API key missing");
        return "API key is missing.";
      }

      const content = sectionsToText(sections);

      const prompt = `
      Summarize the following educational content in 4 bullet points
      for a beginner learning prompt engineering.

     ${content}
     `;

      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
              {
                role: "user",
                content: prompt,
              },
            ],
            temperature: 0.3,
          }),
        },
      );

      const data = await response.json();

      // Handle API error response
      if (!response.ok) {
        console.error("Groq API Error:", data);
        return data?.error?.message || "Failed to summarize.";
      }

      return data?.choices?.[0]?.message?.content || "No summary generated.";
    } catch (error) {
      console.error("Summarize Error:", error);
      return "Something went wrong while summarizing.";
    }
  },
  askQuestion: async (question, context) => {
    context = sectionsToText(context || []);
    const prompt = `
    Answer the question using only the context below.
  
     Context:
    ${context}
  
     Question:
    ${question}
  
    If the question cannot be answered using the context, say:
    "sorry i don't give answer outside of the context"
   `;

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.3,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Groq API Error:", data);
        return data?.error?.message || "Failed to generate answer.";
      }

      return data?.choices?.[0]?.message?.content || "No answer generated.";
    } catch (error) {
      console.error("Request failed:", error);
      return "Something went wrong.";
    }
  },
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useFeatureStore;
