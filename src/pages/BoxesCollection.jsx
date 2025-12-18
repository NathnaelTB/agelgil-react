import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";
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
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleOrderClick = (productTitle) => {
        setSelectedProduct(productTitle);
        setIsOrderModalOpen(true);
    };

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
                                        onOrder={() => handleOrderClick(product.title)}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="bg-brown/5 rounded-3xl p-12 mb-24">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                                    Unmatched Versatility for <span className="text-brown italic underline decoration-brown/30">Every Industry</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Our collection represents the pinnacle of sustainable design, proving that eco-friendly packaging can be both functionally robust and visually stunning.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Custom dimensions tailored to your product",
                                        "Premium finishes with sustainable inks",
                                        "Rapid turnaround and scalable production",
                                        "100% biodegradable and recyclable materials"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-brown/10 flex items-center justify-center text-brown">
                                                <Icon icon="mdi:check-bold" width="14" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <img src={p6} alt="Versatile Boxes" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
                                <img src={p11} alt="Sustainable Design" className="w-full h-48 object-cover rounded-2xl shadow-lg mt-8" />
                                <img src={p13} alt="Eco Packaging" className="w-full h-48 object-cover rounded-2xl shadow-lg -mt-8" />
                                <img src={p4} alt="Premium Quality" className="w-full h-64 object-cover rounded-2xl shadow-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brown/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Need a Custom Solution?</h2>
                            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                                Our design team is ready to help you create the perfect sustainable packaging for your unique brand requirements.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="px-10 py-4 bg-brown text-white font-bold rounded-xl hover:bg-brown/90 transition-all duration-300 shadow-xl"
                                >
                                    Start a Project
                                </Link>
                                <a
                                    href="https://api.whatsapp.com/message/UGIQ5QDVEFG5A1"
                                    className="px-10 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10"
                                >
                                    Quick Inquiry
                                </a>
                            </div>
                        </div>
                    </div>
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

export default BoxesCollection;
