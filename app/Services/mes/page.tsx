export default function MES() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">Data Acquisition & MES</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        Turn plant-floor data into actionable insights. FourEleven builds
        reliable data pipelines, historians, dashboards, and MES integrations
        that improve visibility and decision-making.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Data Tools</h2>
          <p className="text-gray-400">
            SQL, historians, Ignition reporting, dashboards, KPIs,
            production tracking, and analytics.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Integrations</h2>
          <p className="text-gray-400">
            MES systems, ERP connectivity, machine data collection,
            and real-time visibility solutions.
          </p>
        </div>

      </div>
    </main>
  );
}
