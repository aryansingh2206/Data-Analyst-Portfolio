import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "Transforming complex data into actionable insights",
    "Strategic thinking meets advanced analytics",
    "Creative problem-solving through data visualization",
    "From raw data to real-world decisions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

        {/* Animated flowing lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Animated lines */}
          <path
            d="M0,400 Q300,200 600,400 T1200,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="1200"
            strokeDashoffset="0"
            style={{
              animation: "dash 20s linear infinite",
            }}
          />
          <path
            d="M0,300 Q300,150 600,300 T1200,300"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
            strokeDasharray="1200"
            strokeDashoffset="0"
            style={{
              animation: "dash 25s linear infinite",
              animationDelay: "5s",
            }}
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto text-center max-w-4xl">
        {/* Animated Name */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight animate-slide-up">
          <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-cyan bg-clip-text text-transparent drop-shadow-lg" style={{
            textShadow: "0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(0, 217, 255, 0.3)",
            filter: "drop-shadow(0 0 20px rgba(0, 217, 255, 0.4))"
          }}>
            Aryan Singh
          </span>
        </h1>

        {/* Rotating Taglines */}
        <div className="relative h-24 mb-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent rounded-lg blur-xl opacity-0 animate-pulse"></div>
          <div className="relative min-h-24 flex items-center justify-center">
            <p
              key={taglineIndex}
              className="text-xl md:text-2xl font-semibold text-neon-cyan glow-text max-w-2xl mx-auto animate-slide-up"
              style={{
                animation: "slide-up 0.5s ease-out",
              }}
            >
              {taglines[taglineIndex]}
            </p>
          </div>
        </div>

        {/* Static Description */}
        <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm a data analyst passionate about uncovering hidden patterns in complex datasets. With expertise in Python, SQL, and visualization tools, I transform raw data into actionable insights that drive business decisions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
          {/* Download Resume Button */}
          <a
  href= "\ARYAN_SINGH____Data_Analyst.pdf"
  download
  className="group relative px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/50 to-neon-blue/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300 blur-xl"></div>
  <div className="relative flex items-center justify-center gap-2 text-background group-hover:text-neon-cyan">
    <Download size={20} />
    Download Resume
  </div>
</a>


          {/* Contact Me Button */}
          <button
  onClick={() => {
    const el = document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group relative px-8 py-4 rounded-lg font-semibold text-lg border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 overflow-hidden"
>
  <div className="absolute inset-0 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 transition-colors"></div>
  <div className="relative flex items-center justify-center gap-2">
    <Mail size={20} />
    Contact Me
  </div>
</button>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1200;
          }
        }
      `}</style>
    </section>
  );
}
