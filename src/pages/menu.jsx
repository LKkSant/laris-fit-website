import { useState } from "react";

export default function Menu() {
  const [items, setItems] = useState([
    {
      id: 1,
      categoria: "Frango",
      nome: "Parmegiana Low Carb",
      descricao: "Hambúrguer artesanal de frango, molho de tomate e brócolis refogado",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800",
    },
    {
      id: 2,
      categoria: "Frango",
      nome: "Parmegiana",
      descricao: "Hambúrguer artesanal de frango, molho de tomate e arroz branco",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
    },
    {
      id: 3,
      categoria: "Frango",
      nome: "Panqueca de Frango",
      descricao: "Massa integral, frango desfiado com molho de tomate",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    },
    {
      id: 4,
      categoria: "Frango",
      nome: "Escondidinho de Frango",
      descricao: "Frango desfiado com purê de mandioca e muçarela",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    },
    {
      id: 5,
      categoria: "Frango",
      nome: "Frango e Batata Doce",
      descricao: "Frango desfiado, purê de batata doce e couve refogada",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800",
    },
    {
      id: 6,
      categoria: "Frango",
      nome: "Frango e Batata",
      descricao: "Frango desfiado, batata assada e brócolis refogado",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
    },
    {
      id: 7,
      categoria: "Frango",
      nome: "Frango e Arroz",
      descricao: "Frango desfiado, arroz branco e brócolis refogado",
      preco: 16,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800",
    },
    {
      id: 8,
      categoria: "Carne Vermelha",
      nome: "PF de Carne",
      descricao: "Patinho moído, arroz branco, feijão e mix de legumes",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    },
    {
      id: 9,
      categoria: "Carne Vermelha",
      nome: "Panqueca de Carne",
      descricao: "Massa integral, patinho moído com molho de tomate",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    },
    {
      id: 10,
      categoria: "Carne Vermelha",
      nome: "Iscas de Carne",
      descricao: "Iscas de patinho com purê de abóbora cabotiá",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800",
    },
    {
      id: 11,
      categoria: "Carne Vermelha",
      nome: "Carne e Batata Doce",
      descricao: "Patinho moído, purê de batata doce e couve refogada",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
    },
    {
      id: 12,
      categoria: "Carne Vermelha",
      nome: "Carne e Batata",
      descricao: "Patinho moído, batata assada e brócolis refogado",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1558030006-450675393462?w=800",
    },
    {
      id: 13,
      categoria: "Carne Vermelha",
      nome: "Carne e Arroz",
      descricao: "Patinho moído, arroz branco e brócolis refogado",
      preco: 17,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800",
    },
    {
      id: 14,
      categoria: "Peixe",
      nome: "Peixe e Purê",
      descricao: "Filé de peixe grelhado com purê de batata inglesa",
      preco: 19,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
    },
    {
      id: 15,
      categoria: "Peixe",
      nome: "Peixe e Legumes",
      descricao: "Filé de peixe grelhado, molho de limão e mix de legumes",
      preco: 19,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1559847844-d721426d6edc?w=800",
    },
    {
      id: 16,
      categoria: "Peixe",
      nome: "Peixe e Batata",
      descricao: "Filé de peixe grelhado, batata assada e brócolis refogado",
      preco: 19,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    },
    {
      id: 17,
      categoria: "Peixe",
      nome: "Peixe e Arroz",
      descricao: "Filé de peixe grelhado, arroz branco e brócolis refogado",
      preco: 19,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800",
    },
    {
      id: 18,
      categoria: "Lanches Fit",
      nome: "Coxinha de Frango",
      descricao: "Massa de mandioca, frango desfiado e requeijão light",
      preco: 20,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800",
    },
    {
      id: 19,
      categoria: "Lanches Fit",
      nome: "Croquete de Carne",
      descricao: "Massa de mandioca, patinho moído empanado com flocos de milho",
      preco: 20,
      quantidade: 0,
      imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    },
  ]);

  const [observacao, setObservacao] = useState("");
  const [personalizado, setPersonalizado] = useState(false);
  const [formPersonalizado, setFormPersonalizado] = useState({
    nome: "",
    objetivo: "",
    restricoes: "",
    observacoes: "",
  });

  const categorias = ["Frango", "Carne Vermelha", "Peixe", "Lanches Fit"];

  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    endereco: "",
  });

  const alterarQuantidade = (id, valor) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(0, item.quantidade + valor) }
          : item
      )
    );
  };

  const totalMarmitas = items.reduce((acc, item) => acc + item.quantidade, 0);
  const valorTotal = items.reduce((acc, item) => acc + item.quantidade * item.preco, 0);

  const finalizarPedido = () => {
    const pedido = items
      .filter((item) => item.quantidade > 0)
      .map((item) => `• ${item.nome} x${item.quantidade}`)
      .join("\n");

    const mensagem = `
🍽️ NOVO PEDIDO LARISFIT

👤 Cliente:
${cliente.nome}

📞 Telefone:
${cliente.telefone}

📍 Endereço:
${cliente.endereco}

--------------------------------

${pedido}

--------------------------------

🥘 Total de Marmitas: ${totalMarmitas}

💰 Valor Total: R$ ${valorTotal.toFixed(2)}

📝 Observações:
${observacao || "Nenhuma"}
`;

    // CORRIGIDO: Trocado o caractere '"' por '?' no link do WhatsApp
    const url = `https://wa.me/5514974008094?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-orange-50 py-12 px-6">
      {/* Cabeçalho do Menu */}
      <h1 className="text-5xl font-bold text-center mb-3">Monte seu Pedido</h1>
      <p className="text-center text-red-500 font-semibold mb-10">
        Pedido mínimo: 5 marmitas
      </p>

      {/* Seção Cardápio Personalizado */}
      <div className="mb-10 max-w-7xl mx-auto">
        <button
          onClick={() => setPersonalizado(!personalizado)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-2xl font-bold w-full md:w-auto"
        >
          📋 Quero um Cardápio Personalizado
        </button>
        
        {personalizado && (
          <div className="bg-white p-8 rounded-3xl shadow-lg mb-12 mt-4">
            <h2 className="text-2xl font-bold mb-6">Cardápio Personalizado</h2>
            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="border p-3 rounded-xl"
                value={formPersonalizado.nome}
                onChange={(e) =>
                  setFormPersonalizado({ ...formPersonalizado, nome: e.target.value })
                }
              />
              <select
                className="border p-3 rounded-xl"
                value={formPersonalizado.objetivo}
                onChange={(e) =>
                  setFormPersonalizado({ ...formPersonalizado, objetivo: e.target.value })
                }
              >
                <option value="">Selecione seu objetivo</option>
                <option>Emagrecimento</option>
                <option>Hipertrofia</option>
                <option>Manutenção</option>
              </select>
              <textarea
                rows="3"
                placeholder="Restrições alimentares"
                className="border p-3 rounded-xl"
                value={formPersonalizado.restricoes}
                onChange={(e) =>
                  setFormPersonalizado({ ...formPersonalizado, restricoes: e.target.value })
                }
              />
              <textarea
                rows="4"
                placeholder="Observações adicionais"
                className="border p-3 rounded-xl"
                value={formPersonalizado.observacoes}
                onChange={(e) =>
                  setFormPersonalizado({ ...formPersonalizado, observacoes: e.target.value })
                }
              />
              <button
                onClick={() => {
                  const mensagemPersonalizada = `Olá, gostaria de solicitar um Cardápio Personalizado.\n\nNome: ${formPersonalizado.nome}\nObjetivo: ${formPersonalizado.objetivo}\nRestrições: ${formPersonalizado.restricoes}\nObservações: ${formPersonalizado.observacoes}`;
                  window.open(
                    `https://wa.me/5514974008094?text=${encodeURIComponent(mensagemPersonalizada)}`,
                    "_blank"
                  );
                }}
                className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold"
              >
                Solicitar pelo WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CORRIGIDO: Estrutura do Grid Principal englobando os itens e o carrinho */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
        
        {/* Coluna das Marmitas */}
        <div className="lg:col-span-3">
          {categorias.map((categoria) => (
            <div key={categoria} className="mb-14">
              <h2 className="text-3xl font-bold text-green-700 mb-6">
                {categoria === "Frango" && "🍗 "}
                {categoria === "Carne Vermelha" && "🥩 "}
                {categoria === "Peixe" && "🐟 "}
                {categoria === "Lanches Fit" && "🥪 "}
                {categoria}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items
                  .filter((item) => item.categoria === categoria)
                  .map((item) => (
                    <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col justify-between p-4">
                      
                      {/* CORRIGIDO: Adicionada a Tag de Imagem com Tailwind */}
                      <img 
                        src={item.imagem} 
                        alt={item.nome} 
                        className="w-full h-44 object-cover rounded-2xl mb-4"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold">{item.nome}</h3>
                          <p className="text-gray-500 mt-2 text-sm">{item.descricao}</p>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                          <span className="text-green-600 font-bold">
                            R$ {item.preco.toFixed(2)}
                          </span>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => alterarQuantidade(item.id, -1)}
                              className="bg-red-500 text-white w-8 h-8 rounded-full font-bold"
                            >
                              -
                            </button>
                            <span className="font-bold">{item.quantidade}</span>
                            <button
                              onClick={() => alterarQuantidade(item.id, 1)}
                              className="bg-green-600 text-white w-8 h-8 rounded-full font-bold"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coluna Lateral do Carrinho (Fica grudada na lateral direita no desktop) */}
        <aside className="lg:sticky lg:top-24 h-fit bg-white p-6 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6">Seu Pedido</h2>

          {items.filter((item) => item.quantidade > 0).length === 0 ? (
            <p className="text-gray-500">Nenhuma marmita selecionada</p>
          ) : (
            <div className="space-y-3">
              {items
                .filter((item) => item.quantidade > 0)
                .map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.nome}</span>
                    <span className="font-bold">x{item.quantidade}</span>
                  </div>
                ))}
            </div>
          )}

          <hr className="my-6" />

          <p className="font-semibold text-sm">
            Total de Marmitas: <span className="ml-2 font-bold">{totalMarmitas}</span>
          </p>
          <p className="font-semibold mt-2 text-sm">
            Valor: <span className="ml-2 text-green-600 font-bold">R$ {valorTotal.toFixed(2)}</span>
          </p>

          <div className="space-y-3 mt-6">
            <input
              type="text"
              placeholder="Seu Nome"
              className="w-full border p-3 rounded-xl text-sm"
              value={cliente.nome}
              onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
            />
            <input
              type="text"
              placeholder="Telefone"
              className="w-full border p-3 rounded-xl text-sm"
              value={cliente.telefone}
              onChange={(e) => setCliente({ ...cliente, telefone: e.target.value })}
            />
            <input
              type="text"
              placeholder="Endereço de Entrega"
              className="w-full border p-3 rounded-xl text-sm"
              value={cliente.endereco}
              onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
            />
          </div>

          <div className="mt-6">
            <label className="block font-semibold mb-2 text-sm">Observações</label>
            <textarea
              value={observacao}
              onChange={(e) => setObservacao(e.target.value)}
              placeholder="Ex: sem cebola, entregar após 18h..."
              rows={3}
              className="w-full border rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            disabled={totalMarmitas < 5}
            onClick={finalizarPedido}
            className={`w-full mt-6 py-3 rounded-xl text-white font-bold transition-all ${
              totalMarmitas >= 5
                ? "bg-green-600 hover:bg-green-700 shadow-md"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Finalizar Pedido
          </button>

          {totalMarmitas < 5 && (
            <p className="text-xs text-red-500 mt-3 text-center font-medium">
              🛒 Falta só mais {5 - totalMarmitas} para atingir o mínimo!
            </p>
          )}
        </aside>

      </div>
    </div>
  );
}