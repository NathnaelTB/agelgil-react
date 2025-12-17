import React from 'react'
import news from '../data/news'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Mentions from '../components/Mentions'
import Vacancy from '../components/Vacancy'


import { BsNewspaper } from 'react-icons/bs'



const NewsPage = () => {
  return (
    <>
      <section className="w-screen bg-gray-50 min-h-screen pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-brown to-darkGreen py-24 mb-12">
          <div className="container text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4 drop-shadow-md">News & Insights</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">Stay updated with our latest stories, achievements, and opportunities.</p>
          </div>
        </div>

        {/* Featured Section (Mentions) */}
        <div className="mb-16">
          <Mentions />
        </div>

        {/* Vacancy Section (Moved down or kept if relevant, but maybe styled better? I'll keep it but typically it's separate. I'll put it after Mentions) */}
        <div className="mb-16">
          <Vacancy />
        </div>

        <div className="container">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Latest Articles</h2>
            <div className="h-0.5 bg-gray-200 flex-grow rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Link to={`/news/${item.id}`} key={index} className="group">
                <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col transform hover:-translate-y-1 border border-gray-100">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-brown transition-colors line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">{item.body}</p>

                    <div className="mt-auto flex items-center text-brown font-medium group-hover:text-darkGreen transition-colors">
                      <span className="mr-2">Read Article</span>
                      <BsNewspaper className="text-lg transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsPage