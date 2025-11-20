import { Github, BarChart3, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description:
      "A PowerBI dashboard that transforms raw sales data from a global pharmaceutical manufacturer into insights on sales team performance, customer patterns, and distributor activity.",
    tags: ["Power BI", "SQL", "Data Visualization"],
    image: "/exec-summary-page.png", // Stored in /public
    github: "https://github.com/aryansingh2206/Sales-Performance-Dashboard",
    dashboard:
      "https://app.powerbi.com/view?r=eyJrIjoiMTQ1YjJiODctNmJjMS00NGYwLWFjMWEtNGE5YzdkYWUyYzIwIiwidCI6ImFlZDI3MWNkLTYzOTgtNDllZi1hOWNmLTQ4NDIyMTAxZTE0ZSIsImMiOjEwfQ%3D%3D",
  },
  {
    id: 2,
    title: "Sales Insights Analysis",
    description:
      "Deliver an interactive Power BI dashboard that highlights essential e-commerce performance metrics and trends. Analyze sales patterns, anticipate future movements, and craft data-driven strategies to support business growth.",
    tags: ["SQL", "Tableau", "Statistics"],
    image: "/dashboard file.png",
    github: "https://github.com/aryansingh2206/Customer-Segmentation-Model",
    dashboard: "https://github.com/aryansingh2206/Customer-Segmentation-Model/blob/main/dashboard%20file.png?raw=true",
  },
  {
    id: 3,
    title: "Inventory Optimization Analysis",
    description:
      "Inventory Optimization Analysis explores historical demand, lead times, and SKU performance to reduce stock-outs and minimize excess inventory. The project uses ABC classification, demand forecasting, and optimized reorder points to improve supply chain efficiency and lower holding costs.",
    tags: ["SQL", "Python", "Power BI"],
    image: "/Screenshot 2025-11-20 133235.png",
    github: "https://github.com/aryansingh2206/Inventory-Optimization-Analysis",
    dashboard: "https://github.com/aryansingh2206/Inventory-Optimization-Analysis/blob/main/Screenshot%202025-11-20%20133235.png?raw=true",
  },
  {
    id: 4,
    title: "Customer Purchase Behavior Analysis",
    description:
      "Analyzed customer purchase behavior to uncover demand patterns, enabling more accurate inventory planning and cost-efficient stock management. The insights helped reduce excess inventory, improve product availability, and optimize purchasing decisions.",
    tags: ["Python", "SQL", "Excel"],
    image: "/-power-bi-dashboard-customer-shopping-behavior-v0-k9ms16zrx27f1.png",
    github: "https://github.com/aryansingh2206/Customer-Purchase-Behavior-Analysis",
    dashboard: "https://github.com/aryansingh2206/Customer-Purchase-Behavior-Analysis/blob/main/-power-bi-dashboard-customer-shopping-behavior-v0-k9ms16zrx27f1.png?raw=true",
  },
  {
    id: 5,
    title: "In-Demand Job Skills Analysis",
    description:
      "This project analyzes trending job skills across multiple roles and industries using real-world job posting data. The goal is to identify the most in-demand technical and soft skills, understand how skill requirements vary by job category, and highlight emerging trends for career planning and recruitment insights.",
    tags: ["Python", "Statistics", "SQL"],
    image: "/in demand skills bi.png",
    github: "https://github.com/aryansingh2206/In-Demand-Job-Skills-Analysis",
    dashboard: "https://github.com/aryansingh2206/In-Demand-Job-Skills-Analysis/blob/main/in%20demand%20skills%20bi.png?raw=true",
  },
  {
    id: 6,
    title: "Financial KPI Tracker",
    description:
      "A live financial dashboard built using Python and Excel to track budget vs. actuals, cost deviations, and monthly KPIs across departments, with interactive visuals hosted in Google Colab. It also features automated scripts for department-wise report generation and email simulation.",
    tags: ["SQL", "Excel", "Power BI"],
    image: "/image.png",
    github: "https://github.com/aryansingh2206/Financial-KPI-Tracker",
    dashboard: "https://github.com/aryansingh2206/Financial-KPI-Tracker/blob/main/financial%20kpi.PNG?raw=true",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group glass-effect rounded-xl overflow-hidden hover:border-neon-cyan/80 transition-all duration-300 hover:shadow-glow-cyan flex flex-col"
            >
              {/* Project Image */}
              <div className="h-40 relative overflow-hidden border-b border-white/10 bg-cover bg-center">
                {project.image.startsWith("bg-") ? (
                  <div className={`${project.image} w-full h-full`} />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                  <div className="text-white/70 text-5xl">
                    <BarChart3 />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-neon-cyan mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-foreground/70 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  
                  <a
                    href={project.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-foreground/60 hover:text-neon-cyan transition-colors"
                  >
                    <ExternalLink size={16} />
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
