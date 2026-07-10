export default function Services() {
  const services = [
    {
      title: "PLC Programming & Troubleshooting",
      desc: "Allen-Bradley, Siemens, Codesys, PLCnext — clean logic, fast troubleshooting, and reliable performance.",
      link: "/Services/plc",
    },
    {
      title: "SCADA & HMI Development",
      desc: "Ignition, FactoryTalk View, WinCC, and modern HMIs built for operators and maintainers.",
      link: "/Services/scada",
    },
    {
      title: "Industrial Networking & IT/OT Integration",
      desc: "Ethernet/IP, Profinet, VLANs, secure architectures, and reliable plant-floor communication.",
      link: "/Services/networking",
    },
    {
      title: "Machine Commissioning",
      desc: "Startup support, tuning, validation, and production readiness for new or upgraded equipment.",
      link: "/Services/commissioning",
    },
    {
      title: "Controls Modernization",
      desc: "Retrofits, migrations, and upgrades designed to minimize downtime and maximize reliability.",
      link: "/Services/modernization",
    },
    {
      title: "Data Acquisition & MES",
      desc: "Real-time data collection, SQL integration, dashboards, and production visibility.",
      link: "/Services/mes",
    },
  ];

  return (
    <main className="px-8 md:px-20 pt-32">
      <h1 className="text-5xl font-bold mb-10">Automation Services</h1>

      <div className="grid gap-10 md:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="border border-gray-800 p-6 rounded-xl bg-black">
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">{s.title}</h2>
            <p className="text-gray-400 mb-4">{s.desc}</p>

            <a href={s.link} className="text-blue-400 hover:text-blue-300">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
