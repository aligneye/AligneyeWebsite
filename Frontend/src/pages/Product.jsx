import React, { useState, useRef, useEffect } from "react";
import {
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Star,
  Minus,
  Plus,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useCart } from "../context/CartContext";
import atWork from "../assets/atWork.webp";
import move from "../assets/move.webp";
import home from "../assets/home.webp";
import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";
import productImg1 from "../assets/img1.png";
import productImg2 from "../assets/img2.png";
import productImg3 from "../assets/img3.png";

const ProductPage = () => {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState(null);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const sectionRef = useRef(null);

  const product = {
    name: "Posture Corrector Neckband",
    price: 2999,
    originalPrice: 6999,
    discountPercent: 60,
    description:
      "A smart neckband that gently corrects your posture - so you don't have to think about it. Experience discreet, consistent support that adapts to your daily movements, guiding you towards better spinal alignment effortlessly.",
    images: [
      { url: productImg1, alt: "top view" },
      { url: productImg2, alt: "front view" },
      { url: productImg3, alt: "angle view" },
    ],
    reviews: { avg: 4.7, count: 842 },
  };

  const totalPrice = product.price * qty;

  const handleAddToCart = () => {
    addItem({
      id: 1,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.images[0],
    });
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        // Show sticky bar when the product info section is scrolled past
        setShowStickyBar(top < -50); // A small offset for better feel
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const carouselItems = [
    {
      title: "Real-Time Posture Feedback",
      description:
        "AlignEye gently vibrates when you slouch, helping you build awareness and naturally realign throughout your day.",
      details:
        "When slouching is detected, AlignEye vibrates lightly to remind you. This promotes subconscious correction and long-term muscle memory.",
      mobileMockupSrc: "/assets/carousel-1.png",
    },
    {
      title: "Activity & Sedentary Tracking",
      description:
        "Understand your daily posture trends, sitting time, and upright streaks via the AlignApp dashboard.",
      details:
        "All movement and stillness is recorded, helping you visualize patterns and adopt healthier routines without manual effort.",
      mobileMockupSrc: "/assets/carousel-2.png",
    },
    {
      title: "AI-Personalized Coaching",
      description:
        "Receive insights, encouragement, and custom challenges to stay aligned, active, and confident throughout your day.",
      details:
        "The AlignApp learns from your posture data and sends smart nudges and progress milestones that evolve with your behavior.",
      mobileMockupSrc: "/assets/carousel-3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev < carouselItems.length ? prev + 1 : prev));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="bg-neutral-950 text-white pt-16 font-sans">
      {/* SECTION 1: Product Overview */}
      <section
        ref={sectionRef}
        className="min-h-screen max-w-6xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
      >
        {/* Product Images */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full font-sans text-neutral-200">
          {/* Vertical Thumbnails (desktop only) */}
          <div className="hidden lg:flex flex-col gap-3 w-auto">
            {product.images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(image)}
                className={`w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-md border-2 cursor-pointer transition-all duration-200 ${
                  mainImage.url === image.url
                    ? "border-teal-500 shadow-md"
                    : "border-neutral-700 hover:border-neutral-500"
                } bg-neutral-800`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex justify-center items-center w-full h-80 md:h-96 lg:h-[500px] bg-neutral-300 rounded-lg overflow-hidden shadow-sm border border-neutral-700">
            <img
              src={mainImage.url}
              alt={mainImage.alt}
              className="object-contain w-full h-full p-4"
            />
          </div>

          {/* Mobile Thumbnails */}
          <div className="flex flex-wrap lg:hidden gap-3 justify-center mt-4">
            {product.images.map((image, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(image)}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-md overflow-hidden border-2 cursor-pointer transition-all duration-200 ${
                  mainImage.url === image.url
                    ? "border-teal-500 shadow-md"
                    : "border-neutral-700 hover:border-neutral-500"
                } bg-neutral-800`}
              >
                <img
                  src={image.url}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* name */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            {product.name}
          </h1>

          {/* reviews */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                smSize={20}
                fill={
                  i < Math.floor(product.reviews.avg) ? "currentColor" : "none"
                }
                stroke="currentColor"
                className="drop-shadow-sm"
              />
            ))}
            <span className="text-sm sm:text-base text-white font-medium">
              {product.reviews.avg}
            </span>
          </div>

          {/* pricing */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <p className="text-2xl sm:text-3xl font-bold text-teal-400">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="line-through text-gray-500 text-base sm:text-lg">
                ₹{product.originalPrice.toLocaleString()}
              </p>
              <span className="text-xs sm:text-sm bg-red-500 text-white font-semibold px-3 py-1 rounded-full border border-red-700 animate-bounce relative">
                {product.discountPercent}% OFF
                <div className="absolute -top-1 -right-0.5 w-2 h-2 bg-red-500 rounded-full animate-ping" />
              </span>
            </div>

            <p className="text-sm text-green-500 font-medium">
              Limited Time Offer – Ends Soon!
            </p>
          </div>

          {/* description */}
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <div className="flex items-center justify-center border border-neutral-700 rounded-lg overflow-hidden shadow-sm w-full sm:w-auto">
              <button
                onClick={() => qty > 1 && setQty(qty - 1)}
                className="p-2 sm:p-3 hover:bg-neutral-800 hover:cursor-pointer text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={qty === 1}
              >
                <Minus size={18} />
              </button>
              <span className="px-4 sm:px-5 text-base sm:text-lg font-medium text-white">
                {qty}
              </span>
              <button
                onClick={() => setQty(qty + 1)}
                className="p-2 sm:p-3 hover:bg-neutral-800 hover:cursor-pointer text-gray-300 transition-colors"
              >
                <Plus size={18} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 bg-teal-600 hover:cursor-pointer text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
          </div>

          <p className="text-base sm:text-lg text-gray-200 font-bold pt-2">
            Total: ₹{totalPrice.toLocaleString()}
          </p>
        </div>
      </section>

      {/* SECTION 2: Key Benefits */}
      <section className="bg-gray-50 py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-gray-900">
            Why Aligneye Works
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base md:text-lg">
            Thoughtfully engineered to improve your posture without disrupting
            your lifestyle.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Smart Posture Alerts",
                description:
                  "Get gentle haptic feedback whenever you start slouching, encouraging immediate correction.",
                icon: CheckCircle,
              },
              {
                title: "App Connectivity",
                description:
                  "Track posture progress and customize feedback using the intuitive Aligneye app.",
                icon: CheckCircle,
              },
              {
                title: "All-Day Battery",
                description:
                  "10+ hours of active usage to support your posture throughout your workday.",
                icon: CheckCircle,
              },
              {
                title: "Featherlight Design",
                description:
                  "So lightweight and discreet you'll forget you're wearing it, perfect for all-day wear.",
                icon: CheckCircle,
              },
              {
                title: "One-Size Fits All",
                description:
                  "Adjustable, ergonomic fit designed for comfort on all body types and sizes.",
                icon: CheckCircle,
              },
              {
                title: "Use It Anywhere",
                description:
                  "Whether you're at your desk, on a walk, or lounging - it works silently in the background.",
                icon: CheckCircle,
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg sm:rounded-xl p-5 hover:cursor-pointer sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-teal-600 mb-2 sm:mb-3">
                  <benefit.icon
                    size={24}
                    smSize={30}
                    className="inline-block"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Real-Life Use Cases */}
      <section className="bg-gray-100 text-gray-900 w-full overflow-hidden pb-16">
        {/* Heading */}
        <div className="text-center px-4 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Designed for <span className="text-teal-600">Your Daily Life</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            Whether you're working, walking, relaxing, or creating - Aligneye
            ensures your posture stays aligned without interrupting your flow.
          </p>
        </div>

        {/* Full-Width Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-full gap-0">
          {[
            {
              title: "At Work",
              image: atWork,
              details: [
                "Perfect for long desk sessions",
                "Provides subtle reminders",
                "Improves focus with better posture",
              ],
            },
            {
              title: "On the Move",
              image: move,
              details: [
                "Tracks posture while walking or commuting",
                "Real-time feedback via AlignApp",
                "Lightweight and discreet fit",
              ],
            },
            {
              title: "At Home",
              image: home,
              details: [
                "Encourages healthy posture during daily activities",
                "Provides gentle reminders while working or studying",
                "Supports comfort and focus in your home environment",
              ],
            },

            // Removed the 4th "While Creating" item
          ].map((item, i) => (
            <div
              key={i}
              className="relative group w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden hover:cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-white max-w-xs sm:max-w-sm space-y-3 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-gray-100 list-disc list-inside leading-relaxed">
                    {item.details.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Title Badge */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white text-lg sm:text-xl font-semibold px-4 py-2 rounded shadow-md transition-opacity duration-300 group-hover:opacity-0">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Technical Specifications */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Left Column: Intro */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Precision-Engineered for{" "}
              <span className="text-teal-600">Everyday Comfort</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Every detail of the posture corrector neckband is built with your comfort
              and alignment in mind, from feather-light materials to smart
              motion sensors. Here's a look under the hood.
            </p>
          </div>

          {/* Right Column: Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-6 text-base">
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Battery Life</p>
              <p className="text-gray-600">Up to 10 hours on a single charge</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Material</p>
              <p className="text-gray-600">
                Soft-touch silicone, skin-safe coating
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Sensors</p>
              <p className="text-gray-600">Smart IMU sensors</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Connectivity</p>
              <p className="text-gray-600">
                Bluetooth 5.2 - seamless sync with app
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 py-1">
              <p className="font-bold text-gray-800 mb-0.5">Haptics</p>
              <p className="text-gray-600">
                Subtle vibration feedback – 3 adjustable modes
              </p>
            </div>
          </div>
        </div>
        {/*more textual info */}
        <div className="text-black mt-10 mr-10 ml-10"></div>
      </section>

      {/* SECTION 6: Testimonials */}
      <section className="relative bg-white py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            What <span className="text-teal-600">Our Users</span> Say
          </h2>
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base md:text-lg">
            Real stories from real people who improved their posture with
            Aligneye.
          </p>

          {/* Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={12}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              breakpoints={{
                // Mobile: 1 slide
                640: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                // Tablet: 2 slides
                768: {
                  slidesPerView: 2,
                  spaceBetween: 16,
                },
                // Desktop: 3+ slides
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="pb-10"
            >
              {[
                {
                  avatar: user1,
                  quote:
                    "Working from home, my posture suffered from long hours at the laptop. Aligneye's gentle nudges were a lifesaver. My chronic back pain has reduced, and I feel so much more productive now. It's a fantastic solution.",
                  name: "Vikram Reddy",
                },
                {
                  avatar: user2,
                  quote:
                    "As a teacher, I'm on my feet all day. Aligneye helped me stop slouching and significantly improved my alignment. I now have far less fatigue at the end of the day. Highly recommend to fellow educators!",
                  name: "Sandeep Kumar",
                },
                {
                  avatar: user3,
                  quote:
                    "I was skeptical, but the results speak for themselves. After using the neckband, I've noticed a significant and lasting improvement in my posture. I'm now holding myself up straighter without even thinking about it. A fantastic device!",
                  name: "Ananya Sharma",
                },
                {
                  avatar: user4,
                  quote:
                    "I used to suffer from constant neck and shoulder pain from my desk job. Neckband's gentle reminders were a game-changer. My pain is almost gone, and I feel so much better after just a few weeks of use.",
                  name: "Rohan Patel",
                },
                {
                  avatar: user5,
                  quote:
                    "My posture was a mess from years of desk work. Aligneye's gentle reminders and targeted exercises have made a huge difference. I feel taller and more aligned, and my confidence has improved as a result.",
                  name: "Priya Das",
                },
              ].map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="h-[240px] sm:h-[250px] md:h-[260px] bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between">
                    {/* Quote */}
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base italic leading-relaxed line-clamp-4">
                      “{t.quote}”
                    </p>

                    {/* User Info */}
                    <div className="mt-3 flex items-center gap-2 sm:gap-3">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-300 ring-1 ring-gray-200"
                      />
                      <div className="text-left">
                        <h4 className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base">
                          {t.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows - Visible on All Devices */}
            <button className="testimonial-prev hover:cursor-pointer absolute top-1/2 -left-2 sm:-left-3 md:-left-4 transform -translate-y-1/2 z-10 bg-white p-1.5 sm:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
            <button className="testimonial-next hover:cursor-pointer absolute top-1/2 -right-2 sm:-right-3 md:-right-4 transform -translate-y-1/2 z-10 bg-white p-1.5 sm:p-2 rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 active:scale-95 transition-all duration-200 focus:outline-none">
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: Frequently Asked Questions */}
      <section className="bg-gray-100 mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 text-center text-teal-600">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
          {[
            {
              q: "How do they help with posture?",
              a: "They detect slouching and give you gentle haptic reminders to correct your posture-subtle yet effective. This active feedback helps build muscle memory over time.",
            },
            {
              q: "Is there an app?",
              a: "Yes, the Aligneye app connects via Bluetooth to display posture data and allows customization of feedback intensity and alert frequency. Available for iOS and Android.",
            },
            {
              q: "Battery life?",
              a: "Up to 10 hours of active use on a single charge, with quick-charging capabilities for on-the-go convenience.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left text-gray-800 font-semibold bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base md:text-lg"
              >
                <span className="pr-4">{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp
                    size={20}
                    className="text-teal-600 transform transition-transform"
                  />
                ) : (
                  <ChevronDown
                    size={20}
                    className="text-gray-500 transform transition-transform rotate-180"
                  />
                )}
              </button>

              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="px-5 sm:px-6 pb-5 text-gray-600 bg-white text-sm sm:text-base leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky Add to Cart Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full bg-white shadow-2xl py-3 px-4 sm:px-6 lg:px-12 z-50 border-t border-gray-200"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
              {/* Product Info (horizontal on mobile) */}
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
                <h3 className="text-sm font-bold text-gray-800 truncate flex-1 text-left">
                  {product.name}
                </h3>
                <span className="text-base sm:text-lg font-bold text-teal-600 whitespace-nowrap">
                  ₹{totalPrice.toLocaleString()}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center hover:scale-105"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Confirmation Toast */}
            <AnimatePresence>
              {showConfirmation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-green-600 text-white text-sm px-4 py-2 rounded-lg shadow-xl flex items-center gap-2 whitespace-nowrap"
                >
                  <CheckCircle size={18} />
                  <span>Item Added!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductPage;
