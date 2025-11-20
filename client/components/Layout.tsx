import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-background/40 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold glow-text">
              DA
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-neon-cyan transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm hover:text-neon-cyan transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm hover:text-neon-cyan transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm hover:text-neon-cyan transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-neon-cyan transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/aryansingh2206"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aryan-singh-2a623a206/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-neon-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background/50 backdrop-blur py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold glow-text mb-4">DA</div>
              <p className="text-sm text-foreground/70">
                Data-driven decisions, visually told.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-neon-cyan transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="hover:text-neon-cyan transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-neon-cyan transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>
                  <a
                    href="https://github.com/aryansingh2206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-cyan transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/aryan-singh-2a623a206/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon-cyan transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <p className="text-sm text-foreground/70">
                <a
                  href="mailto:aryansinghidm@gmail.com"
                  className="hover:text-neon-cyan transition-colors"
                >
                  aryansinghidm@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-foreground/50">
            <p>&copy; 2025 Data Analyst Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
