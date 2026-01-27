import { BarChart3, Database, Workflow, LineChart } from "lucide-react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Dados & BI",
    skills: ["Power BI", "SQL", "Python", "Excel Avançado", "Metabase", "DataViz"],
  },
  {
    icon: Workflow,
    title: "ETL & Integração",
    skills: ["ETL via SQL", "Python Pipelines", "Google Sheets", "APIs REST", "Supermetrics"],
  },
  {
    icon: Database,
    title: "CRM & ERP",
    skills: ["SAP", "Zoho CRM", "N-ERP", "ERPs Corporativos", "Automação"],
  },
  {
    icon: LineChart,
    title: "Analytics & KPIs",
    skills: ["Google Analytics", "Adobe Analytics", "GTM", "Métricas de Marketing", "Relatórios"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <h2 className="section-title mb-4">Habilidades Técnicas</h2>
        <p className="text-muted-foreground mb-12 text-lg max-w-2xl">
          Tecnologias e ferramentas que utilizo para transformar dados em insights
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-5 h-5 text-primary-glow" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
