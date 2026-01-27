import { Github, Instagram, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: Github,
    label: "Github",
    value: "github.com/utemberg",
    link: "https://github.com/utemberg",
    color: "hover:border-gray-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "utembergsh@gmail.com",
    link: "mailto:utembergsh@gmail.com",
    color: "hover:border-red-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/utemberg",
    link: "https://www.linkedin.com/in/utemberg/",
    color: "hover:border-blue-400",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@utembergcont",
    link: "https://www.instagram.com/utembergcont/",
    color: "hover:border-pink-400",
  },
];

const ContactSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-40" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title justify-center mb-4">Entre em contato</h2>
            <p className="text-muted-foreground text-lg">
              Vamos conversar sobre como posso ajudar no seu projeto
            </p>
          </div>
          
          {/* Main CTA */}
          <div className="glass-card p-8 mb-8 text-center">
            <MessageCircle className="w-12 h-12 text-primary-glow mx-auto mb-4" />
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
              Tem um projeto em mente?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Entre em contato e vamos transformar seus dados em insights valiosos para o seu negócio.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 glow-effect"
            >
              <a href="mailto:utembergsh@gmail.com" className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Enviar Email
              </a>
            </Button>
          </div>
          
          {/* Contact links grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-5 flex flex-col items-center text-center group transition-all duration-300 ${contact.color}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <contact.icon className="w-6 h-6 text-primary-glow" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1 flex items-center gap-1">
                  {contact.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-xs truncate w-full">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Utemberg Moisés. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <span className="text-red-400">♥</span>
              <span>e muitos dados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
