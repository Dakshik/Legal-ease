import React from 'react';
import { Scale, Award, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
            <Scale className="h-10 w-10 text-maroon-800" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Legal Ease, we believe that access to legal information should be a right, not a privilege. 
            Our mission is to democratize legal knowledge by leveraging AI technology to provide accurate, 
            accessible, and affordable legal information to everyone.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                We are committed to making legal information accessible to everyone, regardless of their background or financial situation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We believe in empowering individuals with knowledge so they can make informed decisions about their legal matters.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-3 bg-maroon-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-maroon-800" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We understand that legal issues can be stressful, and we approach every interaction with empathy and understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Legal Ease was born from a simple observation: legal information is often locked behind expensive consultations and complex jargon, making it inaccessible to many people who need it most.
          </p>
          <p className="text-gray-600 mb-4">
            Our founders experienced firsthand how difficult it can be to navigate legal systems without guidance. They recognized that while AI technology was advancing rapidly, it wasn't being applied effectively to solve this accessibility problem in the legal field.
          </p>
          <p className="text-gray-600 mb-4">
            In 2023, they assembled a team of legal experts and AI specialists to create a solution that could provide reliable legal information in plain language, available 24/7, and at no cost to users.
          </p>
          <p className="text-gray-600">
            Today, Legal Ease continues to grow and improve, helping thousands of people understand their legal rights and options every day.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-maroon-800 mb-4">Dakshi Kaushik</h3>
                <p className="text-maroon-600 text-xl mb-4">Founder & Legal Tech Specialist</p>
                <p className="text-gray-600">
                  Dakshi has over 10 years of experience in legal technology and access to justice initiatives. 
                  He founded Legal Ease with the mission of making legal information accessible to everyone.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-maroon-800 mb-4">Rishi Patel</h3>
                <p className="text-maroon-600 text-xl mb-4">AI Developer & Legal Researcher</p>
                <p className="text-gray-600">
                  Rishi combines his background in artificial intelligence with legal research to ensure 
                  Legal Ease provides accurate and helpful information to users seeking legal guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
              <div className="text-sm text-yellow-700">
                <p>
                  While we strive to provide accurate and helpful information, Legal Ease is not a substitute for professional legal advice. 
                  The information provided by our chatbot is for general informational purposes only and should not be construed as legal advice 
                  specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;