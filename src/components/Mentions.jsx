import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import africaPrize from '../assets/logo/africanPrize.png'
import africaPrizeThumbnail from '../assets/logo/africaThumbnail.png'
import news from '../data/news.js'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import { BsNewspaper } from 'react-icons/bs'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Mentions = () => {


    // return (
    //     <div className="w-container">
    //         {/* <Slider {...settings}>

    //             {/* Slide */}
    //         <div className="shadow-mg rounded-md p-3">
    //             <div className='flex flex-col'>
    //                 <img src={africaPrizeThumbnail} alt="" />

    //                 <a href="https://africaprize.raeng.org.uk/2022-cohort/afomia-andualem#:~:text=Electrical%20engineer%20Afomia%20Adnualem%20and,plastic%20as%20a%20raw%20material">
    //                     <div className="flex">
    //                         <div className="h-40 w-40 rounded-full">
    //                             <img src={africaPrize} alt="" className='object-cover' />
    //                         </div>
    //                         <p>Agelgil is a sustainable range of packaging and tableware made from agricultural by-products like wheat and rice straw.</p>
    //                     </div>
    //                 </a>
    //             </div>

    //         </div>
    //         {/* End Slide */}

    //         {/* Slide */}

    //     </Slider> * /}




    //     </div >
    // );


    return (
        <div className='container'>
            <div className="flex items-center space-x-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Featured Stories</h2>
                <div className="h-0.5 bg-gray-200 flex-grow rounded-full"></div>
            </div>

            <Swiper
                navigation
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper !pb-12"
            >
                {news.map((item, index) => {
                    if (index < 6) {
                        return (
                            <SwiperSlide key={item.id}>
                                <Link to={`/news/${item.id}`}>
                                    <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                                        <div className="h-64 md:h-96 relative overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-none"></div>
                                        </div>
                                        <div className='p-8 md:p-12 flex flex-col justify-center'>
                                            <div className="mb-4">
                                                <span className="bg-brown/10 text-brown px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Featured</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-brown transition-colors leading-tight">{item.title}</h3>
                                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 line-clamp-3">{item.body}</p>

                                            <div className="flex items-center text-brown font-bold group-hover:text-darkGreen transition-colors">
                                                <span>Read Full Story</span>
                                                <Icon icon="fluent:arrow-right-24-filled" className="ml-2 text-xl transform group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    }
                    return null;
                })}
            </Swiper>
        </div>
    )


}

export default Mentions;
