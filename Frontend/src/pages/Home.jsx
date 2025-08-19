import React from "react";

// libraries
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// icons
import {
  Play,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
  FolderSync,
  Bluetooth,
  BatteryFull,
  CheckCircle,
  ShoppingCart,
  ShoppingBag,
} from "lucide-react";

// assets
import product from "../assets/product_image.webp";
import aligneyeProductImage from "../assets/product_.webp";
import bgImage from "../assets/background.webp";
import feature1 from "../assets/SmartCoach.webp";
import feature2 from "../assets/SmartWalk.webp";
import feature3 from "../assets/SmartMeditation.webp";
import appFeature1 from "../assets/1000Exercises.webp";
import appFeature2 from "../assets/20SportsMode.webp";
import appFeature3 from "../assets/PersonalisedProgressTracking.webp";
import appFeature4 from "../assets/Community&Badges.webp";
import imgStep1 from "../assets/step1.webp";
import imgStep2 from "../assets/step2.webp";
import doctorImg from "../assets/doctor.webp";
import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";
import user3 from "../assets/user3.webp";
import user4 from "../assets/user4.webp";
import user5 from "../assets/user5.webp";

// components
import ChatBot from "../components/ChatBot";
import HandbookReminder from "../components/HandbookReminder";

// cart feature
import { useCart } from "../context/CartContext";


const Home = () => {
  const item = {
    id: 1,
    name: "Posture Corrector Neckband",
    price: 2999,
    quantity: 1,
    image: aligneyeProductImage,
  };

  const { addItem } = useCart();
  const handleAddToCart = () => {
    addItem(item);
  };

  return (
    <div>
      <ChatBot />

      <HandbookReminder />

      {/* section1: hero section */}
      <section
        className="relative z-10 px-6 pt-30 text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-400 tracking-wider uppercase">
                  <span className="text-teal-600">| </span>Posture. Redefined.
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  Transform Your Posture.
                </h1>
                <p className="text-gray-300 text-base md:text-lg">
                  With Aligneye's posture corrector neckband, align your body
                  and elevate your presence - wherever life takes you.
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 mt-4">
                <Link
                  to="/product"
                  className="w-full md:w-auto bg-teal-600 text-white font-medium px-6 py-3 rounded-full hover:bg-teal-500 hover:cursor-pointer transition-transform hover:scale-105"
                >
                  <div className="flex gap-2 items-center justify-center">
                    Get Early Access <ShoppingBag />
                  </div>
                </Link>
                <button
                  onClick={() => {
                    document
                      .getElementById("how-it-works-video")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });
                  }}
                  className="w-full md:w-auto border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-black hover:cursor-pointer transition-transform hover:scale-105"
                >
                  How It Works
                </button>
              </div>
            </div>
            {/* Right - Product */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={product}
                alt="Posture Corrector Neckband"
                className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      {/* section2: overall features and video section */}
      <section className="relative z-10 px-4 sm:px-6 py-12 md:py-16 text-black bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="space-y-4 sm:space-y-6 mb-10 md:mb-16 text-center md:text-left">
            <div className="text-xs sm:text-sm font-medium text-gray-600 tracking-wider uppercase">
              <span className="text-teal-600">| </span>Designed for Ease. Built
              for You.
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Experience the Difference
              <span className="block text-teal-600">With Aligneye</span>
            </h2>
          </div>
          {/* Product Video */}
          <div
            id="how-it-works-video"
            className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden aspect-[21/9] mb-10 md:mb-16"
          >
            <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/ZVy5krlFEqk?si=Cn6qvDeLtEw8X0JQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          {/* 3 Main Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-16">
            {[
              {
                img: feature1,
                tag: "Personalized Posture Guidance",
                title: "SMART COACH",
                desc: "An AI-powered coach that adapts to your behavior and gently trains you to improve over time.",
              },
              {
                img: feature2,
                tag: "Posture Tracking On the Go",
                title: "SMART WALK",
                desc: "Monitors your walking posture and provides instant haptic feedback to keep you aligned throughout the day.",
              },
              {
                img: feature3,
                tag: "Mind-Body Posture Sync",
                title: "SMART MEDITATION",
                desc: "Enhance your meditation with posture-aware breathing sessions and gentle alignment reminders.",
              },
            ].map((item, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                key={i}
                className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-101 hover:cursor-pointer"
              >
                {/* Image */}
                <div className="w-full aspect-[4/3] bg-black overflow-hidden">
                  <img
                    src={item.img}
                    alt={`feature-img-${i}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
                {/* Feature Text */}
                <div className="p-4 sm:p-5 md:p-6 space-y-1 sm:space-y-2 text-center md:text-left">
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-400 tracking-widest uppercase">
                    {item.tag}
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* CTA */}
          <div className="mt-8 text-center">
            <Link
              to="/product"
              className="bg-teal-600 hover:bg-teal-500  hover:scale-105 hover:cursor-pointer text-white font-medium px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform "
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* section3: device main features */}
      <section className="bg-neutral-950 py-16 sm:py-20 text-white min-h-screen flex flex-col justify-center items-center">
        {/* Heading */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            <span>Finally, </span>
            <span className="text-teal-500">Posture</span> That Lasts. For{" "}
            <span className="text-teal-500">You.</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Designed for real results, not just reminders.
          </p>
        </div>
        {/* Desktop: Feature around product image */}
        <div className="hidden lg:flex relative w-full max-w-7xl aspect-[16/9] mx-auto items-center justify-center">
          <img
            src={aligneyeProductImage}
            alt="Posture Corrector Neckband"
            className="relative z-10 w-full max-h-[400px] object-contain pt-5 mb-20"
            draggable="false"
          />
          {[
            {
              id: 2,
              icon: FolderSync,
              title: "Data Sync & Progress Tracking",
              description:
                "Automatically syncs posture data across devices and visualizes your improvement trends over time in the app.",
              position:
                "left-5 top-1/4 -translate-y-1/2 text-left items-end ml-10",
            },
            {
              id: 3,
              icon: Bluetooth,
              title: "Powered by Bluetooth 5.2",
              description:
                "Enhanced range, stability, and energy efficiency with advanced Bluetooth 5.2 — for seamless posture feedback across devices.",
              position:
                "right-10 top-1/4 -translate-y-1/2 text-left items-start",
            },
            {
              id: 6,
              icon: BatteryFull,
              title: "Uninterrupted All-Day Power",
              description:
                "Enjoy extended usage with a long-lasting battery, keeping you aligned throughout your busiest days.",
              position:
                "bottom-15 left-1/2 -translate-x-1/2 text-left items-center",
            },
            {
              id: 4,
              icon: ShieldCheck,
              title: "Integrated Multi-Function Controls",
              description:
                "Easily switch modes, control feedback, or power the device with a single intuitive button—no app required.",
              position: "left-5 bottom-50 text-left items-end ml-10",
            },
            {
              id: 5,
              icon: RotateCcw,
              title: "Vibrotactile Feedback",
              description:
                "Delivers gentle vibration alerts to guide posture correction without disrupting your workflow.",
              position: "right-10 bottom-50 text-left items-start",
            },
            {
              id: 1,
              icon: Truck,
              title: "Smart IMU Sensor",
              description:
                "Built-in 9-axis IMU sensor delivers precise motion tracking for real-time posture correction and detailed movement analytics.",
              position:
                "top-0 left-1/2 -translate-x-1/2 text-left items-center",
            },
          ].map((feature) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.id * 0.2 }}
              viewport={{ once: true }}
              key={feature.id}
              className={`absolute max-w-[400px] w-full px-4 ${feature.position}`}
            >
              <div className="flex items-start space-x-4">
                {React.createElement(feature.icon, {
                  className: "text-teal-400 flex-shrink-0 mt-1",
                  size: 32,
                  strokeWidth: 1.5,
                })}
                <div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                  <div className="w-20 h-0.5 bg-gray-500 mt-2"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Tablet & Below: Card layout under product image */}
        <div className="lg:hidden w-full max-w-3xl px-6 space-y-8">
          {/* Product Image */}
          <motion.img
            src={aligneyeProductImage}
            alt="Posture Corrector Neckband"
            className="w-full max-h-[300px] object-contain mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />
          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                id: 1,
                icon: FolderSync,
                title: "Data Sync & Progress Tracking",
                description:
                  "Automatically syncs posture data across devices and visualizes your improvement trends over time in the app.",
                position:
                  "left-5 top-1/4 -translate-y-1/2 text-left items-end ml-10",
              },
              {
                id: 2,
                icon: Bluetooth,
                title: "Powered by Bluetooth 5.2",
                description:
                  "Enhanced range, stability, and energy efficiency with advanced Bluetooth 5.2 — for seamless posture feedback across devices.",
                position:
                  "right-10 top-1/4 -translate-y-1/2 text-left items-start",
              },
              {
                id: 3,
                icon: BatteryFull,
                title: "Uninterrupted All-Day Power",
                description:
                  "Enjoy extended usage with a long-lasting battery, keeping you aligned throughout your busiest days.",
                position:
                  "bottom-15 left-1/2 -translate-x-1/2 text-left items-center",
              },
              {
                id: 4,
                icon: ShieldCheck,
                title: "Integrated Multi-Function Controls",
                description:
                  "Easily switch modes, control feedback, or power the device with a single intuitive button—no app required.",
                position: "left-5 bottom-50 text-left items-end ml-10",
              },
              {
                id: 5,
                icon: RotateCcw,
                title: "Vibrotactile Feedback",
                description:
                  "Delivers gentle vibration alerts to guide posture correction without disrupting your workflow.",
                position: "right-10 bottom-50 text-left items-start",
              },
              {
                id: 6,
                icon: Truck,
                title: "Smart IMU Sensor",
                description:
                  "Built-in 9-axis IMU sensor delivers precise motion tracking for real-time posture correction and detailed movement analytics.",
                position:
                  "top-0 left-1/2 -translate-x-1/2 text-left items-center",
              },
            ].map((feature) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.id * 0.2 }}
                viewport={{ once: true }}
                key={feature.id}
                className="flex items-start space-x-4 bg-neutral-900 p-4 rounded-xl"
              >
                {React.createElement(feature.icon, {
                  className: "text-teal-400 flex-shrink-0 mt-1",
                  size: 28,
                  strokeWidth: 1.5,
                })}
                <div>
                  <h3 className="text-sm sm:text-base font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                  <div className="w-16 h-0.5 bg-gray-600 mt-2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* section divider */}
      <div className="w-full h-0.5 bg-neutral-800 mx-auto"></div>

      {/* section4: working  */}
      <section className="bg-neutral-950 py-16 px-6 space-y-24">
        {/* Heading */}
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Your <span className="text-teal-500">2</span> Steps to Better
            Posture
          </h2>
        </div>
        {/* Steps */}
        {[
          {
            id: "01",
            title: "Wear & Connect",
            description:
              "Put on the Posture Corrector Neckband and connect it to your mobile app. It will give you gentle reminders to fix your posture throughout the day.",
            img: imgStep1,
            reverse: false,
          },
          {
            id: "02",
            title: "Track in Real Time",
            description:
              "The Posture Corrector Neckband discreetly monitors your posture and provides instant, subtle vibrations whenever you slouch, helping you become more aware of your alignment.",
            img: imgStep2,
            reverse: true,
          },
        ].map(({ id, title, description, img, reverse }) => (
          <div
            key={id}
            className={`
        flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
        items-center
        max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12
        gap-y-8 gap-x-12
      `}
          >
            {/* Text */}
            <div className="w-full lg:w-1/2 text-white text-left">
              <p className="text-4xl sm:text-5xl font-extrabold text-teal-500 mb-4">
                {id}
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                {title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 max-w-md">
                {description}
              </p>
            </div>
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={img}
                alt={`Step ${id}`}
                className="w-full h-auto object-contain rounded-xl shadow-xl"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </section>

      {/* section5: about the app */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 sm:mb-12 lg:mb-20 gap-6 md:gap-0">
            {/* Heading */}
            <div className="md:w-2/3 text-left space-y-3 sm:space-y-4">
              <p className="text-gray-600 text-sm sm:text-base">
                <span className="text-teal-600">|</span> Always with you
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                All Your Posture Insights. <br />
                <span className="text-teal-600">One Powerful App.</span>
              </h2>
            </div>
            {/* Subtext */}
            <div className="md:w-1/3 text-left">
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Get a clear view of your alignment history, receive posture
                coaching, and set long-term goals, all in the easy-to-use
                Aligneye App.
              </p>
            </div>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                id: 1,
                image: appFeature1,
                title: "1000+ Exercises",
                description:
                  "Access a vast library of posture-improving exercises tailored to different body types, needs, and fitness levels.",
              },
              {
                id: 2,
                image: appFeature2,
                title: "20+ Sports Mode",
                description:
                  "Track posture dynamics across 20+ sports and activities - from running to cycling - with mode-specific insights.",
              },
              {
                id: 3,
                image: appFeature3,
                title: "Personalised Progress Report",
                description:
                  "Receive detailed posture reports and real-time feedback, helping you measure improvement and stay motivated.",
              },
              {
                id: 4,
                image: appFeature4,
                title: "Community & Badges",
                description:
                  "Join a growing community, unlock achievement badges, and stay engaged as you improve your posture journey.",
              },
            ].map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: card.id * 0.2 }}
                viewport={{ once: true }}
                key={card.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-101 hover:cursor-pointer transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-40 sm:h-48 md:h-52 bg-gray-200 hover:scale-101 flex items-center justify-center overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* section6: the science and testimonials */}
      <section className="bg-neutral-950 py-20 px-4 sm:px-6 text-white relative z-10 overflow-hidden font-inter">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Unlocking Better Posture: Our{" "}
            <span className="text-teal-400">Proven Impact</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the transformative power of Aligneye, validated by
            science and celebrated by a thriving community.
          </p>
        </div>
        {/* The Science Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-28 sm:mb-32 px-2">
          {/* Left Text */}
          <div className="text-left space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              <span className="text-teal-400">The Science</span> Behind Your
              Transformation
            </h3>
            {/* Mobile short text */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed block sm:hidden">
              A clinically validated wearable developed with experts to improve
              posture - backed by real results.
            </p>
            {/* Full text for tablet/desktop */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed hidden sm:block">
              The Posture Corrector Neckband isn't just another wearable - it's a clinically validated
              posture correction solution developed in collaboration with
              orthopedic specialists, physiotherapists, and data scientists.
              Every feature is rooted in research and designed to deliver
              visible, lasting improvement.
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-5 h-5 mt-1 mr-3" />
                  ),
                  text: (
                    <>
                      <span className="text-white font-semibold">
                        Clinically tested
                      </span>{" "}
                      to improve postural symmetry by up to{" "}
                      <span className="text-teal-400 font-semibold">90%</span>.
                    </>
                  ),
                },
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-5 h-5 mt-1 mr-3" />
                  ),
                  text: (
                    <>
                      <span className="text-white font-semibold">
                        75% of users
                      </span>{" "}
                      report reduced neck and back pain within{" "}
                      <span className="text-teal-400 font-semibold">
                        just 3 weeks
                      </span>
                      .
                    </>
                  ),
                },
                {
                  icon: (
                    <CheckCircle className="text-teal-400 w-5 h-5 mt-1 mr-3" />
                  ),
                  text: (
                    <>
                      Developed with insights from{" "}
                      <span className="text-white font-semibold">
                        orthopedic doctors
                      </span>
                      ,{" "}
                      <span className="text-white font-semibold">
                        physical therapists
                      </span>
                      , and{" "}
                      <span className="text-white font-semibold">
                        biomechanics researchers
                      </span>
                      .
                    </>
                  ),
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start text-sm sm:text-base text-gray-300 leading-relaxed"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Visual */}
          <div className="flex justify-center items-center p-4 sm:p-6 bg-neutral-900 rounded-2xl sm:rounded-3xl shadow-xl border border-neutral-700">
            <img
              src={doctorImg}
              alt="image of a doctor"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-0.5 bg-neutral-800 mx-auto my-10"></div>

        {/* Real User Feedback */}
        <div className="text-center mb-16 mt-20 px-2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Stories of <span className="text-teal-500">Real</span> Change
          </h3>
          {/* Mobile Short Text */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed block sm:hidden max-w-xl mx-auto">
            See how real users improved their posture and confidence with
            Aligneye.
          </p>
          {/* Desktop Full Text */}
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed hidden sm:block max-w-2xl mx-auto">
            Join the ones who have rediscovered comfort, confidence, and better
            health. These are their journeys with Aligneye.
          </p>
        </div>
        {/* Slider */}
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          grabCursor
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="w-full max-w-7xl mx-auto pb-16"
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {[
            {
              id: 1,
              avatar: user1,
              text: "Working from home, my posture suffered from long hours at the laptop. Aligneye's gentle nudges were a lifesaver. My chronic back pain has reduced, and I feel so much more productive now. It's a fantastic solution.",
              name: "Vikram Reddy",
              rating: 5,
              type: "user",
            },
            {
              id: 2,
              avatar: user2,
              text: "As a teacher, I'm on my feet all day. Aligneye helped me stop slouching and significantly improved my alignment. I now have far less fatigue at the end of the day. Highly recommend to fellow educators!",
              name: "Sandeep Kumar",
              rating: 4,
              type: "user",
            },
            {
              id: 3,
              avatar: user3,
              text: "I was skeptical, but the results speak for themselves. After using the neckband, I've noticed a significant and lasting improvement in my posture. I'm now holding myself up straighter without even thinking about it. A fantastic device!",
              name: "Ananya Sharma",
              rating: 5,
              type: "user",
            },
            {
              id: 4,
              avatar: user4,
              text: "I used to suffer from constant neck and shoulder pain from my desk job. Neckband's gentle reminders were a game-changer. My pain is almost gone, and I feel so much better after just a few weeks of use.",
              name: "Rohan Patel",
              rating: 3,
              type: "user",
            },
            {
              id: 5,
              avatar: user5,
              text: "My posture was a mess from years of desk work. Aligneye's gentle reminders and targeted exercises have made a huge difference. I feel taller and more aligned, and my confidence has improved as a result.",
              name: "Priya Das",
              rating: 4,
              type: "user",
            },
          ]
            .filter((item) => item.type === "user")
            .map((item) => (
              <SwiperSlide
                key={item.id}
                className="bg-neutral-800 rounded-3xl border-b-4 border-teal-600 shadow-xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:scale-105 hover:shadow-teal-600 min-h-[350px] justify-between"
              >
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-teal-600 shadow-lg"
                  draggable="false"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/000000/FFFFFF?text=Avatar";
                  }}
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < item.rating ? "text-yellow-400" : "text-gray-700"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow leading-relaxed">
                  "{item.text}"
                </p>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-purple-200">
                    {item.name}
                  </h4>
                  {item.designation && (
                    <p className="text-sm text-teal-300 mt-1">
                      {item.designation}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>

      {/* section divider */}
      <div className="w-full h-0.5 bg-neutral-800 mx-auto"></div>

      {/* section7: Pricing & Final CTA */}
      <section className="bg-neutral-950 py-16 sm:py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={aligneyeProductImage}
              alt="Posture Corrector Neckband"
              className="w-[240px] sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] object-contain rounded-xl shadow-lg"
              draggable="false"
            />
          </div>
          {/* Right: Pricing & CTA */}
          <div className="w-full lg:w-1/2 text-white text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              Invest in <span className="text-teal-500">Yourself.</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl">
              Aligneye gives you the power to monitor, correct, and sustain your
              posture - all from one intelligent device. Compact, comfortable,
              and designed to work with your day.
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
              {/* Original Price */}
              <div className="text-sm sm:text-base md:text-lg text-gray-400 line-through">
                ₹6,999
              </div>
              {/* Offer Price */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                ₹2,999
              </div>
              {/* Discount Badge */}
              <div className="relative flex items-center">
                <div className="bg-red-500 text-white font-semibold text-xs sm:text-sm px-3 py-1 rounded-full animate-bounce">
                  60% OFF
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
              </div>
            </div>
            {/* Tax Note */}
            <div className="text-sm text-gray-400">Inclusive of all taxes</div>
            <p className="text-sm text-green-500 font-medium">
              Limited Time Offer – Ends Soon!
            </p>
            {/* CTA Button */}
            <button
              onClick={handleAddToCart}
              className="bg-teal-600 hover:bg-teal-500 hover:scale-105 text-white cursor-pointer font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
            >
              Add to Cart <ShoppingCart className="w-5 h-5" />
            </button>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-4 mt-8">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
                <span className="text-sm sm:text-base">1-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
                <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
                <span className="text-sm sm:text-base">Free Shipping</span>
              </div>
            </div>
            {/* Tax Note */}
            <div className="text-sm text-gray-400 hover:cursor-pointer hover:text-gray-300">
              T&C Applied.
            </div>
          </div>
        </div>
      </section>

      {/* section8: Final CTA Section */}
      <section className="relative w-full bg-gray-50 text-black py-24 sm:py-28 md:py-32 px-6 overflow-hidden">
        {/* Background Glow Blob */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-br from-teal-400 to-transparent opacity-20 blur-[100px] rounded-full z-0" />
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            It's Time to <span className="text-teal-600">Realign.</span>
          </motion.h2>
          {/* Subtext - Mobile (Short) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto block md:hidden"
          >
            Your daily companion to feel better, stand taller, and stay aligned
            from Day 1.
          </motion.p>
          {/* Subtext - Desktop (Full) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto hidden md:block"
          >
            Not just a posture tracker - it's your daily companion in building
            long-term body awareness. Feel the difference in your focus, energy,
            and confidence starting from Day 1.
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4"
          >
            <Link
              to="/product"
              className="bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-teal-700 hover:cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
            >
              Shop Now →
            </Link>
            <Link
              to="/product"
              className="border border-gray-300 hover:scale-105 text-black px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:border-teal-500 hover:text-teal-600 hover:cursor-pointer transition-all duration-300"
            >
              Explore More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Home;
