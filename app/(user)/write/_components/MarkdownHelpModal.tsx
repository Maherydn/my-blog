"use client";

import { useEffect, useState } from "react";

export default function MarkdownHelpModal() {
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Nettoyage au démontage
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black/80 text-white px-2 py-1 rounded hover:bg-gray-700"
      >
        Aide Markdown
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-2">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative shadow-xl h-3/4 overflow-y-scroll">
            <h2 className="text-2xl font-bold mb-4">Bases du Markdown</h2>

            <div className="space-y-4 text-sm text-gray-800">
              <div>
                <strong>Titre :</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  # Titre niveau 1
                </pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  ## Titre niveau 2
                </pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  ### Titre niveau 3
                </pre>
              </div>

              <div>
                <strong>Texte en gras :</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  **texte en gras**
                </pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">*italique*</pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">~~barré~~</pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  **_gras et italique_**
                </pre>
              </div>
              <div>
                <strong>Listes :</strong>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  {`- Élément 1
- Élément 2
  - Sous-élément`}
                </pre>
                <pre className="bg-gray-100 p-2 rounded mt-1">
                  1. Premier{"\n"}
                  2. Deuxième{"\n"}
                  3. Troisième
                </pre>
              </div>

              <p className="text-sm text-slate-400">
                (Tu peux aussi créer tes titres, listes ou tableaux dans Word,
                puis convertir le fichier en Markdown via le site :
                https://word2md.com/)
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 pb-1 px-3 text-white text-2xl bg-black/80 rounded-lg duration-300 hover:bg-slate-700 cursor-pointer flex items-center justify-center"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
