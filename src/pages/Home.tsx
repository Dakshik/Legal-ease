import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, BookOpen, Shield, Users, DollarSign, Clock, Send, User } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Google Generative AI with your API key
const genAI = new GoogleGenerativeAI('AIzaSyBGDAIAsrsdL1DrOBQAp0wrpTVFG6oZttI');

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const Home = () => {
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stop Paying Heavy Fees to Lawyers for Information That's Accessible to You
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get instant answers to your legal questions with our AI-powered legal assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#chatbot-section" 
              className="bg-white text-maroon-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Chat with Legal Ease
            </a>
            <Link 
              to="/resources" 
              className="bg-transparent hover:bg-maroon-700 border-2 border-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot-section" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Ask Your Legal Questions
          </h2>
          
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
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
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
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Legal Topics You Can Ask About
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Family Law */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Family Law</h3>
              </div>
              <p className="text-gray-600">
                Get information about divorce, child custody, adoption, marriage, and other family-related legal matters.
              </p>
            </div>
            
            {/* Housing Rights */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Housing Rights</h3>
              </div>
              <p className="text-gray-600">
                Learn about tenant rights, eviction processes, lease agreements, and landlord responsibilities.
              </p>
            </div>
            
            {/* Employment Law */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <DollarSign className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Employment Law</h3>
              </div>
              <p className="text-gray-600">
                Understand workplace rights, discrimination, harassment, wages, benefits, and termination procedures.
              </p>
            </div>
            
            {/* Consumer Protection */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Consumer Protection</h3>
              </div>
              <p className="text-gray-600">
                Get information about consumer rights, fraud protection, debt collection, and product liability.
              </p>
            </div>
            
            {/* Immigration */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Immigration</h3>
              </div>
              <p className="text-gray-600">
                Learn about visa applications, citizenship, residency requirements, and immigration procedures.
              </p>
            </div>
            
            {/* Small Claims */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 border border-maroon-100">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-maroon-800 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Small Claims</h3>
              </div>
              <p className="text-gray-600">
                Understand small claims court procedures, filing requirements, and how to represent yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Legal Ease?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-maroon-100 p-4 rounded-full inline-block mb-4">
                <DollarSign className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cost-Effective</h3>
              <p className="text-gray-600">
                Access legal information without the high hourly rates of traditional legal consultations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-maroon-100 p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Availability</h3>
              <p className="text-gray-600">
                Get answers to your legal questions anytime, day or night, without scheduling appointments.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-maroon-100 p-4 rounded-full inline-block mb-4">
                <MessageSquare className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Simple Language</h3>
              <p className="text-gray-600">
                Legal information explained in plain, easy-to-understand language without complex jargon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Legal Answers?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Start chatting with our AI-powered legal assistant and get the information you need right now.
          </p>
          <a 
            href="#chatbot-section" 
            className="bg-white text-maroon-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300 inline-block"
          >
            Chat Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;