import img from "../assets/agelgilvacancy.png";

const Vacancy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="custom_font custom_title mb-4">Join Our Team</h2>
          <p className="muted max-w-2xl mx-auto">Build your career with us and contribute to a sustainable future.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          {/* Image Side */}
          <div className="md:w-1/3 relative h-64 md:h-auto">
            <img
              src={img}
              alt="agelgil vacancy"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">We are hiring!</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 md:w-2/3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Marketing Officer</h3>
                <p className="text-brown font-medium mt-1">2 Positions Available</p>
              </div>
              <span className="bg-green-100 text-darkGreen px-4 py-1.5 rounded-full text-sm font-semibold mt-4 md:mt-0">
                Full Time
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Location:</span> Bahir Dar, Ethiopia
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Company:</span> Agelgil Eco Packaging
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Deadline:</span> Oct 20, 2025
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">Experience:</span> 2+ Years
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                  {["Plan marketing strategies", "Identify new customers", "Promote eco-products", "Organize campaigns", "Market research", "Collaborate with sales"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brown"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>How to Apply:</strong> Send your CV and cover letter to <a href="mailto:agelgilhr@gmail.com" className="text-brown hover:underline font-medium">agelgilhr@gmail.com</a>
                </p>
                <button className="bg-brown text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-darkGreen transition-colors shadow-md hover:shadow-lg w-full md:w-auto">
                  Apply via Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancy;
