
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black text-white">
      <div className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-white p-8 rounded-lg text-black">
            <h3 className="text-2xl font-bold mb-4">Contato via whatsapp</h3>
            <p className="text-gray-600 mb-8">
              Responderemos sua mensagem no tempo mais breve possível.
            </p>
            <a 
              href="https://wa.me/5567984093752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              CLIQUE PARA ENVIAR MENSAGEM
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-2">ENDEREÇO</h4>
              <p className="text-white/80">
                R. José Dibo, 63<br />
                Jardim dos Estados<br />
                Campo Grande MS
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">HORÁRIO DE ATENDIMENTO</h4>
              <p className="text-white/80">
                Segunda à sexta<br />
                8h às 18h
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">CONTACT</h4>
              <div className="space-y-2 text-white/80">
                <p>
                  <a 
                    href="mailto:william@projerb.com.br"
                    className="hover:text-white transition-colors"
                  >
                    william@projerb.com.br
                  </a>
                </p>
                <p>
                  <a 
                    href="tel:+556798409-3752"
                    className="hover:text-white transition-colors"
                  >
                    (67)98409-3752
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
