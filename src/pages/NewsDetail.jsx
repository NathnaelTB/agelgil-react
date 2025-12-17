import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import news from "../data/news"

const NewsDetail = () => {
    const { id } = useParams()
    const [newsDetail, setNewsDetail] = useState({})


    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("Route param ID:", id);
        // Ensure strictly string comparison, trim whitespace just in case
        let currentNews = news.find(obj => String(obj.id).trim() === String(id).trim());

        if (currentNews) {
            console.log("Found news item:", currentNews.title);
            setNewsDetail(currentNews);
        } else {
            console.error("News item not found for ID:", id);
        }
    }, [id])

    if (!newsDetail || !newsDetail.title) {
        // Check if we've waited long enough or simply didn't find it
        // For now, let's return a debug view if it takes too long or fails
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <p className="text-xl font-semibold text-gray-700 mb-4">Loading article...</p>
                <p className="text-sm text-gray-500">ID: {id}</p>
                <Link to="/news" className="mt-4 text-brown underline">Return to News</Link>
            </div>
        );
    }


    return (
        <>
            <div className="min-h-screen bg-white pb-20">
                {/* Header background */}
                <div className="bg-gray-900 h-[400px] w-full absolute top-0 left-0 z-0"></div>

                <div className="container relative z-10" style={{ paddingTop: '200px' }}>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
                        <div className="h-[400px] w-full relative">
                            <img src={newsDetail.image} alt={newsDetail.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 md:p-12">
                                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">{newsDetail.title}</h1>
                            </div>
                        </div>

                        <div className="p-8 md:p-16">
                            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8 border-b border-gray-100 pb-8">
                                <span className="uppercase tracking-wider font-semibold text-brown">News Update</span>
                                <span>&bull;</span>
                                <span>Agelgil Eco Packaging</span>
                            </div>

                            <article className="prose prose-lg prose-brown max-w-none text-gray-600 leading-loose">
                                <p className="whitespace-pre-wrap">{newsDetail.body}</p>
                            </article>

                            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
                                <Link to="/news" className="text-brown font-bold hover:text-darkGreen transition-colors flex items-center">
                                    &larr; <span className="ml-2">Back to News</span>
                                </Link>
                                <div className="flex space-x-4">
                                    {/* Share icons could go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsDetail