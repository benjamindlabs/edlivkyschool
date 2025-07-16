import { Card } from '@/components/ui/card';

const CompanyLogos = () => {
  const companies = [
    {
      name: "Google",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop",
      graduates: 45
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop",
      graduates: 38
    },
    {
      name: "Amazon",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop",
      graduates: 52
    },
    {
      name: "Meta",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop",
      graduates: 29
    },
    {
      name: "Netflix",
      logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=120&h=60&fit=crop",
      graduates: 23
    },
    {
      name: "Apple",
      logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=120&h=60&fit=crop",
      graduates: 31
    },
    {
      name: "Tesla",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=60&fit=crop",
      graduates: 18
    },
    {
      name: "Spotify",
      logo: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=120&h=60&fit=crop",
      graduates: 15
    },
    {
      name: "Uber",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=120&h=60&fit=crop",
      graduates: 22
    },
    {
      name: "Airbnb",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop",
      graduates: 19
    },
    {
      name: "Twitter",
      logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=120&h=60&fit=crop",
      graduates: 26
    },
    {
      name: "LinkedIn",
      logo: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=120&h=60&fit=crop",
      graduates: 17
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Graduates Work At
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join the ranks of successful developers working at top tech companies worldwide
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
          {companies.map((company, index) => (
            <Card 
              key={index}
              className="bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-3 rounded-lg overflow-hidden bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <img 
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {company.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {company.graduates} graduates
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                400+
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Graduates Placed
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                $95K
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Average Starting Salary
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                98%
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Employment Rate
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our successful alumni network?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Browse Courses
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              Career Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;