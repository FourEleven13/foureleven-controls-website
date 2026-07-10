export default function Modernization() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">Controls Modernization</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        Upgrade outdated controls systems without shutting down production.
        FourEleven specializes in safe, staged migrations that minimize risk
        and maximize reliability.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Upgrades</h2>
          <p className="text-gray-400">
            PLC migrations, SCADA upgrades, panel retrofits, network rebuilds,
            and safety system modernization.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Minimized Downtime</h2>
          <p className="text-gray-400">
            Careful planning, staged cutovers, and production-focused execution
            ensure minimal disruption.
          </p>
        </div>

      </div>
    </main>
  );
}
