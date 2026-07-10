export default function Approach() {
  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-6">
        A Practical Approach to Industrial Automation
      </h1>

      <p className="text-gray-300 max-w-3xl text-lg mb-10">
        FourEleven Controls is built on a simple idea: automation should be
        reliable, maintainable, and built for real production environments.
        Our approach blends hands-on industrial experience with modern
        engineering principles.
      </p>

      <div className="grid gap-10 md:grid-cols-2">

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Troubleshooting First
          </h2>
          <p className="text-gray-400">
            Real production environments demand fast, accurate problem solving.
            We prioritize diagnosing root causes and restoring uptime before
            anything else.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Clean, Maintainable Architecture
          </h2>
          <p className="text-gray-400">
            PLC logic, SCADA screens, and networks should be easy to understand,
            easy to maintain, and easy to expand. We build systems that last.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            Modernization Without Downtime
          </h2>
          <p className="text-gray-400">
            Upgrading controls systems shouldn’t shut down production.
            We plan migrations and retrofits with uptime as the priority.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black">
          <h2 className="text-2xl font-semibold text-blue-400 mb-3">
            IT/OT Awareness
          </h2>
          <p className="text-gray-400">
            Modern automation requires secure, reliable communication between
            plant-floor devices and enterprise systems. We bridge the gap.
          </p>
        </div>

      </div>
    </main>
  );
}
