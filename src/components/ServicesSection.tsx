import { GraduationCap, LayoutDashboard, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Treinamento Online",
    subtitle: "Formação em Power BI",
    description: "Formação completa em Power BI do básico ao avançado. Aprenda a criar dashboards profissionais e transformar dados em insights.",
    features: ["Aulas práticas", "Projetos reais", "Suporte dedicado"],
  },
  {
    icon: LayoutDashboard,
    title: "Desenvolvimento de Dashboards",
    subtitle: "Soluções Personalizadas",
    description: "Criação de dashboards personalizados e automatizados para sua empresa. Do planejamento à implementação completa.",
    features: ["Design moderno", "Automatização", "Manutenção inclusa"],
  },
  {
    icon: Users,
    title: "Consultoria em Dados",
    subtitle: "Estratégia e Processos",
    description: "Assessoria especializada para implementar cultura de dados na sua empresa e otimizar processos de tomada de decisão.",
    features: ["Diagnóstico", "Planejamento", "Acompanhamento"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container relative z-10">
        <h2 className="section-title mb-4">Como posso te ajudar</h2>
        <p className="text-muted-foreground mb-12 text-lg max-w-2xl">
          Serviços especializados para impulsionar sua jornada com dados
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-300 flex flex-col glow-effect"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary-glow" />
              </div>
              
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-glow mb-2">
                {service.subtitle}
              </span>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant="ghost"
                className="w-full justify-between text-foreground hover:text-primary-glow hover:bg-primary/5 group/btn"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
