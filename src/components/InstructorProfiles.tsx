import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InstructorProfiles = () => {
  // Show only 3 key instructors on homepage
  const keyInstructors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Lead Frontend Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5e2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      title: "Full-Stack Development Expert", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Priya Patel",
      title: "Data Science & AI Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn from industry veterans who have built the technologies you'll use in your career
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyInstructors.map((instructor, index) => (
            <Card 
              key={index}
              className="bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                <div className="aspect-square w-full overflow-hidden">
                  <img 
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {instructor.name}
                  </h3>
                  <p className="text-blue-400 font-medium">
                    {instructor.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/about">
            <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
              Meet All Our Instructors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InstructorProfiles;