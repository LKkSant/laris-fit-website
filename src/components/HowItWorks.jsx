import { ShoppingCart, MessageCircle, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <ShoppingCart size={50} />,
      title: "Escolha suas Marmitas",
      description: "Navegue pelo cardápio e escolha as refeições ideais."
    },
    {
      icon: <MessageCircle size={50} />,
      title: "Faça o Pedido",
      description: "Entre em contato pelo WhatsApp e finalize seu pedido."
    },
    {
      icon: <Truck size={50} />,
      title: "Receba em Casa",
      description: "Entregamos suas marmitas prontas para consumir."
    }
  ];

  return (
    <section className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Como Funciona
          </h2>

          <p className="text-gray-500 mt-4">
            Em apenas 3 passos você garante sua alimentação saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-center"
            >
              <div className="text-green-600 flex justify-center mb-6">
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-500">
                {step.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}