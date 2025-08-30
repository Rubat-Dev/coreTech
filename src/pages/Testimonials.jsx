import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Amit Verma",
    role: "CEO, TechCorp",
    feedback:
      "Working with this team was a game-changer for our business. They delivered scalable solutions on time and exceeded expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Neha Singh",
    role: "Marketing Head, BrightMedia",
    feedback:
      "The professionalism and technical expertise they bring is unmatched. Highly recommended for businesses looking to grow digitally.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rajesh Kumar",
    role: "CTO, FinEdge",
    feedback:
      "Outstanding experience! Their innovative approach helped us stay ahead in the competitive market. Truly a reliable partner.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sara Malik",
    role: "Founder, StartUp Hub",
    feedback:
      "They understood our vision perfectly and delivered a solution that exceeded our expectations. Highly trustworthy team.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-slate-900 to-blue-900 text-white py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center text-white relative z-10 mt-20">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 ">
          What Our <span className="text-orange-400">Clients</span> Say
        </h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          We build long-lasting partnerships with clients, delivering not just
          projects but premium experiences.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
         
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl hover:scale-[1.03] transition duration-500 ease-in-out h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex justify-center mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="gold" stroke="gold" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-gray-200 italic mb-6 flex-grow">
                  “{testimonial.feedback}”
                </p>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4 mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-pink-400 shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
};

export default Testimonials;
