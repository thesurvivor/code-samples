"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("İsim:", name);
    console.log("E-posta:", email);
    console.log("Mesaj:", message);

    // inputları temizle
    setName("");
    setEmail("");
    setMessage("");

    alert("Mesajınız gönderildi!");
  };

  

  return (
    <form onSubmit={handleSubmit} method="post" className="max-w-md mx-auto mt-10 space-y-4">
      <input
        type="text"
        placeholder="Adınız"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <input
        type="email"
        placeholder="E-posta"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <textarea
        placeholder="Mesajınız"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Gönder
      </button>
    </form>
  );
}
