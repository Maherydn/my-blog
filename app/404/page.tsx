import Link from "next/link";

export default function Custom404() {
  return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800 ">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-8">
          Oups ! La page que vous cherchez n’existe pas.
        </p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Retour à l’accueil
        </Link>
      </div>
  );
}
