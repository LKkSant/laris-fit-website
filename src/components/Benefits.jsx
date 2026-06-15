import {
  Truck,
  Leaf,
  Clock3,
  Dumbbell,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Truck size={45} />,
      title: "Entrega Rápida",
      description:
        "Receba suas refeições com agilidade e praticidade.",
    },
    {
      icon: <Leaf size={45} />,
      title: "Ingredientes Frescos",
      description:
        "Preparadas diariamente com ingredientes selecionados.",
    },
    {
      icon: <Clock3 size={45} />,
      title: "Economize Tempo",
      description:
        "Mais praticidade para sua rotina corrida.",
    },
    {
      icon: <Dumbbell size={45} />,
      title: "Resultados Reais",
      description:
        "Nutrição adequada para seus objetivos fitness.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">

<div className="container mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Benefícios
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Por que escolher a LarisFit?
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Alimentação saudável, prática e saborosa para
            transformar sua rotina.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  mx-auto
                  text-green-600
                  mb-6
                "
              >
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}