import "./globals.css";

export const metadata = {
  title: "FourEleven Controls LLC",
  description: "Industrial automation solutions built for real production environments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
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

        {/* Nav Links */}
        <div className="flex gap-8 text-gray-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/Services" className="hover:text-white">Services</a>
          <a href="/Approach" className="hover:text-white">Approach</a>
          <a href="/About" className="hover:text-white">About</a>
          <a href="/Contact" className="hover:text-white">Contact</a>
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
          © {new Date().getFullYear()} FourEleven Controls LLC — Industrial Automation Solutions
        </div>

      </div>
    </footer>
  );
}
