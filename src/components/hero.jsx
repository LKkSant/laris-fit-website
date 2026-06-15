import { useNavigate } from "react-router-dom";

export default function hero() {
  const navigate = useNavigate();

  const abrirWhatsApp = () => {
    window.open(
      "https://wa.me/5514974008094?text=Olá! Gostaria de saber mais sobre as marmitas da LarisFit.",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="bg-orange-50 min-h-[80vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Comida de Verdade
            <span className="block text-orange-500">
              Resultados
            </span>
            De Verdade!
          </h2>

          <p className="text-gray-600 text-lg mt-6">
            Marmitas fitness preparadas com ingredientes
            selecionados para ajudar você a alcançar seus objetivos.
            Ser saudável nunca foi tão fácil!
          </p>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() => navigate("/cardapio")}
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition cursor-pointer"
            >
              Ver Cardápio
            </button>

            <button
              onClick={abrirWhatsApp}
              className="border border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition cursor-pointer"


            >
              WhatsApp
            </button>

          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554"
            alt="Marmita Fitness"
            className="rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}