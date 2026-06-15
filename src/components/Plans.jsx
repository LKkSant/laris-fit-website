export default function Plans() {
  const plans = [
    {
      nome: "Starter",
      quantidade: "5 Marmitas",
      preco: "R$ 89,90",
      destaque: false,
    },
    {
      nome: "Fitness",
      quantidade: "10 Marmitas",
      preco: "R$ 169,90",
      destaque: true,
    },
    {
      nome: "Premium",
      quantidade: "20 Marmitas",
      preco: "R$ 319,90",
      destaque: false,
    },
  ];

  return (
    <section id="planos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold uppercase">
            Planos
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Escolha o plano ideal
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                rounded-3xl p-8 shadow-lg text-center
                ${
                  plan.destaque
                    ? "bg-green-600 text-white scale-105"
                    : "bg-white"
                }
              `}
            >
              <h3 className="text-2xl font-bold">
                {plan.nome}
              </h3>

              <p className="mt-4 text-lg">
                {plan.quantidade}
              </p>

              <div className="text-4xl font-bold mt-6">
                {plan.preco}
              </div>

              <button
                className={`
                  mt-8 px-8 py-3 rounded-full font-semibold
                  ${
                    plan.destaque
                      ? "bg-orange-500 text-white"
                      : "bg-green-600 text-white"
                  }
                `}
              >
                Escolher Plano
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}