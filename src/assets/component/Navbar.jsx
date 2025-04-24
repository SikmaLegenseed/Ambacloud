import { useState } from 'react';


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
      <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50">
        {/* Left Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#">Tes</a>
          <a href="#">Tes</a>
          <a href="#">Tes</a>
        </nav>

        {/* Center Logo */}
        <div className="text-xl font-bold tracking-tight text-gray-900">Boneka Ambalabu</div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-gray-600 hover:text-gray-900">Login</button>
          <button className="text-sm text-white bg-black px-4 py-2 rounded-md hover:bg-gray-900 transition">Get Started</button>
        </div>

        {/* Mobile Burger*/}
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start px-6 py-4 gap-4 md:hidden">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <hr className="w-full border-t" />
          <button className="text-gray-600">Login</button>
          <button className="bg-black text-white px-4 py-2 rounded-md w-full text-center">
            Get Started
          </button>
        </div>
      )}
      </header>
    )
}

export default Navbar;