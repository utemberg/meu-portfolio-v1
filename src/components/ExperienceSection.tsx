import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "Gerente de TI / Dados",
    company: "Grupo Nonato",
    period: "Fev/2024 – Atual",
    location: "Mossoró – RN",
    description: "Atuação na análise de dados operacionais e financeiros extraídos do ERP, desenvolvimento de relatórios gerenciais, suporte analítico às áreas de negócio e otimização de processos com base em dados.",
  },
  {
    title: "Analista de Implantação",
    company: "CISS S.A.",
    period: "Fev/2023 – Fev/2024",
    location: "Dois Vizinhos – PR",
    description: "Implantação de ERP em clientes nacionais, integração de dados entre módulos, construção de relatórios analíticos, treinamento de usuários e apoio à tomada de decisão com base em dados.",
  },
  {
    title: "Especialista em Consultoria",
    company: "Fortes Tecnologia",
    period: "Mar/2022 – Fev/2023",
    location: "Mossoró – RN",
    description: "Atuação com dados contábeis, fiscais e financeiros, suporte analítico, geração de obrigações acessórias e treinamento de clientes.",
  },
  {
    title: "Assistente de TI / Dados",
    company: "Grupo Nonato",
    period: "Nov/2020 – Mar/2022",
    location: "Mossoró – RN",
    description: "Suporte a ERP, análise de métricas operacionais, conciliações contábeis, contas a pagar e apoio à gestão com dados integrados.",
  },
];

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Experiência Profissional</h2>
        
        <div className="max-w-4xl">
          <div className="space-y-6">
            {displayedExperiences.map((exp, index) => (
              <div
                key={exp.title + exp.company}
                className="glass-card p-6 md:p-8 group hover:border-primary/40 transition-all duration-300 relative"
              >
                {/* Timeline connector */}
                {index < displayedExperiences.length - 1 && (
                  <div className="absolute left-10 md:left-12 top-full w-0.5 h-6 bg-primary/20" />
                )}
                
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary-glow" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary-glow font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Ver mais button */}
          {experiences.length > 2 && (
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Ver menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Ver mais ({experiences.length - 2} experiências)
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
