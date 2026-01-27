import { useState } from "react";
import { GraduationCap, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "Pós-Graduação em Análise de Dados",
    institution: "DESCOMPLICA",
    period: "Cursando",
    type: "Pós-graduação",
  },
  {
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNINTER",
    period: "2023 – 2025",
    type: "Graduação",
  },
  {
    degree: "Bacharelado em Ciências Contábeis",
    institution: "Faculdade Católica do RN",
    period: "2020 – 2023",
    type: "Graduação",
  },
  {
    degree: "Técnico em Petróleo e Gás",
    institution: "SENAI",
    period: "2017 – 2018",
    type: "Técnico",
  },
];

const certifications = [
  { name: "SQL na Prática", institution: "CISS S.A.", year: "2025", hours: "6h" },
  { name: "Machine Learning", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Big Data", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Banco de Dados Relacional", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Banco de Dados NoSQL", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Métodos Ágeis", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Computação em Nuvem", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Estrutura de Dados", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Matemática Aplicada à Computação", institution: "UNINTER", year: "2025", hours: "60h" },
  { name: "Introdução a Banco de Dados", institution: "Digital Innovation One", year: "2024", hours: "3h" },
  { name: "Modelagem de Dados para Banco de Dados", institution: "Digital Innovation One", year: "2024", hours: "2h" },
  { name: "Contabilidade na Prática", institution: "Raro Assessoria Contábil", year: "2023", hours: "100h" },
  { name: "Fortes Contábil", institution: "Fortes Tecnologia", year: "2022", hours: "3h 30m" },
  { name: "Pacote Office Avançado", institution: "Fundação Bradesco", year: "2020", hours: "58h" },
];

const EducationSection = () => {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, 6);

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Formação Acadêmica</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="glass-card p-6 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1 inline-block">
                    {edu.type}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="section-title mb-8 text-2xl">
          <BookOpen className="w-6 h-6 text-primary-glow" />
          Cursos e Certificações
        </h3>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedCerts.map((cert) => (
            <div
              key={cert.name}
              className="glass-card p-5 group hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display font-semibold text-foreground text-sm leading-tight">
                  {cert.name}
                </h4>
                <span className="text-xs text-accent font-medium ml-2 flex-shrink-0">
                  {cert.hours}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{cert.institution}</p>
              <p className="text-xs text-muted-foreground/70 mt-1">{cert.year}</p>
            </div>
          ))}
        </div>

        {/* Ver mais button */}
        {certifications.length > 6 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            >
              {showAllCerts ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-2" />
                  Ver menos
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-2" />
                  Ver mais ({certifications.length - 6} certificações)
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducationSection;
