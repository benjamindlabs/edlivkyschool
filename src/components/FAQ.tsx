import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData = [
    {
      question: "How long are the bootcamp programs?",
      answer: "Our bootcamp programs range from 6 to 16 weeks depending on the course. Frontend courses are typically 12 weeks, while full-stack programs run for 16 weeks. We also offer accelerated 6-week programs for specific technologies."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "No prior coding experience is required for our beginner courses. We start from the fundamentals and gradually build up your skills. However, for advanced courses like Full-Stack Development, some basic programming knowledge is recommended."
    },
    {
      question: "What is the job placement rate?",
      answer: "We maintain a 98% job placement rate within 6 months of graduation. Our career services team works closely with students to prepare for interviews, build portfolios, and connect with our network of hiring partners."
    },
    {
      question: "Are the courses online or in-person?",
      answer: "We offer both online and hybrid learning options. Our online courses feature live instructor-led sessions, recorded lectures for review, and interactive coding environments. Hybrid options include weekend in-person workshops."
    },
    {
      question: "What support do I get during the program?",
      answer: "Students receive comprehensive support including 1-on-1 mentorship, career coaching, technical support, access to study groups, and lifetime access to our alumni network and course materials."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment options including monthly installments, income-share agreements (ISA), and scholarship opportunities. Contact our admissions team to discuss the best option for your situation."
    },
    {
      question: "What technologies will I learn?",
      answer: "Our curriculum covers the most in-demand technologies including React, Node.js, Python, JavaScript, HTML/CSS, databases, cloud platforms, and industry best practices. We regularly update our curriculum to match current market demands."
    },
    {
      question: "Can I work while taking the bootcamp?",
      answer: "Our programs are designed to be intensive and require significant time commitment. While some students work part-time, we recommend dedicating 40-60 hours per week to maximize your learning outcomes and success rate."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get answers to the most common questions about our programs
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0 transition-transform duration-300">
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
            Contact Our Admissions Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;