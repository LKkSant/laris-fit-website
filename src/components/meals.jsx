import { useNavigate } from "react-router-dom";
export default function Meals() {

    const navigate = useNavigate();
  const meals = [
    {
      id: 1,
      nome: "Frango",
      descricao: "Marmitas com frango, perfeitas para o ganho de massa",
      preco: "R$ 17,00 ",
      imagem:
        "https://plus.unsplash.com/premium_photo-1700061780596-c3555872e2eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      nome: "Carne Vermelha",
      descricao: "Proteína e vegetais selecionados",
      preco: "R$ 18,00 ",
      imagem:
        "https://images.unsplash.com/photo-1633436375795-12b3b339712f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      nome: "Filé de Peixe",
      descricao: "Refeição completa para ganho de massa",
      preco: "R$ 19,00 ",
      imagem:
        "https://plus.unsplash.com/premium_photo-1770678130980-048c6b307d1f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      nome: "Cardápio Personalizado",
      descricao: "Envie seu plano alimentar, montamos conforme sua preferência",
      preco: "R$ 19,00",
      imagem:
        "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: 5,
      nome: "Lanches Fit",
      descricao: "Embalagens com 3 unidades, de um lanche saudavel para o dia a dia",
      preco: "R$ 20,00",
      imagem:
        "https://images.unsplash.com/photo-1723962807917-ffab0600929c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },    
  ];

  return (
    <section
      id="cardapio"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Escolha a sua
        </h2>

        <p className="text-center text-gray-500 mb-12">
          A refeição ideal para sua rotina. 
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={meal.imagem}
                alt={meal.nome}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {meal.nome}
                </h3>

                <p className="text-gray-500 mt-3">
                  {meal.descricao}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-green-600 font-bold text-xl">
                    {meal.preco}
                  </span>

                 <button
  onClick={() => navigate("/cardapio")}
  className="bg-orange-500 text-white px-5 py-2 rounded-full"
>
  Pedir
</button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}