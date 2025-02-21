
import { Link } from "react-router-dom";

const Navbar = () => {
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
                className="h-8"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/sobre"
              className="text-primary hover:text-accent transition-colors uppercase text-sm font-medium"
            >
              Sobre
            </Link>
            <Link
              to="/clientes"
              className="text-primary hover:text-accent transition-colors uppercase text-sm font-medium"
            >
              Clientes
            </Link>
            <Link
              to="/servicos"
              className="text-primary hover:text-accent transition-colors uppercase text-sm font-medium"
            >
              Serviços
            </Link>
            <Link
              to="/noticias"
              className="text-primary hover:text-accent transition-colors uppercase text-sm font-medium"
            >
              Notícias
            </Link>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              to="/contato"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
