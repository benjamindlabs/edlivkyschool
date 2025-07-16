import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Users, Award } from 'lucide-react';

const FullInstructorProfiles = () => {
  const instructors = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Lead Frontend Instructor",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c5e2?w=300&h=300&fit=crop&crop=face",
      bio: "Former Senior Engineer at Google with 8+ years of experience in React, TypeScript, and modern web development. PhD in Computer Science from MIT.",
      location: "San Francisco, CA",
      rating: 4.9,
      students: 1200,
      specialties: ["React", "TypeScript", "Next.js", "UI/UX Design", "Performance Optimization"],
      achievements: ["Google Developer Expert", "React Conf Speaker", "Open Source Contributor"],
      experience: "8+ years",
      courses: ["Frontend Fundamentals", "Advanced React", "TypeScript Mastery"]
    },
    {
      name: "Michael Rodriguez",
      title: "Full-Stack Development Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Full-stack architect with extensive experience at Meta and Netflix. Specializes in scalable backend systems and modern JavaScript frameworks.",
      location: "Austin, TX",
      rating: 4.8,
      students: 950,
      specialties: ["Node.js", "Python", "MongoDB", "AWS", "Microservices", "GraphQL"],
      achievements: ["AWS Certified Solutions Architect", "MongoDB University Instructor", "Tech Lead at Netflix"],
      experience: "10+ years",
      courses: ["Backend Development", "Full-Stack MERN", "Cloud Architecture"]
    },
    {
      name: "Dr. Priya Patel",
      title: "Data Science & AI Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      bio: "AI Research Scientist with published papers in machine learning. Former data scientist at Tesla with expertise in deep learning and computer vision.",
      location: "Boston, MA",
      rating: 4.9,
      students: 720,
      specialties: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Computer Vision"],
      achievements: ["PhD in AI from Stanford", "Published Researcher", "IEEE Fellow"],
      experience: "12+ years",
      courses: ["Data Science Fundamentals", "Machine Learning", "AI & Deep Learning"]
    },
    {
      name: "James Chen",
      title: "DevOps & Cloud Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Senior DevOps Engineer with experience at Amazon and Microsoft. Expert in container orchestration, CI/CD pipelines, and cloud infrastructure.",
      location: "Seattle, WA",
      rating: 4.7,
      students: 680,
      specialties: ["Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "Terraform"],
      achievements: ["AWS Solutions Architect Professional", "Kubernetes Certified Administrator", "Docker Captain"],
      experience: "9+ years",
      courses: ["DevOps Fundamentals", "Container Orchestration", "Cloud Infrastructure"]
    },
    {
      name: "Lisa Thompson",
      title: "Cybersecurity Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Cybersecurity consultant and ethical hacker with experience protecting Fortune 500 companies. CISSP certified with expertise in penetration testing.",
      location: "Washington, DC",
      rating: 4.8,
      students: 520,
      specialties: ["Penetration Testing", "Network Security", "Ethical Hacking", "CISSP", "Risk Assessment"],
      achievements: ["CISSP Certified", "CEH Master", "Security Conference Speaker"],
      experience: "11+ years",
      courses: ["Cybersecurity Fundamentals", "Ethical Hacking", "Security Architecture"]
    },
    {
      name: "Robert Kim",
      title: "Mobile Development Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      bio: "Mobile development expert with apps reaching millions of users. Former iOS team lead at Uber with expertise in both native and cross-platform development.",
      location: "Los Angeles, CA",
      rating: 4.6,
      students: 840,
      specialties: ["React Native", "iOS", "Android", "Flutter", "Swift", "Kotlin"],
      achievements: ["Apple Developer Expert", "Google Developer Expert", "Published App Developer"],
      experience: "7+ years",
      courses: ["Mobile Development", "React Native", "iOS Development"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Full Team of Expert Instructors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet all our industry veterans who will guide you through your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-600 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <CardContent className="p-0">
                {/* Header with Image */}
                <div className="relative">
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                    <img 
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {instructor.experience}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {instructor.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-2">
                      {instructor.title}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {instructor.location}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {instructor.rating}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-green-400 mr-1" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {instructor.students}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Students</p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {instructor.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Specialties
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {instructor.specialties.slice(0, 4).map((specialty, idx) => (
                        <Badge 
                          key={idx}
                          variant="secondary"
                          className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                        >
                          {specialty}
                        </Badge>
                      ))}
                      {instructor.specialties.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{instructor.specialties.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-1 text-yellow-400" />
                      Key Achievements
                    </h4>
                    <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                      {instructor.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Courses */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Teaching
                    </h4>
                    <div className="text-xs text-gray-600 dark:text-gray-300">
                      {instructor.courses.join(' • ')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullInstructorProfiles;