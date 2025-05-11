"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"

type Message = {
  type: "user" | "bot"
  text: string
}

const suggestedQuestions = [
  "What's your favorite project?",
  "What tech stack do you use?",
  "Can I download your resume?",
  "Can you quiz me on Python?",
  "Teach me something in 30 seconds!",
]

const defaultResponses: Record<string, string> = {
  "What's your favorite project?":
    "My favorite project is Car Price Prediction using Python and machine learning. I used Linear and Lasso Regression models, achieving an R-squared value of 0.879.",
  "What tech stack do you use?":
    "I use Python (Pandas, Numpy, Matplotlib, Scikit-Learn), Power BI, SQL, PyTorch, TensorFlow, and tools like Jupyter Notebook and Google Colab.",
  "Can I download your resume?":
    "You can download my resume from the Resume section. If you need the most up-to-date version, feel free to email me at madhurimadutta2001@gmail.com.",
  "Can you quiz me on Python?":
    "What's the difference between `deepcopy()` and `copy()` in Python?\nHow do you handle missing values in Pandas?\nWrite a function to generate the Fibonacci sequence up to `n` terms.",
  "Teach me something in 30 seconds!":
    "You can clean data in Pandas using `.fillna()` to fill or `.dropna()` to drop missing values. This is key for data preprocessing.",
}

const fallbackResponses = [
  "That's an interesting question! Meanwhile, want to see one of my projects?",
  "Great question! Did you know I've worked with React and Next.js?",
  "I'm still learning about that! Want to know about my web dev experience?",
  "Check out my portfolio projects for creative problem-solving examples.",
  "I'm always learning! Want to hear what tech I'm exploring right now?",
  "That reminds me of some challenges I faced in recent projects!",
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { type: "bot", text: "Hi there! I'm Madhurima's assistant. How can I help you?" },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const getFallbackResponse = () => fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = { type: "user", text: inputValue }
    setMessages((prev) => [...prev, userMessage])

    setTimeout(() => {
      let botResponse = defaultResponses[inputValue] || getFallbackResponse()

      for (const question of suggestedQuestions) {
        if (inputValue.toLowerCase().includes(question.toLowerCase().replace(/[?!]/g, ""))) {
          botResponse = defaultResponses[question] || botResponse
          break
        }
      }

      setMessages((prev) => [...prev, { type: "bot", text: botResponse }])
    }, 600)

    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage()
  }

  const handleSuggestedQuestion = (question: string) => {
    setMessages((prev) => [...prev, { type: "user", text: question }])
    setTimeout(() => {
      const botResponse = defaultResponses[question] || getFallbackResponse()
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }])
    }, 600)
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] bg-gray-900 border border-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-purple-600 text-white px-4 py-3 flex justify-between items-center">
            <span>Chat with Madhurima</span>
            <button onClick={toggleChat} className="hover:text-gray-200">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {messages.map((msg, i) => (
              <div key={i} className={`mb-3 ${msg.type === "user" ? "ml-auto" : "mr-auto"} max-w-[85%]`}>
                <div
                  className={`p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-purple-600 text-white rounded-br-none"
                      : "bg-gray-800 text-gray-100 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-2 bg-gray-800 border-t border-gray-700">
            <p className="text-xs text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestedQuestion(q)}
                  className="text-xs bg-gray-700 hover:bg-purple-600 text-gray-200 px-2 py-1 rounded-full transition"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-gray-800 border-t border-gray-700 flex">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-r-lg transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
