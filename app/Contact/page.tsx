"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const payload = {
      name,
      email,
      company,
      message: details,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("Your message has been sent. We will contact you shortly.");
      setName("");
      setEmail("");
      setCompany("");
      setDetails("");
    } else {
      setStatus("There was an error sending your message. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="px-8 md:px-20 pt-32 text-white">
      <h1 className="text-5xl font-bold mb-6">Schedule a Consultation</h1>

      <p className="text-gray-300 max-w-2xl text-lg mb-10">
        Tell us about your automation needs. We’ll reach out to schedule a
        consultation and discuss how FourEleven can support your project.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl grid gap-6">

        <div>
          <label className="block mb-2 text-gray-400">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Company</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Project Details</label>
          <textarea
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 h-32"
            placeholder="Describe your automation issue or project..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-10 py-4 font-semibold hover:bg-blue-600 transition-all"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

        {status && (
          <p className="text-gray-300 text-sm mt-2">{status}</p>
        )}

      </form>
    </main>
  );
}
