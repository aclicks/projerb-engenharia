
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="bg-[#334866] text-white">
      <div className="text-center py-16">
        <h2 className="text-4xl md:text-5xl font-citrine font-bold" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>Contato</h2>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="bg-white p-6 rounded-lg text-black flex flex-col justify-between h-[200px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">Contato via whatsapp</h3>
              <p className="text-gray-600 mb-6">
                Responderemos sua mensagem no tempo mais breve possível.
              </p>
            </div>
            <a 
              href="https://wa.me/5567984093752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#1da851] transition-colors self-start"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="font-citrine font-bold">CLIQUE PARA ENVIAR MENSAGEM</span>
            </a>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h4 className="font-citrine font-bold text-lg mb-2" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>ENDEREÇO</h4>
              <p className="text-white/80">
                R. José Dibo, 63<br />
                Jardim dos Estados<br />
                Campo Grande MS
              </p>
            </div>

            <div>
              <h4 className="font-citrine font-bold text-lg mb-2" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>HORÁRIO DE ATENDIMENTO</h4>
              <p className="text-white/80">
                Segunda à sexta<br />
                8h às 18h
              </p>
            </div>

            <div>
              <h4 className="font-citrine font-bold text-lg mb-2" style={{ fontFamily: "citrine-variable", fontVariationSettings: '"wght" 700' }}>CONTATO</h4>
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
      <div className="bg-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img
              src="/lovable-uploads/73f93941-e961-4e0b-85e2-3bb5619b8803.png"
              alt="PROJERB"
              className="h-16"
            />
            <p className="text-sm text-gray-600">
              Projerb Engenharia - R. José Dibo, 63 - Jardim dos Estados - Campo Grande - MS | {' '}
              <a 
                href="mailto:william@projerb.com.br"
                className="hover:text-gray-900 transition-colors"
              >
                william@projerb.com.br
              </a> | {' '}
              <a 
                href="tel:+556798409-3752"
                className="hover:text-gray-900 transition-colors"
              >
                (67)98409-3752
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
