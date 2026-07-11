function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <nav className="w-full px-4 py-4 md:px-6">

        {/* Responsive Container */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

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
