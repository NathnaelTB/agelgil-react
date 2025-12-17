// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative overflow-hidden h-56">
        <img
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-brown transition-colors">
          {title}
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="px-3 py-1 text-xs font-semibold text-darkGreen bg-green-100 rounded-full">
            Biodegradable
          </span>
          <span className="text-brown text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
