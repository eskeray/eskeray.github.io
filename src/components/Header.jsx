import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <header className="py-8 flex justify-between items-center">
      <div className="text-4xl font-bold text-blue-950">Leon Kister</div>
      
      <nav className="space-x-4 text-xl font-normal flex">
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
        className="border border-blue-950 text-blue-950 px-6 py-3 rounded-4xl text-xl font-medium hover:bg-blue-950 hover:text-white transition"
      >
        Resume
      </a>
    </header>
  )
}

export default Header
