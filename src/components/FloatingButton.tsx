import { LineChart } from "lucide-react";

const FloatingButton = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href="#projetos"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-full shadow-lg glow-effect transition-all duration-300 hover:scale-105"
    >
      <LineChart className="w-5 h-5" />
      <span className="hidden sm:inline">Ver Projetos</span>
    </a>
  );
};

export default FloatingButton;
