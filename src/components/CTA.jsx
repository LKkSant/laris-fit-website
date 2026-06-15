export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-green-700">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold">
          Pronto para transformar sua alimentação?
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Escolha suas marmitas fitness e receba tudo com praticidade
          na sua casa.
        </p>

        <a
          href="https://wa.me/5514974008094"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold transition-colors duration-200 hover:bg-orange-600"
        >
          Pedir pelo WhatsApp
        </a>

      </div>

    </section>
  );
}