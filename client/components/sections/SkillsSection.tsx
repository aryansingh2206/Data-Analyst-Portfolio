const skillsData = [
  {
    category: "Databases & Querying",
    skills: [
      { name: "SQL", proficiency: 95 },
      { name: "PostgreSQL", proficiency: 90 },
      { name: "MongoDB", proficiency: 85 },
      { name: "Data Warehousing", proficiency: 92 },
    ],
  },
  {
    category: "Programming & Analytics",
    skills: [
      { name: "Python", proficiency: 93 },
      { name: "R", proficiency: 88 },
      { name: "Excel VBA", proficiency: 90 },
      { name: "Statistics", proficiency: 94 },
    ],
  },
  {
    category: "Visualization & BI",
    skills: [
      { name: "Power BI", proficiency: 94 },
      { name: "Tableau", proficiency: 92 },
      { name: "Looker", proficiency: 87 },
      { name: "Data Storytelling", proficiency: 96 },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", proficiency: 85 },
      { name: "Google Cloud", proficiency: 82 },
      { name: "Apache Spark", proficiency: 88 },
      { name: "Git & Version Control", proficiency: 90 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-purple-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                {skillGroup.category}
              </h3>
              {skillGroup.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm text-neon-cyan font-bold">{skill.proficiency}%</span>
                  </div>
                  {/* Proficiency Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden border border-white/20">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full transition-all duration-1000 ease-out shadow-glow-cyan"
                      style={{
                        width: `${skill.proficiency}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Skills Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="glass-effect p-8 rounded-xl text-center group hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="text-4xl font-black bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent mb-2">
              15+
            </div>
            <p className="text-sm text-foreground/70">Tools Mastered</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center group hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue">
            <div className="text-4xl font-black bg-gradient-to-r from-neon-blue to-purple-400 bg-clip-text text-transparent mb-2">
              4
            </div>
            <p className="text-sm text-foreground/70">Expertise Areas</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center group hover:border-purple-400/50 transition-all duration-300 hover:shadow-glow-purple">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-neon-cyan bg-clip-text text-transparent mb-2">
              90+
            </div>
            <p className="text-sm text-foreground/70">Avg Proficiency</p>
          </div>
          <div className="glass-effect p-8 rounded-xl text-center group hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div className="text-4xl font-black bg-gradient-to-r from-neon-cyan to-purple-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm text-foreground/70">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
