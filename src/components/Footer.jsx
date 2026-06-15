import logo from "../assets/logo.png";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-gray-900 text-white pt-14 pb-24 md:pb-14"
    >
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo */}
        <div className="text-center md:text-left">

          <img
            src={logo}
            alt="LarisFit"
            className="
              h-32
              md:h-44
              w-auto
              mx-auto
              md:mx-0
            "
          />

          <p className="text-gray-400 mt-2">
            Alimentação saudável entregue na sua porta.
          </p>

        </div>

        {/* Contato */}
        <div className="text-center md:text-left">

          <h4 className="font-bold text-lg mb-4 text-orange-400">
            Contato
          </h4>

          <div className="space-y-2 text-gray-300">
            <p>📱 (14) 97400-8094</p>
            <p>✉ contato@larisfit.com.br</p>
            <p>📍 Bauru - SP</p>
          </div>

        </div>

        {/* Redes */}
        <div className="text-center md:text-left">

          <h4 className="font-bold text-lg mb-4 text-green-400">
            Redes Sociais
          </h4>

          <div className="flex justify-center md:justify-start gap-6 text-3xl">

            <a
              href="https://www.instagram.com/larisfit_saudavel/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://wa.me/5514974008094"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2026 LarisFit • Todos os direitos reservados.
      </div>
    </footer>
  );
}