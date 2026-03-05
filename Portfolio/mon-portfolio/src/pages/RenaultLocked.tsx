import { Link } from "react-router-dom";

export default function RenaultLocked() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link to="/" className="text-sm text-gray-500 hover:text-black">
        ← Retour à l’accueil
      </Link>

      <h1 className="mt-6 text-4xl font-bold">Projet Renault</h1>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Ce projet a été réalisé dans un contexte confidentiel.
        <br></br>
        <br></br>
        Je peux présenter les démarches UX,
        les prototypes et les décisions de design
        lors d’un échange.
      </p>

      <div className="mt-8 flex gap-3 flex-wrap">
        <a
          href="#contact"
          className="rounded-xl bg-black text-white px-6 py-3 hover:opacity-80 transition"
        >
          Me contacter
        </a>
        <Link
          to="/"
          className="rounded-xl border border-gray-900 px-6 py-3 hover:bg-gray-50 transition"
        >
          Voir les autres projets
        </Link>
      </div>
    </div>
  );
}