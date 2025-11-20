import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Data Science & BI Intern",
    company: "Bluestock Fintech",
    period: "Oct 2024 – February 2025",
    description:
      "Worked on financial analytics pipelines, automated insights extraction, and built KPI dashboards for investment behavior analysis.",
    responsibilities: [
      "Cleaned and processed high-frequency financial datasets, reducing inconsistencies by 20%.",
      "Developed Python-based analytical workflows using Pandas, NumPy, and Scikit-learn to identify investor patterns.",
      "Designed optimized SQL queries and aggregated models cutting manual reporting time by 40%.",
      "Built Power BI dashboards using DAX time-intelligence to visualize metrics such as rolling returns and volatility.",
      "Collaborated with product and research teams to convert business requirements into measurable KPIs."
    ],
    color: "from-neon-cyan",
  },
  {
    id: 2,
    role: "Data Analyst Intern",
    company: "Agumentik Software Private Limited",
    period: "May 2024 – Sep 2024",
    description:
      "Built automated reporting pipelines and BI dashboards to support operational and sales analytics.",
    responsibilities: [
      "Structured SQL & Excel datasets into reliable reporting models, improving refresh stability by 30%.",
      "Created Power BI dashboards using star-schema modeling and advanced DAX for performance metrics.",
      "Automated refresh cycles using Power Query M, reducing manual data updates by 70%.",
      "Built Python scripts for preprocessing, anomaly detection, and CSV-to-database ETL workflows.",
      "Collaborated with stakeholders to translate raw operational data into meaningful business insights."
    ],
    color: "from-purple-500",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-purple-500 to-neon-blue"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative md:ml-24">
                {/* Node */}
                <div
                  className={`hidden md:block absolute -left-12 top-8 w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} to-neon-cyan p-0.5`}
                >
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} to-neon-cyan`}></div>
                  </div>
                </div>

                {/* Card */}
                <div className="glass-effect rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neon-cyan group-hover:text-white transition-colors">
                        {exp.role}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} to-neon-blue bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-foreground/60 whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 mb-6">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-neon-cyan">Key Achievements:</p>
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-4 h-4 text-neon-cyan mt-1 flex-shrink-0" />
                        <p className="text-sm text-foreground/70">{resp}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
