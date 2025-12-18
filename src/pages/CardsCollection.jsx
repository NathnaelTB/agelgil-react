import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import OrderModal from "../components/OrderModal";
import general from "../assets/products/general_products.jpeg";
import n1 from "../assets/p1.jpeg";
import n2 from "../assets/p2.jpeg";
import n3 from "../assets/p3.jpg";
import n4 from "../assets/p4.jpg";
import n5 from "../assets/p5.jpg";
import n6 from "../assets/p6.jpg";
import n11 from "../assets/p11.jpg";
import n13 from "../assets/p13.jpg";

const CardsCollection = () => {
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState("");

    const handleOrderClick = (productTitle) => {
        setSelectedProduct(productTitle);
        setIsOrderModalOpen(true);
    };

    // Cards & Stationery collection products
    const cardProducts = [
        {
            id: 1,
            title: "Business Cards",
            description: "Premium eco-friendly business cards that leave a lasting impression of sustainability.",
            image: n4,
        },
        {
            id: 2,
            title: "Custom Books",
            description: "High-quality printed books with sustainable paper and binding options.",
            image: n13,
        },
        {
            id: 3,
            title: "Magazines & Journals",
            description: "Professional magazine and journal printing with a focus on eco-conscious materials.",
            image: n11,
        },
        {
            id: 4,
            title: "Exercise Books",
            description: "Sustainable exercise books for schools and businesses, crafted with care.",
            image: n1,
        },
        {
            id: 5,
            title: "Notebooks",
            description: "Versatile and stylish notebooks for all your creative and professional needs.",
            image: n2,
        },
        {
            id: 6,
            title: "Greeting Cards",
            description: "Beautifully designed greeting cards for every occasion, printed sustainably.",
            image: n6,
        },
    ];

    const features = [
        {
            icon: "mdi:printer",
            title: "Premium Printing",
            description: "High-resolution printing with vibrant, lasting colors."
        },
        {
            icon: "mdi:recycle",
            title: "Sustainable Materials",
            description: "Eco-friendly paper and inks for a greener choice."
        },
        {
            icon: "mdi:format-paint",
            title: "Custom Finishes",
            description: "Matte, glossy, embossed, and foil options available."
        },
        {
            icon: "mdi:clock-fast",
            title: "Quick Turnaround",
            description: "Fast production to meet your deadlines."
        }
    ];

    const stats = [
        { value: "10K+", label: "Cards Printed" },
        { value: "500+", label: "Happy Clients" },
        { value: "50+", label: "Design Templates" },
        { value: "100%", label: "Eco-Friendly" },
    ];

    return (
        <>
            <section className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="w-screen h-[50vh] relative">
                    <img
                        src={general}
                        alt="Cards & Stationery Collection"
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
                                    <li className="text-white font-medium">Cards & Stationery</li>
                                </ol>
                            </nav>

                            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-wide drop-shadow-lg mb-4">
                                Cards & Stationery
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                Discover our range of business cards, greeting cards, and stationery products
                                crafted with sustainable practices and premium quality.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-brown py-8">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-white/80 text-sm">{stat.label}</div>
                                </div>
                            ))}
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
                <div className="container py-16">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1 bg-brown/10 text-brown rounded-full text-sm font-medium mb-4">
                            Our Products
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Professional Printing Solutions
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            From business cards to marketing materials, we deliver high-quality printed
                            products that help your brand stand out.
                        </p>
                    </div>

                    {/* Product Grid */}
                    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                        {cardProducts.map((product) => (
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

                {/* Why Choose Us Section */}
                <div className="bg-gray-100 py-16">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="inline-block px-4 py-1 bg-brown/10 text-brown rounded-full text-sm font-medium mb-4">
                                    Why Choose Us
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                    Quality Meets Sustainability
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-brown rounded-full flex items-center justify-center">
                                            <Icon icon="mdi:check" className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Eco-Conscious Materials</h4>
                                            <p className="text-gray-600 text-sm">We use recycled paper and eco-friendly inks.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-brown rounded-full flex items-center justify-center">
                                            <Icon icon="mdi:check" className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Custom Design Services</h4>
                                            <p className="text-gray-600 text-sm">Our team helps bring your vision to life.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-brown rounded-full flex items-center justify-center">
                                            <Icon icon="mdi:check" className="text-white text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Competitive Pricing</h4>
                                            <p className="text-gray-600 text-sm">Quality products at affordable prices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={general}
                                    alt="Our Quality"
                                    className="rounded-2xl shadow-xl"
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <Icon icon="mdi:leaf" className="text-green-600 text-2xl" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-gray-800">100%</div>
                                            <div className="text-sm text-gray-600">Sustainable</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-brown to-brown/80 py-16">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your printing needs. We offer competitive pricing
                            and fast turnaround times.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-brown font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                <Icon icon="mdi:email" width="20" />
                                Get a Quote
                            </Link>
                            <Link
                                to="/product"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
                            >
                                <Icon icon="mdi:arrow-left" width="20" />
                                Back to Products
                            </Link>
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

export default CardsCollection;
