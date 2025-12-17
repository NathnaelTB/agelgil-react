import group from '../assets/group.jpg'
import { Icon } from '@iconify/react'
import Team from "../components/Team";


const About = () => {
  return (
    <>
      <section className="min-h-screen bg-gray-50 pb-10">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full mb-20">
          <div className="absolute inset-0">
            <img src={group} alt="Agelgil Team" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 container h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">Who We Are</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-medium drop-shadow-md">Pioneering sustainable packaging solutions for a better tomorrow.</p>
          </div>
        </div>

        <div className="container relative z-10 -mt-32 mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Stand For</h2>
            <div className="h-1 w-20 bg-brown mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg leading-loose max-w-4xl mx-auto">
              At Agelgil Eco Packaging, we are more than a brand – we are a commitment to sustainable packaging excellence. With a deep-rooted passion for environmental responsibility, we've pioneered packaging solutions that reflect our unwavering dedication to a greener future. As we embark on this journey, our mission, vision, and values serve as our guiding compass.
            </p>
          </div>
        </div>

        <div className="container mb-0">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Mission */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-darkGreen group-hover:bg-darkGreen group-hover:text-white transition-colors duration-300">
                <Icon icon="ant-design:aim-outlined" width="32" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brown transition-colors">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the packaging industry by delivering innovative and sustainable solutions that embody our commitment to both quality and environmental stewardship.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon icon="ph:eye-bold" width="32" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brown transition-colors">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a global leader in eco-conscious packaging, envisioning a world where every product is packaged with the environment in mind, creating a circular economy.
              </p>
            </div>

            {/* Value */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-brown group-hover:bg-brown group-hover:text-white transition-colors duration-300">
                <Icon icon="material-symbols:handshake-outline" width="32" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-brown transition-colors">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainability, Innovation, Quality, and Collaboration. These values underpin everything we do, driving us to create solutions that are ethically excellent.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}

export default About