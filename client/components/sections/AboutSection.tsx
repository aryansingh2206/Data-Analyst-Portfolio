import { Database, Code2, BarChart3, PieChart, Grid3x3, TrendingUp } from "lucide-react";

const skills = [
  { icon: Database, name: "SQL", color: "text-neon-cyan" },
  { icon: Code2, name: "Python", color: "text-neon-blue" },
  { icon: BarChart3, name: "Power BI", color: "text-purple-400" },
  { icon: PieChart, name: "Tableau", color: "text-neon-cyan" },
  { icon: Grid3x3, name: "Excel", color: "text-neon-blue" },
  { icon: TrendingUp, name: "Statistics", color: "text-purple-400" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate data analyst with a proven track record of transforming raw data into strategic business insights. With expertise in SQL, Python, and leading BI platforms, I help organizations make data-driven decisions that fuel growth.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My approach combines technical rigor with creative problem solving. I believe that the best analytics isn't just about numbers, it's about telling compelling stories that drive action.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not analyzing data, you'll find me exploring new visualization techniques, contributing to open source projects, or mentoring aspiring analysts.
            </p>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Core Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="group glass-effect p-6 rounded-xl hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan"
                  >
                    <Icon className={`w-10 h-10 mb-3 ${skill.color} group-hover:drop-shadow-lg transition-all`} />
                    <p className="font-semibold text-foreground text-sm">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="glass-effect p-8 rounded-xl group hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue">
            <div className="text-3xl font-bold text-neon-cyan mb-2">50+</div>
            <p className="text-foreground/70 text-sm">Dashboards Created</p>
          </div>
          <div className="glass-effect p-8 rounded-xl group hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="text-3xl font-bold text-neon-blue mb-2">2+</div>
            <p className="text-foreground/70 text-sm">Years Experience</p>
          </div>
          <div className="glass-effect p-8 rounded-xl group hover:border-purple-400/50 transition-all duration-300 hover:shadow-glow-purple">
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <p className="text-foreground/70 text-sm">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
