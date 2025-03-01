import React from 'react';
import { ExternalLink, BookOpen, FileText, Video, Globe } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    {
      title: "Legal Guides",
      icon: <BookOpen className="h-6 w-6 text-maroon-800" />,
      resources: [
        {
          title: "Guide to Tenant Rights",
          description: "Comprehensive overview of tenant rights and landlord responsibilities across the US.",
          url: "https://www.hud.gov/topics/rental_assistance/tenantrights"
        },
        {
          title: "Family Law Handbook",
          description: "Information about divorce, child custody, and other family law matters.",
          url: "https://www.usa.gov/family-legal-issues"
        },
        {
          title: "Employment Law Basics",
          description: "Overview of workplace rights, discrimination laws, and wage regulations.",
          url: "https://www.dol.gov/general/topic/employment-law"
        }
      ]
    },
    {
      title: "Government Resources",
      icon: <Globe className="h-6 w-6 text-maroon-800" />,
      resources: [
        {
          title: "USA.gov Legal Topics",
          description: "Official US government information on various legal topics and services.",
          url: "https://www.usa.gov/legal-services"
        },
        {
          title: "Consumer Financial Protection Bureau",
          description: "Resources for consumer rights and financial protection.",
          url: "https://www.consumerfinance.gov/"
        },
        {
          title: "Social Security Administration",
          description: "Information about social security benefits and rights.",
          url: "https://www.ssa.gov/"
        }
      ]
    },
    {
      title: "Legal Document Templates",
      icon: <FileText className="h-6 w-6 text-maroon-800" />,
      resources: [
        {
          title: "Power of Attorney Forms",
          description: "Templates and guidance for creating power of attorney documents.",
          url: "https://www.lawdepot.com/contracts/power-of-attorney/"
        },
        {
          title: "Rental Agreement Templates",
          description: "Customizable lease and rental agreement templates.",
          url: "https://www.lawdepot.com/contracts/residential-lease/"
        },
        {
          title: "Will and Testament Forms",
          description: "Templates for creating a basic will and testament.",
          url: "https://www.lawdepot.com/contracts/last-will-and-testament/"
        }
      ]
    },
    {
      title: "Educational Videos",
      icon: <Video className="h-6 w-6 text-maroon-800" />,
      resources: [
        {
          title: "Understanding Small Claims Court",
          description: "Video series explaining how small claims court works and how to prepare.",
          url: "https://www.youtube.com/results?search_query=small+claims+court+explained"
        },
        {
          title: "Legal Rights During Police Encounters",
          description: "Educational videos about your rights when interacting with law enforcement.",
          url: "https://www.youtube.com/results?search_query=know+your+rights+police"
        },
        {
          title: "Immigration Law Basics",
          description: "Video explanations of immigration processes and requirements.",
          url: "https://www.youtube.com/results?search_query=immigration+law+basics"
        }
      ]
    }
  ];

  const legalAidOrganizations = [
    {
      name: "Legal Services Corporation",
      description: "Nonprofit organization that provides civil legal aid for low-income Americans.",
      url: "https://www.lsc.gov/"
    },
    {
      name: "American Bar Association Free Legal Answers",
      description: "Virtual legal advice clinic for qualifying users to post civil legal questions.",
      url: "https://abafreelegalanswers.org/"
    },
    {
      name: "LawHelp.org",
      description: "Helps low and moderate income people find free legal aid programs in their communities.",
      url: "https://www.lawhelp.org/"
    },
    {
      name: "Pro Bono Net",
      description: "National nonprofit organization working to increase access to justice.",
      url: "https://www.probono.net/"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Legal Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access free legal information, guides, templates, and educational materials to help you understand your rights and legal options.
          </p>
        </div>

        {/* Resource Categories */}
        {resourceCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center mb-6">
              {category.icon}
              <h2 className="text-2xl font-bold text-gray-900 ml-2">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <div key={resourceIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 border border-maroon-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-maroon-800 hover:text-maroon-600"
                  >
                    Visit Resource <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Legal Aid Organizations */}
        <div className="bg-maroon-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Legal Aid Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalAidOrganizations.map((org, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4">{org.description}</p>
                <a 
                  href={org.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-maroon-800 hover:text-maroon-600"
                >
                  Visit Website <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Disclaimer</h3>
              <div className="text-sm text-yellow-700">
                <p>
                  The resources listed on this page are for informational purposes only and do not constitute legal advice. 
                  Always consult with a qualified attorney for advice specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;