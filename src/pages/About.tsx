
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import FullInstructorProfiles from '@/components/FullInstructorProfiles';
import { Users, Target, Award, Heart } from 'lucide-react';
import heroAboutImage from '@/assets/hero-bg-about.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-400" />,
      title: "Passion",
      description: "We build fun out of work with genuine passion for what we do"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-400" />,
      title: "Excellence",
      description: "We strive for excellence in everything we deliver"
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Growth",
      description: "We believe in continuous growth and learning"
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-400" />,
      title: "Quality",
      description: "We maintain the highest standards in our services"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      {/* Header Section */}
      <section 
        className="py-20 bg-gray-50 dark:bg-slate-800 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroAboutImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Edlivky</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Building the future through technology education and innovation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Story</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                At Edlivky, we build fun out of work with a passion for growth and excellence. Edlivky Groups focuses on premier IT On-site services, specialized collaborative technology design, as well as integration and managed services. It specializes in providing both desktop support and server support resources to a variety of customers. We have helped clients meet goals, drive action and improve efficiency by streamlining technologies and standards, and provide the best output.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">IT Training & Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive coding bootcamps and technology courses designed to prepare students for successful careers in tech.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">On-site IT Services</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Premier IT support services including desktop support, server management, and technical assistance for businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technology Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized collaborative technology design and integration services to streamline business processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Full Instructor Profiles Section */}
      <FullInstructorProfiles />

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Edlivky Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
