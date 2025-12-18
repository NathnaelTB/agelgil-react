import { useState } from "react";
import { Icon } from "@iconify/react";
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const OrderModal = ({ isOpen, onClose, productTitle }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/afomia@agelgileco-package.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                toast.success("Order request sent successfully!");
                onClose();
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("Failed to send order request. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-100 animate-in fade-in zoom-in">
                {/* Header */}
                <div className="bg-brown p-6 text-white flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold">Place Your Order</h3>
                        <p className="text-white/80 text-sm mt-1">Product: <span className="font-semibold">{productTitle}</span></p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                        <Icon icon="mdi:close" width="24" />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-8 space-y-5"
                >
                    {/* Hidden Fields for FormSubmit */}
                    <input type="hidden" name="_subject" value={`Order: ${productTitle}`} />
                    <input type="hidden" name="Product" value={productTitle} />
                    <input type="hidden" name="_template" value="table" />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="order-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                            <input
                                type="text"
                                name="Name"
                                id="order-name"
                                placeholder="Name"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="order-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="Email"
                                id="order-email"
                                placeholder="Email"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="order-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                name="Phone"
                                id="order-phone"
                                placeholder="Phone"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="order-quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                            <input
                                type="text"
                                name="Quantity"
                                id="order-quantity"
                                placeholder="e.g. 500 pcs"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="order-requirements" className="block text-sm font-medium text-gray-700 mb-1">Specific Requirements</label>
                        <textarea
                            name="Requirements"
                            id="order-requirements"
                            rows="4"
                            placeholder="Tell us about size, color, or delivery date..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-brown focus:ring-1 focus:ring-brown transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-brown text-white font-bold rounded-xl hover:bg-brown/90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl mt-4 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <Icon icon="mdi:loading" className="animate-spin" width="20" />
                        ) : (
                            <Icon icon="mdi:cart" width="20" />
                        )}
                        {loading ? "Sending..." : "Submit Order"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OrderModal;
