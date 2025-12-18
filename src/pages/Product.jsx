import { useState } from "react";
import { Icon } from "@iconify/react";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";
// import teabox from "../assets/products/teabox.jpg";
// import gift from "../assets/products/gift.jpeg";
// import electronics from "../assets/products/electronics.jpg";
import takeaway from "../assets/products/takeaway.jpg";
// import candle from "../assets/products/ad.jpg";
// import coffee from "../assets/products/coffee.jpg";
import coffeeNew from "../assets/products/coffee-new.jpg";
import general from "../assets/products/general_products.jpeg";
import shoppingNew from "../assets/products/shopping-bag.png";
// import shopping from "../assets/products/img_1056.jpg";
// import notebook from "../assets/products/img_1157.jpg";
import garment from "../assets/products/garment.png";
import books from "../assets/products/books.png";

const Product = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleOrderClick = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsOrderModalOpen(true);
  };

  // Collections - main categories
  const collections = [
    {
      id: 1,
      title: "Boxes",
      description: "Custom eco-friendly boxes for all your packaging needs - gift boxes, product boxes, and more.",
      icon: "mdi:package-variant-closed",
      link: "/product/boxes",
    },
    {
      id: 2,
      title: "Cards & General Stationery",
      description: "Business cards, greeting cards, and stationery products crafted with sustainable practices.",
      icon: "mdi:cards",
      link: "/product/cards",
    },
  ];


  // Other products - with images
  const otherProducts = [
    {
      id: 1,
      title: "Coffee Packaging",
      description: "Sustainable coffee bags and pouches designed to keep your coffee fresh while protecting the environment.",
      image: coffeeNew,
    },
    {
      id: 2,
      title: "Shopping Bags",
      description: "Durable and stylish eco-friendly shopping bags that make a statement for your brand.",
      image: shoppingNew,
    },
    {
      id: 3,
      title: "Custom Notebooks & Books",
      description: "High-quality printed materials including notebooks, exercise books, magazines, and books.",
      image: books,
    },
    {
      id: 4,
      title: "Garment Packaging",
      description: "Eco-friendly packaging solutions for the fashion industry including tags, boxes, and bags.",
      image: garment,
    },
    {
      id: 8,
      title: "Takeaway",
      description: "Sustainable takeaway packaging solutions for restaurants and food businesses.",
      image: takeaway,
    },
  ];

  return (
    <>
      <section className="min-h-screen bg-gray-50 pb-16">
        <div className="w-screen h-[40vh] relative mb-12">
          <img
            src={general}
            alt="Agelgil Products"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg">Our Eco-Friendly Products</h1>
          </div>
        </div>

        <div className="container">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Discover our range of sustainable packaging solutions, carefully crafted to reduce environmental impact without compromising on quality.</p>
          </div>

          {/* Collections */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Collections</h2>
          </div>

          <section className="grid sm:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {collections.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="h-32 bg-gradient-to-br from-brown to-brown/80 flex items-center justify-center">
                  <Icon
                    icon={category.icon}
                    className="text-white text-6xl group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brown transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <a
                    href={category.link}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-brown text-white font-medium rounded-lg hover:bg-brown/90 transition-colors duration-300"
                  >
                    <Icon icon="mdi:arrow-right" width="18" />
                    View Collection
                  </a>
                </div>
              </div>
            ))}
          </section>

          {/* Other Products */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Other Products</h2>
          </div>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                onOrder={() => handleOrderClick(product.title)}
              />
            ))}
          </section>
        </div>
      </section>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        productTitle={selectedProduct}
      />
    </>
  );
};

export default Product;
