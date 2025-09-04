import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden mt-20 py-20 px-4 sm:px-8 text-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-white drop-shadow-md animate-fade-in-down">
            About <span className="text-teal-400">Aligneye</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed animate-fade-in-up">
            Aligneye is a wearable health-technology firm utilizing intelligent
            sensors to improve posture and eye health, empowering users to
            reclaim alignment, confidence, and well-being.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-12 px-4 sm:px-8 max-w-5xl mx-auto space-y-12 lg:space-y-16">
        {/* Vision & Solutions */}
        <section className="bg-gray-800/50 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-10">
            We aim to optimize human well-being by designing wearable technology
            that offers real-time feedback on posture, movement, and eye strain.
            In today's screen-centric world, slouching has become a silent
            epidemic affecting health, focus, and self-image. At Aligneye, we
            decided not to accept this as the new normal.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-400">
            Our Solutions
          </h2>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-4 text-teal-300">
                Healthcare Solutions
              </h3>
              <ul className="list-none space-y-3 text-gray-300 text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>
                    Posture correction and ergonomics to avoid musculoskeletal
                    disorders.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>
                    Eye health tracking to mitigate digital eye strain.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>Drowsiness recognition for road safety.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-xl font-semibold mb-4 text-teal-300">
                Fitness & Wellness
              </h3>
              <ul className="list-none space-y-3 text-gray-300 text-base sm:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>Intelligent motion tracking during exercises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>
                    Customized training via real-time motion analysis.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 text-lg leading-none">
                    &bull;
                  </span>
                  <span>Activity tracking to develop healthy habits.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Product & Founder */}
        <section className="bg-gray-800/50 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
            Our Product
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-8">
            Our flagship product is a smart posture-correcting neckband that
            uses real-time tracking and subtle vibration feedback to remind
            users to improve their posture. Accompanied by a feature-rich app,
            it provides data-driven progress tracking and a library of
            meditations and exercises.
          </p>
          <p className="mb-10 text-center italic text-base sm:text-lg text-teal-400 font-medium">
            “Aligneye is more than a posture corrector - it's a daily wellness
            companion. By blending smart sensors, vibration therapy, and
            behavioral neuroscience, we empower users to stand taller, feel
            better, and reclaim confidence in just 21 days.”
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-teal-400">
            Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-72 md:w-44 md:h-72 rounded-xl overflow-hidden shadow-lg border-4 border-teal-500 flex-shrink-0">
              <img
                src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/harshitKumar.png"
                alt="Harshit Kumar"
                className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-xl font-bold text-teal-300">Harshit Kumar</h3>
              <p className="text-gray-300 text-base">Founder & Director</p>
              <p className="text-gray-300 text-base">
                Email:{" "}
                <a
                  href="mailto:harshitkumar2930@gmail.com"
                  className="text-teal-400 hover:underline"
                >
                  harshitkumar2930@gmail.com
                </a>
              </p>
              <p className="text-gray-300 text-base">Contact: +91 9955165091</p>
              <p className="mt-4 italic text-gray-400 text-sm sm:text-base">
                “We're not just fixing slouching. We're helping a generation
                rise taller - physically, mentally, and confidently.”
              </p>
            </div>
          </div>
        </section>

        {/* Supported & Company Info */}
        <section className="bg-gray-800/50 p-6 md:p-10 rounded-3xl shadow-2xl backdrop-blur-sm border border-gray-700 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-teal-400">
            Supported By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 animate-fade-in mb-16">
            <div className="w-36 sm:w-44 h-16 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-2">
              <img
                src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/PUIC.png"
                alt="PUIC, Panjab University"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="w-36 sm:w-44 h-16 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-2">
              <img
                src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/startupBihar.png"
                alt="Startup Bihar"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="w-36 sm:w-44 h-16 bg-gray-800 rounded-xl shadow-lg flex items-center justify-center p-2">
              <img
                src="https://aligneye-excercise-datastorage-bucket-2025.s3.us-east-1.amazonaws.com/website_content/assets/PU.png"
                alt="Technology Business Incubator, UIET"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-teal-400">
            Company Information
          </h2>
          <div className="text-center space-y-1 text-gray-400 text-sm sm:text-base">
            <p className="text-gray-300">Aligneye Vision Private Limited</p>
            <p>
              Registered Office: Ward 11, Sormar, Kalyanpur, Samastipur, Bihar
            </p>
            <p>
              Communication Address: C4, Technology Business Incubator,
              Mechanical Workshop, UIET, Panjab University, Chandigarh
            </p>
            <p>CIN: U32507BR2025PTC075174</p>
            <p>
              Supported by PUIC, Panjab University, Chandigarh & Startup Bihar
            </p>
          </div>
          <p className="mt-8 text-center text-lg italic font-medium text-teal-400">
            “We envision a world where technology doesn't just steal our posture
            - it helps restore it.”
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
