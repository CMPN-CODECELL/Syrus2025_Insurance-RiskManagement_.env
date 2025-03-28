import React, { useState } from 'react';
import { Send, RotateCcw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };

    setMessages([...messages, newMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I'm processing your request. This is a demo response.",
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="bg-white rounded-lg shadow-lg min-h-[80vh] flex flex-col">
        {/* Sidebar */}
        <div className="flex h-[80vh]">
          <div className="w-64 bg-gray-50 p-4 border-r hidden md:block">
            <button className="w-full bg-[#F28D1B] text-white rounded-lg py-2 px-4 mb-4 flex items-center justify-center gap-2">
              <span>New Chat</span>
            </button>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Recent Conversations</div>
              {/* Add recent conversations here */}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.isUser ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-[#F28D1B] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:border-[#F28D1B]"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                />
                <button
                  onClick={handleSend}
                  className="bg-[#F28D1B] text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  <Send size={20} />
                </button>
                <button
                  onClick={() => setMessages([])}
                  className="bg-gray-200 text-gray-600 p-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <RotateCcw size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;