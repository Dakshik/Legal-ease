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
            We thought of Legal Aid because of the challenges immigrants face in understanding their rights and navigating complex legal systems. As an immigrant, Dakshi has experienced firsthand how difficult it can be for non-citizens to access accurate legal information and find trustworthy resources. Today, we see how many immigrants, refugees, and undocumented individuals struggle with issues like visa applications, work permits, housing rights, and legal protections—often without clear guidance or affordable legal assistance. Many fear deportation, exploitation, or discrimination simply because they don’t know their rights. By creating a Legal Aid platform, we aim to bridge this gap by providing accessible, multilingual, and verified legal resources to empower immigrants and non-citizens with the knowledge they need to protect themselves and their families.
            </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-maroon-800 mb-4">Dakshi Kaushik</h3>
                <p className="text-maroon-600 text-xl mb-4">Developer</p>
                <p className="text-gray-600">
                  Bringing the Legal Aid Chatbot to life has been an incredible journey. From the initial concept to the final implementation, we have been driven by the goal of making legal information more accessible and user-friendly. By integrating AI, we aimed to create a tool that provides reliable guidance on common legal issues, helping individuals navigate their rights with greater confidence. This is just the beginning. As we continue to refine and expand its capabilities, we hope to reach even more people who can benefit from quick and accurate legal assistance. We are excited about the impact this chatbot can have and look forward to seeing how it evolves to better serve communities in need.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-4xl font-bold text-maroon-800 mb-4">Rishi Patel</h3>
                <p className="text-maroon-600 text-xl mb-4">Developer</p>
                <p className="text-gray-600">
                  Developing the Legal Aid Chatbot has been an exciting and rewarding experience. From the start, our goal was to bridge the gap between legal resources and the people who need them most. By leveraging AI, we have built a tool that provides clear, accessible guidance on important legal matters, empowering users with the knowledge to navigate their rights with confidence. This is just the beginning of our journey. As we continue to refine and enhance the chatbot, we look forward to expanding its reach and impact. We are committed to making legal information more accessible and ensuring that technology can play a role in promoting justice for all.
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
