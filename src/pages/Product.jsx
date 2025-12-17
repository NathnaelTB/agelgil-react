import ProductCard from "../components/ProductCard";
import teabox from "../assets/products/teabox.jpg";
import gift from "../assets/products/gift.jpeg";
import electronics from "../assets/products/electronics.jpg";
import takeaway from "../assets/products/takeaway.jpg";
import candle from "../assets/products/ad.jpg";
import coffee from "../assets/products/coffee.jpg";
import general from "../assets/products/general_products.jpeg";

const Product = () => {
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
            <p className="text-gray-600 leading-relaxed">Discover our range of sustainable packaging solutions, carefully crafted to reduce environmental impact without complying on quality.</p>
          </div>

          <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-content-center">
            <ProductCard image={teabox} title="Tea Box"></ProductCard>
            <ProductCard image={gift} title="Watch & Gift Box"></ProductCard>
            <ProductCard image={electronics} title="Electronics"></ProductCard>
            <ProductCard image={takeaway} title="Takeaway"></ProductCard>
            <ProductCard image={candle} title="Candle Packages"></ProductCard>
            <ProductCard image={coffee} title="Coffee Packages"></ProductCard>
          </section>
        </div>
      </section>
    </>
  );
};

export default Product;
