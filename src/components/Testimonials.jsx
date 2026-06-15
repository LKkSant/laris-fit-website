export default function Testimonials() {
  const testimonials = [
    {
      nome: "Ana Paula",
      texto:
        "As marmitas da LarisFit facilitaram minha dieta e são deliciosas."
    },
    {
      nome: "Carlos Henrique",
      texto:
        "Excelente custo-benefício e entrega sempre pontual."
    },
    {
      nome: "Juliana Silva",
      texto:
        "Perdi peso mantendo uma alimentação equilibrada."
    }
  ];

  return (
    <section className="bg-orange-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <p className="text-gray-600 italic">
                "{item.texto}"
              </p>

              <h4 className="font-bold mt-6 text-green-600">
                {item.nome}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}