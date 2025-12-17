import { Icon } from "@iconify/react";
import afomi from "../assets/afomi.jpg";
import biruk from '../assets/biruk.jpeg'
import yeshumnesh from '../assets/yeshum.jpeg'
import jo from '../assets/jo.jpeg'
import yirga from '../assets/yirga.jpeg'
import besufekad from '../assets/besu.jpeg'



const Team = () => {
  return (
    <>
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet The Team</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-brown to-darkGreen mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-xl leading-relaxed">
              Our dedicated team members bring a wealth of expertise and passion to the table. We're driven by a shared commitment to sustainable packaging and a vision of a greener future.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Afomia Andualem */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={afomi} alt="Afomia Andualem" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Afomia Andualem</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">CEO & Co-Founder</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>

            {/* Biruk Neecho */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={biruk} alt="Biruk Neecho" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Biruk Neecho</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">Product Development</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>

            {/* Besufekad Amezene */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={besufekad} alt="Besufekad Amezene" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Besufekad Amezene</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">COO</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>

            {/* Yohannes Ababu */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={jo} alt="Yohannes Ababu" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Yohannes Ababu</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">Finance & Investment</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>

            {/* Yirga Dessale */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={yirga} alt="Yirga Dessale" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Yirga Dessale</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">Human Resources</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>

            {/* Yeshumnesh Adane */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-50/50 flex flex-col items-center text-center group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-r from-brown/10 to-transparent opacity-50"></div>
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-brown rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-125"></div>
                <img src={yeshumnesh} alt="Yeshumnesh Adane" className="w-52 h-52 rounded-full object-cover object-top relative z-10 border-[6px] border-white shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2 relative z-10">Yeshumnesh Adane</h3>
              <p className="text-brown font-semibold uppercase tracking-wider text-sm mb-4 relative z-10">Customer Service</p>
              <div className="w-12 h-1 bg-gray-100 group-hover:bg-brown rounded-full transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
