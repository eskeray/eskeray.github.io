import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaDownload, FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
    <header className="py-8 flex justify-between items-center relative bg-blue-50">
      <div className="signature text-4xl font-bold text-blue-950">Leon Kister</div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4 text-xl font-normal">
        <Link
          to="/"
          className={`px-4 py-3 transition 
            ${isActive("/") ? "font-semibold" : ""}
            hover:bg-sky-200 text-blue-950`}
        >
          Home
        </Link>

        <Link
          to="/projects"
          className={`px-4 py-3 transition 
            ${isActive("/projects") ? "font-semibold" : ""}
            hover:bg-sky-200 text-blue-950`}
        >
          Projects
        </Link>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfNHL5Gaq_xc0_9PUj9N_8uKmwjsDchJSc_1lc-ogNE-k0ioA/viewform?usp=sharing&ouid=106431332881603351078"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 transition hover:bg-sky-200 text-blue-950"
        >
          Contact
        </a>
      </nav>

      <a
        href="/resume.pdf"
        download
        className="hidden md:flex items-center gap-x-2 border border-blue-950 text-blue-950 px-6 py-3 rounded-4xl text-xl font-medium hover:bg-blue-950 hover:text-white transition"
      >
        Resume
        <FaDownload className="text-lg" />
      </a>

      {/* Hamburger button for mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-blue-950 focus:outline-none"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-blue-50 shadow-md flex flex-col space-y-2 p-4 md:hidden z-20">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 rounded-md transition
              ${isActive("/") ? "font-semibold bg-sky-200" : ""}
              text-blue-950 hover:bg-sky-200`}
          >
            Home
          </Link>

          <Link
            to="/projects"
            onClick={() => setMenuOpen(false)}
            className={`px-4 py-3 rounded-md transition
              ${isActive("/projects") ? "font-semibold bg-sky-200" : ""}
              text-blue-950 hover:bg-sky-200`}
          >
            Projects
          </Link>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNHL5Gaq_xc0_9PUj9N_8uKmwjsDchJSc_1lc-ogNE-k0ioA/viewform?usp=sharing&ouid=106431332881603351078"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 rounded-md hover:bg-sky-200 text-blue-950 transition"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-x-2 border border-blue-950 text-blue-950 px-6 py-3 rounded-4xl text-xl font-medium hover:bg-blue-950 hover:text-white transition justify-center"
          >
            Resume <FaDownload className="text-lg" />
          </a>
        </nav>
      )}
    </header>
  )
}

export default Header
