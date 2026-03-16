import React, { useState } from "react";
import useFeatureStore from "../../store/useFeatureStore";

function AskQuestionBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const context = `
Prompt engineering is the process of designing prompts
to get better responses from AI models.
`;

  const askQuestion = useFeatureStore((state) => state.askQuestion);

  const handleAsk = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const answer = await askQuestion(
      input,
      useFeatureStore.getState().selectedTopic,
    );

    setMessages((prev) => [...prev, { role: "ai", text: answer }]);

    setInput("");
  };

  return (
    <div className="flex flex-col bg-cyan-400 h-full my-5">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded max-w-[70%] ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "bg-white-400 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 p-3 border-t">
        <input
          className="border flex-1 p-2 rounded text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleAsk}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default AskQuestionBox;
