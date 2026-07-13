import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fourelevencontrolsllc.com"),
  title: {
    default: "FourEleven Controls LLC",
    template: "%s | FourEleven Controls LLC",
  },
  description:
    "PLC Programming, SCADA, HMI, Industrial Networking, IT/OT Integration, Commissioning, and Automation Support for manufacturers.",
  keywords: [
    "PLC Programming",
    "Industrial Automation",
    "SCADA",
    "HMI",
    "Allen Bradley",
    "Rockwell",
    "Siemens",
    "Ignition",
    "Industrial Networking",
    "OT",
    "IT/OT",
    "Commissioning",
    "Controls Engineering",
    "Pennsylvania Automation",
    "FourEleven Controls LLC",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <nav className="w-full px-4 py-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/background.jpg"
              alt="Four Eleven Controls Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-semibold tracking-wide">
              FourEleven Controls
            </span>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-6 text-gray-300 justify-center md:justify-end">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/Services" className="hover:text-white">Services</a>
            <a href="/Approach" className="hover:text-white">Approach</a>
            <a href="/About" className="hover:text-white">About</a>
            <a href="/Contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-3 mb-6 md:mb-0">
          <img
            src="/background.jpg"
            alt="Four Eleven Controls Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold tracking-wide">
            FourEleven Controls
          </span>
        </div>

        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Four Eleven Controls LLC — Industrial Automation Solutions
        </div>
      </div>
    </footer>
  );
}
