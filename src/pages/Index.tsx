
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CourseCarousel from '@/components/CourseCarousel';
import FAQ from '@/components/FAQ';
import InstructorProfiles from '@/components/InstructorProfiles';
import CompanyLogos from '@/components/CompanyLogos';
import LoadingTransition from '@/components/LoadingTransition';
import { Code, Users, Star, BookOpen, Clock, CheckCircle } from 'lucide-react';

const Index = () => {
  const [counters, setCounters] = useState({ students: 0, courses: 0, satisfaction: 0 });

  // Animate counters
  useEffect(() => {
    const targetValues = { students: 5000, courses: 24, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        students: Math.floor(targetValues.students * progress),
        courses: Math.floor(targetValues.courses * progress),
        satisfaction: Math.floor(targetValues.satisfaction * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Industry-Ready Curriculum",
      description: "Learn the latest technologies and frameworks used by top tech companies worldwide."
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with years of real-world development experience."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-400" />,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials and support."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-yellow-400" />,
      title: "Job Guarantee",
      description: "Get hired within 6 months of completion or get your money back."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer at Google",
      content: "Edlivky transformed my career completely. The hands-on projects and mentorship were incredible!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer at Meta",
      content: "The curriculum is top-notch and always up-to-date with industry standards. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      role: "DevOps Engineer at Amazon",
      content: "From zero coding experience to landing my dream job in 6 months. Thank you Edlivky!",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <LoadingTransition />
      <Navbar />
      <Hero />

      {/* Why Edlivky Section */}
      <section className="py-20 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Edlivky?
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just another coding bootcamp. We're your partner in building a successful tech career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white dark:bg-slate-700/50 border-gray-200 dark:border-slate-600 card-hover animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center animate-float" style={{ animationDelay: `${index * 200}ms` }}>{feature.icon}</div>
                  <h3 className="text-responsive-lg font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-responsive-sm text-gray-700 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Start your journey with our most popular programs
            </p>
          </div>

          <CourseCarousel />

          <div className="text-center mt-12">
            <Link to="/courses">
              <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white dark:hover:text-slate-900 btn-interactive hover-glow">
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                {counters.students.toLocaleString()}+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Students Graduated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                {counters.courses}+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Courses Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                {counters.satisfaction}%
              </div>
              <div className="text-gray-700 dark:text-gray-300">Job Placement Rate</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-slate-700/50 border-gray-200 dark:border-slate-600">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <CompanyLogos />

      {/* Instructor Profiles Section */}
      <InstructorProfiles />

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter/CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of successful developers who started their careers with Edlivky
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-responsive-lg btn-interactive hover-glow">
                Start Learning Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-gray-600 dark:border-gray-300 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-8 py-3 text-responsive-lg btn-interactive">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Edlivky Academy. All rights reserved. Building the future, one developer at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
