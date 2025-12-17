import afomia from '../assets/afomia_message-removebg.png'

const Message = () => {
  return (
    <div>
      <section className="w-screen bg-gradient-to-r from-brown to-darkGreen text-white py-16">
        <div className="container grid md:grid-cols-2 items-center gap-10">
          <div className="flex justify-center md:justify-start">
            <img src={afomia} className="w-64 md:w-80 object-cover dropshadow-2xl rounded-full border-4 border-white/20" alt="CEO Message" />
          </div>
          <div className="relative">
            <span className="text-6xl text-white/20 absolute -top-8 -left-4 font-serif">"</span>
            <p className="font-medium text-xl md:text-2xl leading-relaxed italic opacity-95 relative z-10">
              We hope that our sustainable packing will not only significantly reduce deforestation, plastic use and plastic waste in Ethiopia, but also give farmers additional income for their agri-waste, and find new uses for invasive plants like water hyacinth.
            </p>
            <p className="mt-6 font-bold text-lg text-white/90 not-italic">— Afomia Andualem, CEO</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Message