import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2025",
    logo: "📊", // Represents analytics
    link: "https://www.coursera.org/account/accomplishments/specialization/SZQQ6OAGOLC2",
    skills: ["SQL", "Spreadsheets", "R Programming", "Data Cleaning", "Dashboarding"],
  },
  {
    id: 2,
    name: "Microsoft Power BI Data Analyst (PL-300)",
    issuer: "Microsoft",
    date: "2025",
    logo: "📈", // Represents BI dashboards
    link: "https://www.coursera.org/account/accomplishments/specialization/GWK4Q26HUH7D",
    skills: ["Power BI", "Data Modeling", "DAX", "ETL", "Data Visualization"],
  },
  {
    id: 3,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    logo: "☁️", // Cloud-specific
    link: "https://www.credly.com/badges/8e458af1-7619-4d19-9fe6-68f17cdc8bfd/linked_in_profile",
    skills: ["AWS Core Services", "Cloud Architecture Basics", "IAM & Security", "Cost Optimization"],
  },
  {
    id: 4,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2025",
    logo: "🛠️", // Architecture / engineering
    link: "https://www.credly.com/badges/3d7e549e-40ef-4b99-b473-63caec084dbd/linked_in_profile",
    skills: ["Solution Architecture", "EC2, S3, IAM, VPC", "Load Balancing", "Scalability & Resilience"],
  },
  {
    id: 5,
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "2025",
    logo: "🤖", // AI-focused
    link: "https://learn.microsoft.com/en-us/users/aryansingh-9958/credentials/4e0c818efb9418ba?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    skills: ["Cognitive Services", "Vision & NLP Models", "Azure ML Studio", "Model Deployment"],
  },
  {
    id: 6,
    name: "Google Business Intelligence Professional Certificate",
    issuer: "Google",
    date: "2025",
    logo: "📉", // Business reporting
    link: "https://www.coursera.org/account/accomplishments/specialization/G0DCXPCB6239",
    skills: ["BI Strategy", "Dashboard Design", "Data Warehousing", "ETL Pipelines", "Stakeholder Reporting"],
  },
];


export default function CertificationsSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
              Certifications & Credentials
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              className="group glass-effect rounded-xl p-8 hover:border-neon-cyan/80 transition-all duration-300 hover:shadow-glow-cyan flex flex-col"
            >
              {/* Logo */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.logo}
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-neon-cyan mb-2 group-hover:text-white transition-colors">
                {cert.name}
              </h3>
              <p className="text-sm text-foreground/70 mb-2">{cert.issuer}</p>
              <p className="text-xs text-foreground/50 mb-4 font-semibold">{cert.date}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6 flex-1">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan/60 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="flex items-center gap-2 text-neon-cyan text-sm font-semibold group-hover:gap-3 transition-all">
                View Credential
                <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 glass-effect rounded-xl p-8 border-neon-cyan/20 hover:border-neon-cyan/50 transition-all">
          <div className="flex items-start gap-4">
            <Award className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-neon-cyan mb-2">Continuous Learning</h3>
              <p className="text-foreground/70">
                I'm committed to staying at the forefront of data analytics. Currently pursuing advanced certifications in machine learning and cloud data engineering. Active contributor to professional communities and regular attendee of industry conferences and webinars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
