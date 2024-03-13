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
      <section className=" min-h-screen ">
        <div className="w-screen h-60 relative">
          <img
            src={general}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="container">
          <p className="text-center text_section_title py-4">What we offer?</p>

          <hr />

          <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center">
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
