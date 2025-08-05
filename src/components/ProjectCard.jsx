const ProjectCard = ({ image, title, description, tools, year }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white flex flex-col group transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <div className="overflow-hidden aspect-[4/3] bg-gray-200 flex items-center justify-center">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
    loading="lazy"
  />
</div>

      <div className="p-4 flex flex-col flex-grow space-y-2">
        <h3 className="text-xl font-semibold text-blue-950 text-center">{title}</h3>
        <p className="text-md text-gray-500 text-center">{tools}</p>
        <p className="text-gray-700 text-base flex-grow">{description}</p>
        <div className="text-right text-gray-500 text-md mt-4">{year}</div>
      </div>
    </div>
  )
}

export default ProjectCard
