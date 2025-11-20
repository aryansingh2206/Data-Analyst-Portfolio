import { Github, Linkedin, Mail, ArrowRight, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-purple-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* 🔹 Left side removed form — now blank or intro text */}
          <div className="text-foreground/70 text-lg leading-relaxed">
            Let’s collaborate on data-driven projects, dashboards, analytics workflows, or anything that turns insights into impact.
            <br /><br />
            Whether you're hiring, looking for freelance work, or just want to connect—drop me a message!
          </div>

          {/* 🔹 Right side Contact Info */}
          <div className="space-y-8">

            {/* Email */}
            <div className="glass-effect rounded-xl p-6 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan group">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-neon-cyan mt-1" />
                <div>
                  <h3 className="font-bold text-neon-cyan mb-2">Email</h3>
                  <a
                    href="mailto:aryansinghidm@gmail.com"
                    className="text-foreground/70 hover:text-neon-cyan transition-colors"
                  >
                    aryansinghidm@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-effect rounded-xl p-6 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue group">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-neon-blue mt-1" />
                <div>
                  <h3 className="font-bold text-neon-blue mb-2">Phone</h3>
                  <a
                    href="tel:9619929773"
                    className="text-foreground/70 hover:text-neon-blue transition-colors"
                  >
                    +91 96199 29773
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-effect rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:shadow-glow-purple group">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-400 mb-2">Location</h3>
                  <p className="text-foreground/70">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-neon-cyan">Follow & Connect</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/aryansingh2206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan"
                >
                  <Github className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-singh-2a623a206/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue"
                >
                  <Linkedin className="w-5 h-5 text-neon-blue group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:aryansinghidm@gmail.com"
                  className="group relative w-12 h-12 rounded-lg glass-effect flex items-center justify-center hover:border-purple-400/50 transition-all duration-300 hover:shadow-glow-purple"
                >
                  <Mail className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* 🔹 Send Message Button (Gmail redirect) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aryansinghidm@gmail.com"
              target="_blank"
              className="group relative w-full block px-6 py-4 rounded-lg font-semibold text-lg overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/50 to-neon-blue/50 group-hover:opacity-100 opacity-0 transition-opacity duration-300 blur-xl"></div>
              <div className="relative flex items-center justify-center gap-2 text-background group-hover:text-neon-cyan">
                Send Message
                <ArrowRight size={18} />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
