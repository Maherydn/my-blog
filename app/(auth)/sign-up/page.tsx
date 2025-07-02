"use client";

import { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    alert("Compte créé avec succès !");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <form
        onSubmit={handleSignup}
        className="backdrop-blur-md bg-white/5 border border-white/5 shadow-lg rounded-xl p-8 w-full max-w-md transition duration-500 hover:shadow-2xl hover:scale-105"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-white drop-shadow">
          Inscription
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm transition duration-300 animate-pulse">
            {error}
          </div>
        )}

        {/* Nom d'utilisateur */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-2xl text-white mb-1 font-semibold">
            Nom d utilisateur
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-white placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Choisissez un nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-2xl text-white mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-white placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        {/* Mot de passe */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-2xl text-white mb-1 font-semibold">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-white placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>

        {/* Confirmer mot de passe */}
        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="block text-2xl text-white mb-1 font-semibold"
          >
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-white placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Confirmez votre mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-xl py-2 rounded transition duration-300 hover:bg-blue-700 hover:shadow-md"
        >
          S inscrire
        </button>
      </form>
    </div>
  );
}
