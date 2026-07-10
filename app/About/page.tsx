export default function About() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">About FourEleven Controls</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        FourEleven Controls LLC provides industrial automation solutions built for
        uptime, reliability, and real-world production environments. Founded in
        Pennsylvania, FourEleven brings hands-on experience in PLC programming,
        SCADA development, industrial networking, and machine commissioning.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-400">
            Keep production running. Build systems that last. Deliver automation
            solutions that operators, technicians, and engineers can trust.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Experience That Matters
          </h2>
          <p className="text-gray-400">
            With real plant-floor experience, FourEleven understands the pressure
            of downtime, the importance of clean logic, and the value of reliable
            controls architecture.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Built for Production
          </h2>
          <p className="text-gray-400">
            Every solution is designed with uptime, maintainability, and long-term
            reliability in mind — not just theoretical engineering.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Local Roots, Modern Capability
          </h2>
          <p className="text-gray-400">
            Based in Pennsylvania and serving the region with modern automation
            tools, best practices, and a practical approach to controls engineering.
          </p>
        </div>

      </div>
    </main>
  );
}
