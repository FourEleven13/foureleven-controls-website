export default function Commissioning() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">Machine Commissioning</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        From startup to full production readiness, FourEleven provides hands-on
        commissioning support that ensures machines run safely, reliably, and
        efficiently.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Startup Support</h2>
          <p className="text-gray-400">
            I/O checkout, safety validation, tuning, operator training,
            and production ramp-up.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Industries</h2>
          <p className="text-gray-400">
            Manufacturing, packaging, food & beverage, material handling,
            OEM equipment, and more.
          </p>
        </div>

      </div>
    </main>
  );
}
