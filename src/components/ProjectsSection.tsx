import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, TrendingUp, Package, DollarSign, ShoppingCart, FolderKanban } from "lucide-react";

const projects = [
  {
    icon: Package,
    title: "Dashboard Logística",
    description: "Painel completo para gestão logística com indicadores de performance de entregas, rotas otimizadas e controle de frota.",
    tools: ["Power BI", "SQL", "Excel"],
    link: "#",
  },
  {
    icon: TrendingUp,
    title: "Dashboard Marketing",
    description: "Análise de campanhas, ROI de marketing, funil de conversão e métricas de engajamento em tempo real.",
    tools: ["Power BI", "Google Analytics", "SQL"],
    link: "#",
  },
  {
    icon: BarChart3,
    title: "Dashboard Estoque",
    description: "Controle de inventário, previsão de demanda, alertas de reposição e análise de giro de produtos.",
    tools: ["Power BI", "SQL", "DAX"],
    link: "#",
  },
  {
    icon: DollarSign,
    title: "Dashboard Financeiro",
    description: "Demonstrativos financeiros, fluxo de caixa, análise de receitas e despesas com projeções futuras.",
    tools: ["Power BI", "Excel", "SQL"],
    link: "#",
  },
  {
    icon: ShoppingCart,
    title: "Dashboard Compras",
    description: "Gestão de fornecedores, análise de custos, performance de compras e negociações estratégicas.",
    tools: ["Power BI", "SAP", "SQL"],
    link: "#",
  },
  {
    icon: FolderKanban,
    title: "Dashboard Projetos",
    description: "Acompanhamento de projetos, cronogramas, alocação de recursos e indicadores de progresso.",
    tools: ["Power BI", "Excel", "ETL"],
    link: "#",
  },
];

const toolColors: Record<string, string> = {
  "Power BI": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "SQL": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Excel": "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  "DAX": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Google Analytics": "bg-red-500/20 text-red-400 border-red-500/30",
  "SAP": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "ETL": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-4">Projetos Desenvolvidos</h2>
        <p className="text-muted-foreground mb-12 text-lg max-w-2xl">
          Explore alguns projetos que já desenvolvi para diferentes áreas de negócio
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary/15 to-secondary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                <project.icon className="w-16 h-16 text-primary/30 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                {/* Tool badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md border ${toolColors[tool] || 'bg-secondary text-muted-foreground'}`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2">
                    Ver detalhes
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
