
const Contact = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">
            Vamos discutir como podemos ajudar com suas necessidades de engenharia
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Assunto"
              className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:border-accent transition-colors"
            />
            <textarea
              placeholder="Mensagem"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-muted focus:outline-none focus:border-accent transition-colors"
            />
            <button type="submit" className="btn-primary w-full">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
