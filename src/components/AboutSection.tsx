import { Briefcase, GraduationCap, Award } from "lucide-react";

const stats = [
  { value: "5+", label: "Anos de Experiência", color: "text-accent" },
  { value: "50+", label: "Dashboards Criados", color: "text-primary-glow" },
  { value: "20+", label: "Clientes Atendidos", color: "text-yellow-400" },
];

const AboutSection = () => {
  return (
    <section id="sobre-mim" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-40" />
      
      <div className="container relative z-10">
        <h2 className="section-title mb-12">Sobre mim</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main description card */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8 h-full">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                Analista de Dados com mais de <span className="text-accent font-bold">5 anos de experiência</span> atuando 
                na interseção entre tecnologia, dados, contabilidade e processos de 
                negócio, com forte vivência em ERPs corporativos, análise financeira 
                e suporte à tomada de decisão.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experiência consolidada na extração, tratamento e análise de dados operacionais e 
                financeiros, utilizando SQL, Power BI, relatórios gerenciais e integração entre 
                módulos de sistemas (compras, vendas, financeiro, controladoria).
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Background em Ciências Contábeis aliado à formação em Análise e Desenvolvimento 
                de Sistemas, permitindo leitura profunda de dados fiscais, financeiros e operacionais, 
                garantindo conformidade, consistência e valor analítico.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                    <span className={`text-3xl md:text-4xl font-display font-bold ${stat.color}`}>
                      {stat.value}
                    </span>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick info cards */}
          <div className="space-y-4">
            <div className="glass-card p-6 group hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Formação</h3>
                  <p className="text-sm text-muted-foreground">Ciências Contábeis</p>
                  <p className="text-xs text-muted-foreground/70">+ Análise de Sistemas</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Cargo Atual</h3>
                  <p className="text-sm text-muted-foreground">Gerente de TI / Dados</p>
                  <p className="text-xs text-muted-foreground/70">Grupo Nonato</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 group hover:border-primary/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">Especialidade</h3>
                  <p className="text-sm text-muted-foreground">Power BI & SQL</p>
                  <p className="text-xs text-muted-foreground/70">ETL & ERP Analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
