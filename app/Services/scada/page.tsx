export default function SCADA() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">SCADA & HMI Development</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        Operator-friendly interfaces built for clarity, speed, and reliability.
        From Ignition to FactoryTalk View, FourEleven builds modern SCADA systems
        that improve visibility and reduce downtime.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Platforms</h2>
          <p className="text-gray-400">
            Ignition, FactoryTalk View SE/ME, WinCC, Red Lion, Maple Systems.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Capabilities</h2>
          <p className="text-gray-400">
            Modern UI design, alarming, historian integration, dashboards,
            mobile-friendly HMIs, and secure remote access.
          </p>
        </div>

      </div>
    </main>
  );
}
