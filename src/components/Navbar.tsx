
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/9f5e3fc7-fd07-497c-a386-ca1e45568066.png"
                alt="PROJERB"
                className="h-24"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#sobre"
              onClick={(e) => scrollToSection(e, 'sobre')}
              className="font-citrine text-primary hover:text-accent transition-colors uppercase text-sm tracking-wider"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              onClick={(e) => scrollToSection(e, 'servicos')}
              className="font-citrine text-primary hover:text-accent transition-colors uppercase text-sm tracking-wider"
            >
              Serviços
            </a>
            <a
              href="#clientes"
              onClick={(e) => scrollToSection(e, 'clientes')}
              className="font-citrine text-primary hover:text-accent transition-colors uppercase text-sm tracking-wider"
            >
              Clientes
            </a>
          </div>

          {/* Contact Button */}
          <div>
            <a
              href="#contato"
              onClick={(e) => scrollToSection(e, 'contato')}
              className="font-citrine inline-flex items-center px-4 py-2 border border-transparent text-sm rounded-md text-white bg-primary hover:bg-primary/90 transition-colors tracking-wider"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
