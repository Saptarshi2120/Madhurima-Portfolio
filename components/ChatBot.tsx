"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Message = {
  type: "user" | "bot";
  text: string;
};

const suggestedQuestions = [
  "What's your favorite project?",
  "What tech stack do you use?",
  "Can I download your resume?",
  "Can you quiz me on JavaScript?",
  "Teach me something in 30 seconds!",
];

const defaultResponses: Record<string, string> = {
  "What's your favorite project?":
    "My favorite project is Car Price Prediction using Python and machine learning. I used Linear and Lasso Regression models, achieving an R-squared value of 0.879.",

  "What tech stack do you use?":
    "I use Python (Pandas, Numpy, Matplotlib, Scikit-Learn), Power BI, SQL, PyTorch, TensorFlow, and tools like Jupyter Notebook and Google Colab.",

  "Can I download your resume?":
    "You can download my resume from the About section. If you need the most up-to-date version or have any specific questions about my experience, feel free to reach out via email at madhurimadutta2001@gmail.com.",

  "Can you quiz me on Python?":
    "What’s the difference between `deepcopy()` and `copy()` in Python?\nHow do you handle missing values in Pandas?\nWrite a function to generate the Fibonacci sequence up to `n` terms.",

  "Teach me something in 30 seconds!":
    "You can clean data in Pandas with `.fillna()` to fill missing values or `.dropna()` to remove rows with missing data. It’s great for ensuring clean datasets!",
};

// Creative responses for unknown questions
const fallbackResponses = [
  "That's an interesting question! I'll have to think about that one... meanwhile, want to see one of my projects?",
  "Great question! While I ponder that, did you know I've worked with technologies like React and Next.js?",
  "I'm still learning about that! But I'd love to tell you about my experience with web development if you're interested.",
  "Hmm, that's a unique perspective! Check out my portfolio projects to see my creative approach to problem-solving.",
  "I'm not sure I have the perfect answer for that yet, but I'm always learning new things! Want to know what technologies I'm currently exploring?",
  "What a thought-provoking question! It reminds me of some challenges I tackled in my recent projects. Would you like to hear about them?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hi there! I'm Madhurima's virtual assistant. How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = { type: "user", text: inputValue };
    setMessages([...messages, userMessage]);

    // Generate response
    setTimeout(() => {
      let botResponse = getFallbackResponse();

      // Check if there's a default response for this exact question
      if (defaultResponses[inputValue]) {
        botResponse = defaultResponses[inputValue];
      } else {
        // Check if the input is similar to any suggested question
        for (const question of suggestedQuestions) {
          if (inputValue.toLowerCase().includes(question.toLowerCase().replace(/[?!]/g, ""))) {
            botResponse = defaultResponses[question] || botResponse;
            break;
          }
        }
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 600);

    setInputValue("");
  };

  const getFallbackResponse = () => {
    const randomIndex = Math.floor(Math.random() * fallbackResponses.length);
    return fallbackResponses[randomIndex];
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setMessages([...messages, { type: "user", text: question }]);

    setTimeout(() => {
      const botResponse = defaultResponses[question] || getFallbackResponse();
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
    }, 600);

    setInputValue("");
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-300"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] bg-gray-900 border border-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Chat header */}
          <div className="bg-purple-600 text-white px-4 py-3 font-medium flex justify-between items-center">
            <span>Chat with Madhurima</span>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={18} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {messages.map((message, index) => (
              <div key={index} className={`mb-3 ${message.type === "user" ? "ml-auto" : "mr-auto"} max-w-[85%]`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-purple-600 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-100 rounded-bl-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          <div className="px-4 py-2 bg-gray-800 border-t border-gray-700">
            <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestedQuestion(question)}
                  className="text-xs bg-gray-700 hover:bg-purple-600 text-gray-200 px-2 py-1 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Chat input */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-r-lg transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
