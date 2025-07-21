import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub, FaEnvelope, FaEye } from "react-icons/fa"
import profileImage from "../assets/profile.jpg"

const Hero = () => {
  return (
    <section className="pt-24 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side */}
      <div className="max-w-3xl space-y-6">
        <h1 className="text-6xl font-bold text-blue-950">Leon Kister</h1>
        <h2 className="text-3xl font-semibold text-blue-950">(IT Specialist in Digital Networking)</h2>
        <p className="text-2xl text-gray-700">
          I'm a passionate developer focused on building clean and efficient digital experiences.
        </p>

        <div className="flex space-x-4 text-white text-3xl">
          <a
            href="https://github.com/eskeray"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 rounded-full p-4 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/leon-kister-0b72a7376/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-600 rounded-full p-4 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kister.leon2@gmail.com"
            className="bg-red-600 hover:bg-red-500 rounded-full p-4 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-x-2 border border-blue-950 text-blue-950 px-6 py-3 rounded-4xl text-xl font-medium hover:bg-blue-950 hover:text-white transition"
        >
          <FaEye className="text-lg" />
          View Projects
        </Link>
      </div>

      {/* Right Side */}
      <div className="mt-10 md:mt-0 md:ml-10 max-w-md w-full">
        <div className="relative rounded-[2rem] p-2 bg-gradient-to-br from-blue-200 via-white to-blue-100 shadow-xl">
          <img
            src={profileImage}
            alt="Profile picture"
            className="rounded-[1.75rem] w-full h-auto object-cover"
          />
        </div>
      </div>

    </section>
  )
}

export default Hero
