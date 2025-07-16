import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import LoadingTransition from '@/components/LoadingTransition';
import InteractiveCourseCard from '@/components/InteractiveCourseCard';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import heroCoursesImage from '@/assets/hero-bg-courses.jpg';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Data Science', 'Programming', 'Security', 'Analytics', 'Business'];

  const allCourses = [
    {
      id: 1,
      title: "Web Design - Frontend",
      description: "Master modern frontend development with React, HTML5, CSS3, and responsive design",
      category: "Web Development",
      level: "Beginner",
      duration: "12 weeks",
      students: 1250,
      rating: 4.8,
      price: "₦150,000",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      tags: ["React", "HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 2,
      title: "Web Design - Fullstack",
      description: "Complete MERN stack development from frontend to backend deployment",
      category: "Web Development",
      level: "Advanced",
      duration: "16 weeks",
      students: 890,
      rating: 4.9,
      price: "₦250,000",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 3,
      title: "Data Science",
      description: "Learn Python, machine learning algorithms, and data visualization techniques",
      category: "Data Science",
      level: "Intermediate",
      duration: "14 weeks",
      students: 720,
      rating: 4.7,
      price: "₦200,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["Python", "Machine Learning", "Pandas", "Visualization"]
    },
    {
      id: 4,
      title: "Java Programming",
      description: "Master Java from basics to advanced enterprise application development",
      category: "Programming",
      level: "Beginner",
      duration: "12 weeks",
      students: 950,
      rating: 4.6,
      price: "₦130,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=200&fit=crop",
      tags: ["Java", "OOP", "Spring Boot", "Enterprise"]
    },
    {
      id: 5,
      title: "Cyber Security",
      description: "Protect systems and networks from digital attacks and security threats",
      category: "Security",
      level: "Intermediate",
      duration: "10 weeks",
      students: 630,
      rating: 4.8,
      price: "₦180,000",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop",
      tags: ["Security", "Network", "Ethical Hacking", "Penetration Testing"]
    },
    {
      id: 6,
      title: "Python Programming",
      description: "From basics to advanced Python programming concepts and frameworks",
      category: "Programming",
      level: "Beginner",
      duration: "10 weeks",
      students: 1400,
      rating: 4.9,
      price: "₦120,000",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop",
      tags: ["Python", "Django", "Flask", "Automation"]
    },
    {
      id: 7,
      title: "C# Programming",
      description: "Build robust applications with C# and .NET framework",
      category: "Programming",
      level: "Intermediate",
      duration: "12 weeks",
      students: 580,
      rating: 4.5,
      price: "₦140,000",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
      tags: ["C#", ".NET", "ASP.NET", "Desktop Apps"]
    },
    {
      id: 8,
      title: "Data Analytics + Dashboard",
      description: "Transform raw data into actionable insights with powerful dashboard creation",
      category: "Analytics",
      level: "Intermediate",
      duration: "8 weeks",
      students: 420,
      rating: 4.7,
      price: "₦160,000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      tags: ["Excel", "Power BI", "Tableau", "SQL"]
    },
    {
      id: 9,
      title: "PHP Programming",
      description: "Server-side development with PHP and popular frameworks like Laravel",
      category: "Programming",
      level: "Beginner",
      duration: "10 weeks",
      students: 760,
      rating: 4.4,
      price: "₦110,000",
      image: "https://images.unsplash.com/photo-1599507593548-1f19ab5d93eb?w=400&h=200&fit=crop",
      tags: ["PHP", "Laravel", "MySQL", "Web Development"]
    },
    {
      id: 10,
      title: "HRMS & Payroll",
      description: "Master Human Resource Management Systems and payroll processing",
      category: "Business",
      level: "Beginner",
      duration: "6 weeks",
      students: 320,
      rating: 4.3,
      price: "₦90,000",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop",
      tags: ["HR Systems", "Payroll", "Management", "Business"]
    },
    {
      id: 11,
      title: "SAP Business ByDesign",
      description: "Enterprise resource planning with SAP Business ByDesign",
      category: "Business",
      level: "Advanced",
      duration: "8 weeks",
      students: 180,
      rating: 4.6,
      price: "₦280,000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      tags: ["SAP", "ERP", "Business Process", "Enterprise"]
    },
    {
      id: 12,
      title: "Blockchain",
      description: "Build decentralized applications and smart contracts on various blockchain platforms",
      category: "Programming",
      level: "Advanced",
      duration: "14 weeks",
      students: 340,
      rating: 4.8,
      price: "₦220,000",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      tags: ["Blockchain", "Smart Contracts", "Ethereum", "Web3"]
    }
  ];

  const filteredCourses = selectedCategory === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <LoadingTransition />
      <Navbar />
      
      {/* Header Section */}
      <section 
        className="py-20 bg-gray-50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${heroCoursesImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to take you from beginner to professional developer
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white bg-white dark:bg-slate-800'
                } btn-interactive touch-friendly`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      course.level === 'Beginner' 
                        ? 'bg-green-500 text-white' 
                        : course.level === 'Advanced'
                        ? 'bg-red-500 text-white'
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {course.level === 'Beginner' ? '🔰' : course.level === 'Advanced' ? '🚀' : '⚡'} {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      {course.price}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{course.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-blue-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-green-400" />
                      {course.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
                      {course.rating}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <BookOpen className="h-4 w-4 mr-2 text-purple-400" />
                      {course.category}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-400 mb-4">
                No courses found in this category
              </h3>
              <p className="text-gray-500 mb-8">Try selecting a different category or view all courses</p>
              <Button onClick={() => setSelectedCategory('All')} className="bg-blue-600 hover:bg-blue-700">
                View All Courses
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get in touch with our team to discuss custom training programs tailored to your needs
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Edlivky Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
