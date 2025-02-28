
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="font-citrine text-sm">
          © {currentYear} Projerb Engenharia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
