import { motion } from "framer-motion"

const timelineData = [
  {
    year: "2023 – Present",
    title: "🧑🏻‍💻 Apprenticeship as IT Specialist for Digital Networking",
    place: "ZF Friedrichshafen AG",
    description:
      "Building modern, accessible digital solutions, in order to boost processes, save resources and time.",
  },
  {
    year: "2019 – 2023",
    title: "🎓 Secondary School Graduation",
    place: "FLSH Gaibach",
    description:
      "Successfully attained the Mittlere Reife (Intermediate School Certificate). This period provided a comprehensive foundation in core academic subjects and cultivated key skills such as structured working and analytical problem-solving.",
  },
  {
    year: "2017 – 2019",
    title: "👨🏻‍🎓 Student at AvH Gymnasium Schweinfurt",
    place: "AvH Gymnasium Schweinfurt",
    description:
      "Gained foundational knowledge in STEM subjects and developed an early interest in programming and digital systems.",
  },
]

const CareerTimeline = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      {/* Header bleibt unverändert */}
      <motion.div
        className="text-center space-y-6 pt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2 className="text-4xl font-bold text-blue-950">
          My Career Journey
        </motion.h2>
        <motion.p
          className="text-xl text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          ⚡️ A look back at my educational path and professional experiences that shaped who I am today.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <div className="relative mt-20 w-full max-w-6xl px-4">

        {/* Vertikale Linie (in der Mitte) */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gray-300 rounded-full" />

        <div className="space-y-24">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0

            return (
              <motion.div
                key={index}
                className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Kreis-Marker */}
                <span className="absolute left-1/2 top-1.5 w-3 h-3 -translate-x-1/2 bg-blue-500 rounded-full ring-2 ring-white z-10" />

                {/* Content - Geänderte Abstände (md:pr-4 und md:pl-4) */}
                <div
                  className={`w-full md:w-5/12 p-3 ${isLeft
                      ? 'md:mr-auto md:pr-4 text-right' // Reduziert von pr-10 auf pr-4
                      : 'md:ml-auto md:pl-4 text-left'  // Reduziert von pl-10 auf pl-4
                    }`}
                >
                  <p className="text-sm font-medium text-blue-600 tracking-wider uppercase">
                    {item.year}
                  </p>
                  <h3 className="text-2xl font-bold text-blue-950 mt-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-semibold mt-0.5">
                    {item.place}
                  </p>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CareerTimeline
