import React, { useState } from "react";
import { assets, services, socials } from "../assets/assets";
import { ServiceBubble } from "./service";

const Home: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNotifyClick = async () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
      if (!email.trim()) {
        setToastMessage("Please Enter Your Email!");
        setTimeout(() => setToastMessage(""), 5000);
        return; // stop here, don’t submit or close form
      }

      try {
        setIsSubmitting(true);
        await fetch(
          "https://script.google.com/macros/s/AKfycbwTGmTeGSt3EZNgLAtw9isSc0KtvAdlciUfJ3IQVzrsWAVyDnh0oSloENVPMdrQ_QWuFw/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email,
              timestamp: new Date().toISOString(),
            }),
          }
        );

        setToastMessage("✅ Thank you! We'll notify you when we Launch.");
        setEmail("");
        setIsExpanded(false);
        setTimeout(() => setToastMessage(""), 5000);
      } catch (error) {
        console.error("Error saving email:", error);
        setToastMessage("❌ Something went wrong. Please try again.");
        setTimeout(() => setToastMessage(""), 3000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden bg-center flex flex-col"
      style={{
        backgroundImage: `url(${assets.background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Black sides */}
      <div className="absolute inset-0 bg-black" />

      {/* Dim main image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${assets.background})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.4,
        }}
      ></div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-center pt-6 sm:pt-8 md:pt-10 gap-1 flex-shrink-0">
        <img src={assets.Logo} alt="Logo" className="w-4 h-4 sm:w-5 sm:h-5" />
        <h2 className="text-white logo-font text-lg sm:text-xl md:text-2xl font-bold">
          Tarmac
        </h2>
      </div>

      {!isExpanded ? (
        /* INITIAL STATE */
        <div className="relative z-20 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 text-center">
          {services.map((service, index) => (
            <ServiceBubble key={index} {...service} />
          ))}

          <div className="relative z-10 px-4 sm:px-6 md:px-8 py-5 text-center max-w-4xl mx-auto">
            <p className="sub-text sat-font font-black text-lg md:text-xl uppercase mb-3 sm:mb-4">
              WE ARE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium sat-font main-text p-2 tracking-wide mb-3 sm:mb-4 leading-tight">
              Cooking Our Website
            </h1>
            <p className="sub-text sat-font font-medium sm:text-base md:text-lg lg:text-[19px] max-w-lg md:max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Great things take time — we're prepping a fresh digital experience
              that brings bold ideas to life.
            </p>

            <button
              onClick={handleNotifyClick}
              className="cyan-back sat-font cursor-pointer text-black font-medium text-base px-12 sm:px-16 md:px-20  py-3 rounded-full flex items-center justify-center gap-2 transition-colors duration-300 mx-auto w-fit"
            >
              Notify Me
              <img
                src={assets.arrow}
                alt="Arrow"
                className="w-5 sm:w-6 md:w-7 h-auto"
              />
            </button>
          </div>
        </div>
      ) : (
        /* EXPANDED STATE */
        <>
          <div className="absolute inset-0 z-5">
            {services.map((service, index) => (
              <ServiceBubble
                key={`pointer-${index}`}
                {...service}
                showPointerOnly={true}
              />
            ))}
          </div>

          <div className="relative z-20 flex-1 flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              {/* Text content on the left */}
              <div className="w-full lg:w-auto text-center lg:text-left">
                <div className="px-2 sm:px-4 md:px-8 py-5">
                  <p className="sub-text sat-font font-black text-sm sm:text-lg md:text-xl uppercase mb-3 sm:mb-4">
                    WE ARE
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-medium sat-font main-text p-2 tracking-wide mb-3 sm:mb-4 leading-tight">
                    Cooking Our Website
                  </h1>
                  <p className="sub-text sat-font font-medium text-sm sm:text-base md:text-lg lg:text-[19px] max-w-xs sm:max-w-lg md:max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8">
                    Great things take time — we're prepping a fresh digital
                    experience that brings bold ideas to life.
                  </p>
                  {/* Form container */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
                    {/* Email input */}
                    <div className="w-70 sm:w-auto sm:flex-1 lg:w-80">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        className="w-full px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 rounded-full bg-transparent border-2 border-[#00FFFF] text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-300 sat-font text-sm md:text-base"
                      />
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      onClick={handleNotifyClick}
                      disabled={isSubmitting}
                      className={`cyan-back sat-font cursor-pointer text-black font-medium text-sm md:text-base px-12 sm:px-16 md:px-20 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 w-70 sm:w-auto ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Subscribing..." : "Notify Me"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Services stack - hidden on mobile, visible on tablet+ */}
              <div className="hidden md:flex flex-col gap-y-6 lg:gap-y-10">
                {services.map((service, index) => (
                  <ServiceBubble
                    key={`stack-${index}`}
                    {...service}
                    showBubbleOnly={true}
                    stackIndex={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Toast ABOVE social links */}
      {toastMessage && (
        <div className="relative z-30 mb-4 sm:mb-6 mx-4 sm:mx-auto cyan-back text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg animate-bounce w-fit text-xs sm:text-sm">
          {toastMessage}
        </div>
      )}

      {/* Social Links */}
      <div className="sticky bottom-0 z-30 flex justify-center pb-6 bg-black bg-opacity-80">
        <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
          {socials.map(({ icon, link, alt }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-200 hover:scale-110"
            >
              <img
                src={icon}
                alt={alt}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
