import tana from '../assets/ageco.jpg'
import cycle from '../assets/cycle.jpeg'
import dam from '../assets/dam.jpeg'


const Impact = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-50 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brown to-darkGreen py-24 mb-16">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-6 drop-shadow-md">Our Impact</h1>
            <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
              Community lies at the heart of our mission. We are committed to giving back by actively engaging in initiatives that create a positive environmental and social impact.
            </p>
          </div>
        </div>

        <div className="container space-y-24">

          {/* Impact Item 1 (Text Left, Image Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Agelgil Joins Rotaract in Tana Cleanup Initiative</h2>
              <div className="h-1 w-20 bg-brown mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-loose">
                Taking a resolute stand against environmental pollution, Agelgil Eco-Packaging teamed up with Rotaract Bahir Dar for an impactful voluntary activity. Together, they embarked on a mission to cleanse Lake Tana, our precious natural resource. This collective endeavor signifies Agelgil's unwavering commitment to protecting our environment. By championing eco-friendly alternatives, Agelgil steps forward as a true steward of the Earth.
              </p>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-brown/10 rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img src={tana} alt="Tana Cleanup" className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
          </div>

          {/* Impact Item 2 (Image Left, Text Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 relative group">
              <div className="absolute inset-0 bg-darkGreen/10 rounded-3xl transform -translate-x-3 translate-y-3 transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
              <img src={cycle} alt="Green Festival" className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
            <div className="order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Agelgil at Bahir Dar's Green Festival</h2>
              <div className="h-1 w-20 bg-darkGreen mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-loose">
                Agelgil Eco-Packaging took center stage at Bahir Dar's City Walk and Bike Festival, fusing responsible packaging solutions with contagious enthusiasm. The event galvanized a united front of eco-conscious individuals, organizations, and community members. Amidst Bahir Dar's scenic backdrop, the festival turned into a lively tribute to conscious living, where Agelgil's presence epitomized a pledge towards a greener future.
              </p>
            </div>
          </div>

          {/* Impact Item 3 (Text Left, Image Right) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Gift to the Great Renaissance Dam</h2>
              <div className="h-1 w-20 bg-brown mb-6 rounded-full"></div>
              <p className="text-gray-600 text-lg leading-loose">
                Agelgil Eco-Packaging presented notebooks produced by the organization as a gift to the officials and employees of the Great Renaissance Dam. Ms. Afomia Andualem personally presented the gift, expressing great pride in offering souvenirs produced entirely with indigenous knowledge and resources. This gesture honors the collective effort of all Ethiopians in building a national symbol of independence.
              </p>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute inset-0 bg-brown/10 rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img src={dam} alt="Renaissance Dam Gift" className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:-translate-y-2" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Impact