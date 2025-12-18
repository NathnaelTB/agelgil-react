import { Icon } from "@iconify/react";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-48">
        <img
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brown transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        <div className="mt-auto">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-brown text-white font-medium rounded-lg hover:bg-brown/90 transition-colors duration-300"
          >
            <Icon icon="mdi:cart" width="18" />
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
