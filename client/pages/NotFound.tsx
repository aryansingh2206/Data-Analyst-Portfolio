import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-6">
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            Oops! Page not found
          </p>
          <p className="text-foreground/70 max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <a
            href="/"
            className="inline-block mt-8 px-8 py-4 rounded-lg font-semibold text-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-background hover:shadow-glow-cyan transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
