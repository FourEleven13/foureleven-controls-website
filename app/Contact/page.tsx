export default function Contact() {
  return (
    <main className="px-8 md:px-20 pt-32 text-white">
      <h1 className="text-5xl font-bold mb-6">Schedule a Consultation</h1>

      <p className="text-gray-300 max-w-2xl text-lg mb-10">
        Tell us about your automation needs. We’ll reach out to schedule a
        consultation and discuss how FourEleven can support your project.
      </p>

      <form className="max-w-2xl grid gap-6">

        <div>
          <label className="block mb-2 text-gray-400">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Email</label>
          <input
            type="email"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Company</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-gray-900 border border-gray-700"
            placeholder="Company name"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-400">Project Details</label>
          <textarea
            className="w-full p-3 rounded bg-gray-900 border border-gray-700 h-32"
            placeholder="Describe your automation issue or project..."
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-blue-500 px-10 py-4 font-semibold hover:bg-blue-600 transition-all"
        >
          Submit Request
        </button>

      </form>
    </main>
  );
}
