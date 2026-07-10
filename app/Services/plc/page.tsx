export default function PLC() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">PLC Programming & Troubleshooting</h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        Clean, reliable PLC logic built for uptime. Whether you're dealing with
        legacy systems or modern platforms, FourEleven delivers fast, accurate
        troubleshooting and maintainable code.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Platforms</h2>
          <p className="text-gray-400">
            Allen-Bradley (RSLogix / Studio 5000), Siemens (TIA Portal),
            Codesys, PLCnext, Automation Direct.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">Troubleshooting</h2>
          <p className="text-gray-400">
            Rapid fault diagnosis, machine recovery, and root-cause analysis
            for production-critical systems.
          </p>
        </div>

      </div>
    </main>
  );
}
