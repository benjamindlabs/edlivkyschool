
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Oops! Page not found</p>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
