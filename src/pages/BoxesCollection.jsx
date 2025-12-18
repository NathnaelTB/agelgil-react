import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import general from "../assets/products/general_products.jpeg";
import teabox from "../assets/products/teabox.jpg";
import gift from "../assets/products/gift.jpeg";
import electronics from "../assets/products/electronics.jpg";
// import candle from "../assets/products/ad.jpg";
import perfume from "../assets/products/perfume.jpg";
import detergent from "../assets/products/detergent.jpg";
import soap from "../assets/products/soap.jpg";
import powder from "../assets/products/powder.jpg";
import candleNew from "../assets/products/candle-new.jpg";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-all duration-300"
        >
            <Icon icon="mdi:chevron-right" width="24" />
        </button>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brown hover:bg-brown hover:text-white transition-all duration-300"
        >
            <Icon icon="mdi:chevron-left" width="24" />
        </button>
    );
};

const BoxesCollection = () => {
    // Boxes collection products
    const boxProducts = [
        {
            id: 1,
            title: "Candle Package",
            description: "Beautiful eco-friendly packaging for candles and home fragrance products.",
            image: candleNew,
        },
        {
            id: 2,
            title: "Powder Package",
            description: "Sustainable packaging solutions for powder-based products.",
            image: powder,
        },
        {
            id: 3,
            title: "Lamp Package",
            description: "Protective and eco-conscious packaging designed for lamps and lighting products.",
            image: p12,
        },
        {
            id: 4,
            title: "Electronics Package",
            description: "Durable packaging solutions for electronic devices and accessories.",
            image: electronics,
        },
        {
            id: 5,
            title: "Cosmetic/Beauty Product Box",
            description: "Elegant packaging for cosmetics and beauty products.",
            image: p5,
        },
        {
            id: 6,
            title: "Soap Box",
            description: "Eco-friendly boxes perfect for artisan and commercial soap products.",
            image: soap,
        },
        {
            id: 7,
            title: "Detergent Box",
            description: "Eco-friendly boxes perfect for detergent products.",
            image: detergent,
        },
        {
            id: 8,
            title: "Perfume Box",
            description: "Luxurious packaging for perfumes and fragrances.",
            image: perfume,
        },
        {
            id: 9,
            title: "Jewelry Gift Box",
            description: "Premium gift boxes for jewelry and precious items.",
            image: gift,
        },
        {
            id: 10,
            title: "Gift Box",
            description: "Versatile gift boxes for all occasions and celebrations.",
            image: p8,
        },
        {
            id: 11,
            title: "Medicine/Pharmacy Box",
            description: "Safe and reliable packaging for pharmaceutical products.",
            image: p9,
        },
        {
            id: 12,
            title: "Tea Packaging Box",
            description: "Premium eco-friendly tea packaging solutions for a sustainable brewing experience.",
            image: teabox,
        },
        {
            id: 13,
            title: "Chocolate/Sweets Box",
            description: "Delightful packaging for chocolates, confectioneries, and sweets.",
            image: p10,
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const features = [
        {
            icon: "mdi:leaf",
            title: "100% Eco-Friendly",
            description: "All our boxes are made from sustainable, recyclable materials."
        },
        {
            icon: "mdi:palette",
            title: "Custom Designs",
            description: "Fully customizable sizes, colors, and branding options."
        },
        {
            icon: "mdi:shield-check",
            title: "Premium Quality",
            description: "Durable construction that protects your products beautifully."
        },
        {
            icon: "mdi:truck-delivery",
            title: "Fast Delivery",
            description: "Quick turnaround times to meet your business needs."
        }
    ];

    return (
        <>
            <section className="min-h-screen bg-gray-50 overflow-x-hidden">
                {/* Hero Section */}
                <div className="w-screen h-[50vh] relative">
                    <img
                        src={general}
                        alt="Boxes Collection"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40">
                        <div className="container h-full flex flex-col justify-center">
                            {/* Breadcrumb */}
                            <nav className="mb-6">
                                <ol className="flex items-center gap-2 text-white/70 text-sm">
                                    <li>
                                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                                    </li>
                                    <li><Icon icon="mdi:chevron-right" /></li>
                                    <li>
                                        <Link to="/product" className="hover:text-white transition-colors">Products</Link>
                                    </li>
                                    <li><Icon icon="mdi:chevron-right" /></li>
                                    <li className="text-white font-medium">Boxes</li>
                                </ol>
                            </nav>

                            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg mb-4">
                                Boxes Collection
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                Explore our wide range of custom eco-friendly boxes for all your packaging needs -
                                from gift boxes to specialty product packaging.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-white py-12 border-b">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="w-14 h-14 mx-auto mb-3 bg-brown/10 rounded-full flex items-center justify-center">
                                        <Icon icon={feature.icon} className="text-brown text-2xl" />
                                    </div>
                                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="container py-20 relative px-4 sm:px-12">
                    <style>
                        {`
                        .slick-custom .slick-track {
                            display: flex !important;
                            gap: 0;
                        }
                        .slick-custom .slick-slide {
                            height: inherit !important;
                            display: flex !important;
                        }
                        .slick-custom .slick-slide > div {
                            width: 100%;
                            display: flex !important;
                        }
                        `}
                    </style>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 bg-brown/10 text-brown rounded-full text-sm font-medium mb-4">
                            Premium Collection
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                            Featured Box Solutions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Discover our top-tier eco-friendly packaging, designed to give your products
                            the premium presentation they deserve while being kind to the planet.
                        </p>
                    </div>

                    {/* Product Carousel */}
                    <div className="mb-24 slick-custom">
                        <Slider {...sliderSettings}>
                            {boxProducts.map((product) => (
                                <div key={product.id} className="px-3 pb-10 h-full flex">
                                    <ProductCard
                                        image={product.image}
                                        title={product.title}
                                        description={product.description}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Grid Section - For more space utilization */}
                    <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-6">Unmatched Versatility</h3>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    Whether you're packaging delicate jewelry or robust electronics, our sustainable
                                    solutions offer the perfect balance of protection and aesthetics. Each box
                                    tells a story of quality and environmental responsibility.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Available in various sizes and shapes",
                                        "Reinforced structural integrity",
                                        "Premium texture and finishing options",
                                        "Eco-friendly inks and dyes"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-gray-700">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                <Icon icon="mdi:check" className="text-green-600 text-sm" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={p11} className="rounded-2xl h-48 w-full object-cover shadow-md" alt="Packaging" />
                                <img src={p13} className="rounded-2xl h-48 w-full object-cover shadow-md mt-8" alt="Packaging" />
                                <img src={p6} className="rounded-2xl h-48 w-full object-cover shadow-md -mt-8" alt="Packaging" />
                                <img src={p3} className="rounded-2xl h-48 w-full object-cover shadow-md" alt="Packaging" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-brown to-brown/80 py-20 mt-12">
                    <div className="container text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Tailored Packaging Solutions
                        </h2>
                        <p className="text-white/90 mb-10 max-w-2xl mx-auto text-xl leading-relaxed">
                            Need something completely unique? Our design team is ready to collaborate
                            with you to create the perfect box for your brand's specific needs.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-brown font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                            >
                                <Icon icon="mdi:email" width="24" />
                                Get a Custom Quote
                            </Link>
                            <Link
                                to="/product"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 shadow-lg"
                            >
                                <Icon icon="mdi:arrow-left" width="24" />
                                Back to Collections
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BoxesCollection;

