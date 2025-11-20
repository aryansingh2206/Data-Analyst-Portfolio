import { TrendingUp, Zap, Brain, Target } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "E-Commerce Revenue Optimization",
    problem:
      "Large retailer struggling with declining online revenue despite increasing traffic.",
    approach:
      "Conducted comprehensive user journey analysis, identified conversion drop-off points, and tested optimization strategies through A/B testing.",
    insights:
      "Found that 40% of users abandoned carts due to complex checkout process. Discovered peak conversion times by device type.",
    impact: "Increased revenue by 28% within 6 months. ROI of 340% on analytics project.",
    metrics: [
      { label: "Revenue Increase", value: "+28%" },
      { label: "Conversion Rate", value: "+34%" },
      { label: "Time to Implement", value: "3 months" },
    ],
    link: "https://www.notion.so/Online-Retail-Revenue-Optimization-2b1096df3678801ea04dc14d881de515?source=copy_link",
  },
  {
    id: 2,
    title: "SaaS Customer Retention Strategy",
    problem:
      "Monthly churn rate of 8% affecting annual recurring revenue growth targets.",
    approach:
      "Built predictive churn model using customer behavior data, identified at-risk segments, and recommended targeted interventions.",
    insights:
      "Early warning signs appeared 30 days before churn. High-value customers showed different churn patterns. Specific feature adoption correlated with retention.",
    impact: "Reduced churn to 3.5%, generating $2.4M additional ARR within 12 months.",
    metrics: [
      { label: "Churn Reduction", value: "-56%" },
      { label: "ARR Increase", value: "+$2.4M" },
      { label: "Model Accuracy", value: "87%" },
    ],
    link: "https://www.notion.so/Predictive-SaaS-Churn-Reduction-Using-Behavioral-Analytics-2b1096df367880248c4ff0a9382efc64?source=copy_link",
  },
  {
    id: 3,
    title: "Supply Chain Cost Optimization",
    problem:
      "Inefficient inventory management costing company millions in excess stock and missed orders.",
    approach:
      "Analyzed historical demand patterns, created predictive forecasting model, and optimized reorder points across SKU portfolio.",
    insights:
      "Seasonal patterns were stronger than previously thought. 20% of SKUs contributed to 80% of inefficiencies. Regional demand variations were significant.",
    impact: "Reduced inventory costs by 23% while improving fulfillment rates from 92% to 97%.",
    metrics: [
      { label: "Cost Savings", value: "-$1.2M" },
      { label: "Inventory Reduction", value: "-23%" },
      { label: "Fulfillment Rate", value: "+5 pts" },
    ],
    link: "https://www.notion.so/Inventory-Supply-Chain-Optimization-using-Demand-Forecasting-2b1096df36788002aab4f2d1c03b6c8f?source=copy_link",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      
      {/* Background */}
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-neon-cyan to-purple-400 bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-neon-cyan to-purple-400 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group">
              <div className="glass-effect rounded-xl overflow-hidden p-8 md:p-12 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan">

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-neon-cyan mb-8 group-hover:text-white transition-colors">
                  {study.title}
                </h3>

                {/* Problem - Approach - Insights Section */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">

                  {/* Problem */}
                  <div>
                    <h4 className="font-bold text-neon-cyan flex items-center gap-3">
                      <Target className="w-5 h-5" /> Problem
                    </h4>
                    <p className="text-foreground/70 text-sm">{study.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="font-bold text-neon-blue flex items-center gap-3">
                      <Zap className="w-5 h-5" /> Approach
                    </h4>
                    <p className="text-foreground/70 text-sm">{study.approach}</p>
                  </div>

                  {/* Insights */}
                  <div>
                    <h4 className="font-bold text-purple-400 flex items-center gap-3">
                      <Brain className="w-5 h-5" /> Insights
                    </h4>
                    <p className="text-foreground/70 text-sm">{study.insights}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="space-y-4 mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-neon-cyan" />
                    <h4 className="font-bold text-neon-cyan text-lg">Impact</h4>
                  </div>
                  <p className="text-foreground/70">{study.impact}</p>
                </div>

                {/* Notion Button */}
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-purple-400 text-black font-medium hover:opacity-90 transition"
                >
                  View Full Case Study →
                </a>

                {/* Metrics */}
                <div className="grid md:grid-cols-3 gap-4 mt-10">
                  {study.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 border border-neon-cyan/30 text-center hover:border-neon-cyan/60 transition-colors"
                    >
                      <div className="text-2xl font-bold text-neon-cyan mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-foreground/70">{metric.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
