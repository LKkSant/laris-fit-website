import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function navbar() {
  const [open, setOpen] = useState(false);

// 👇 valores padrão para não quebrar o app
  const valorTotal = 0;
  const totalMarmitas = 0;

  const finalizarPedido = () => {
    alert("Carrinho ainda não implementado.");
  };

  return (
    <header className="bg-[#FFF8F0]/95 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="flex justify-between items-center">

          {/* Logo */}
          <img src={logo} alt="Laris Fit" className="h-20 md:h-28 w-auto" />

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#inicio" className="hover:text-orange-500 transition">Início</a>
            <a href="#cardapio" className="hover:text-orange-500 transition">Cardápio</a>
            <a href="#planos" className="hover:text-orange-500 transition">Planos</a>
            <a href="#contato" className="hover:text-orange-500 transition">Contato</a>
          </nav>

          {/* Botão Desktop */}
          <a
            href="https://wa.me/5514974008094"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block bg-green-600 text-white px-5 py-3 rounded-full hover:bg-green-700 transition"
          >
            Peça Agora
          </a>

          {/* Botão Mobile */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X size={32} /> : <Menu size={32} />}
          </button>

        </div>

        {/* Menu Mobile */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-6 font-medium">
            <a href="#inicio" onClick={() => setOpen(false)}>Início</a>
            <a href="#cardapio" onClick={() => setOpen(false)}>Cardápio</a>
            <a href="#planos" onClick={() => setOpen(false)}>Planos</a>
            <a href="#contato" onClick={() => setOpen(false)}>Contato</a>

            <a
              href="https://wa.me/5514974008094"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 text-white text-center py-3 rounded-full"
            >
              Peça Agora
            </a>
          </div>
        )}
      
      {/* Barra inferior mobile (SEGURA agora) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 md:hidden z-50">
        <div className="flex justify-between items-center">

          <div>
            <p className="text-sm text-gray-500">Total</p>
            <p className="font-bold text-green-600">
              R$ {valorTotal.toFixed(2)}
            </p>
          </div>

          <button
            disabled={totalMarmitas < 5}
            onClick={finalizarPedido}
            className={`px-5 py-3 rounded-full text-white font-bold ${
              totalMarmitas >= 5 ? "bg-green-600" : "bg-gray-400"
            }`}
          >
            Finalizar
          </button>

        </div>
</div>

      </div>
    </header>
  );
}