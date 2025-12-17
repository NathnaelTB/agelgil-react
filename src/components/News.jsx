import news from '../data/news.js'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { BsNewspaper, BsArrowRight } from 'react-icons/bs'

const News = () => {


  return (
    <>
      <section className="section my-4 py-7">
        <div className="container">
          <p className="custom_font custom_title">What is New?</p>
          <p className="muted py-7">
            Explore our news feed for the most recent updates, insights, and
            trends in the packaging world. From sustainable advancements to
            industry breakthroughs, our curated news section keeps you informed
            and inspired. Join us in shaping the future of packaging innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {news.slice(0, 3).map((item) => (
              <Link to={`/news/${item.id}`} key={item.id} className="group h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out h-full flex flex-col border border-gray-100">

                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight group-hover:text-brown transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                      {item.body}
                    </p>

                    <div className="flex items-center text-brown font-medium pt-4 border-t border-gray-100 mt-auto">
                      <span className="mr-2">Read more</span>
                      <BsNewspaper className="transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                </div>
              </Link>
            ))}
          </div>

          <div className="w-full flex justify-center mt-12">
            <Link to="/news" className="bg-brown text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1">
              Explore what is new in Agelgil
              <BsArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </section >
    </>
  );
}

export default News