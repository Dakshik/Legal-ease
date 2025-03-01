import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageSquare, Send, User } from 'lucide-react';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI('AIzaSyBGDAIAsrsdL1DrOBQAp0wrpTVFG6oZttI');

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ChatbotPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Hello! I\'m your legal assistant. How can I help you with legal information today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to chat
    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Get response from Gemini using the 1.5-flash model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      // Create a prompt that includes context about being a legal assistant
      const prompt = `You are a helpful legal information assistant. Provide accurate, general legal information about the following question: "${input}". 
      
      Remember to:
      1. Focus on providing factual legal information
      2. Use clear, simple language
      3. Include a disclaimer that this is general information and not legal advice
      4. Be helpful and informative
      
      Question: ${input}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Add bot response to chat
      setMessages(prev => [...prev, { role: 'bot', content: text }]);
    } catch (error) {
      console.error('Error with Gemini API:', error);
      
      // Provide a helpful error message
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: 'I apologize, but I encountered an error processing your request. This might be due to content safety filters or API limitations. Please try rephrasing your question or asking about a different legal topic.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Suggested questions for users to ask
  const suggestedQuestions = [
    "What are my rights as a tenant?",
    "How does divorce work in my state?",
    "What should I do after a car accident?",
    "How can I file for bankruptcy?",
    "What are my rights if I'm fired from my job?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-maroon-800 text-white p-4">
          <div className="flex items-center">
            <MessageSquare className="h-6 w-6 mr-2" />
            <h1 className="nav-title text-2xl">Legal Ease Chatbot</h1>
          </div>
          <p className="text-sm mt-1 text-maroon-100 flex items-center">
            Ask questions about legal topics and get informative responses
            <span className="ml-auto text-xs bg-maroon-700 px-2 py-1 rounded-full">Powered by Google Gemini AI</span>
          </p>
        </div>
        
        {/* Chat messages */}
        <div className="h-[500px] overflow-y-auto p-4 bg-gray-50">
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`mb-4 flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? 'bg-maroon-800 text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 shadow-sm rounded-bl-none'
                }`}
              >
                <div className="flex items-start mb-1">
                  {message.role === 'bot' ? (
                    <MessageSquare className="h-5 w-5 mr-2 text-maroon-800 mt-1" />
                  ) : (
                    <User className="h-5 w-5 mr-2 text-white mt-1" />
                  )}
                  <span className={`font-medium ${message.role === 'user' ? 'text-white' : 'text-maroon-800'}`}>
                    {message.role === 'user' ? 'You' : 'Legal Ease'}
                  </span>
                </div>
                <div className={`${message.role === 'user' ? 'text-white' : 'text-gray-700'} whitespace-pre-wrap`}>
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-sm rounded-bl-none max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-maroon-800 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-maroon-800 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-maroon-800 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Suggested questions */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-500 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(question)}
                className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition-colors"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your legal question here..."
              className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-maroon-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="bg-maroon-800 text-white p-2 rounded-r-lg hover:bg-maroon-700 focus:outline-none focus:ring-2 focus:ring-maroon-500 disabled:bg-maroon-400"
              disabled={isLoading || !input.trim()}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Disclaimer: Information provided is for general purposes only and does not constitute legal advice.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;