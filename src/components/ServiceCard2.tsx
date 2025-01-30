interface ServiceCard2Props {
  image: string;
  title: string;
  desc: string;
}

function ServiceCard2({ image, title, desc }: ServiceCard2Props) {
  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-[48%] min-w-[48%] sm:min-w-[40%] overflow-hidden transition-all transform duration-300 border rounded-lg border-black/20 gap-4">
      <div className="w-full sm:w-1/2 aspect-[4/3] bg-red-400 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg transition duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-center sm:w-1/2 sm:p-3 p-2">
        <h1 className="text-xl sm:text-2xl font-semibold">{title}</h1>
        <p className="text-sm sm:text-base text-gray-600/70 mt-2 ">{desc}</p>
      </div>
    </div>
  );
}

export default ServiceCard2;
