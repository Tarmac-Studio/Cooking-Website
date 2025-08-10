import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

// ServiceBubble Component
// ====================
interface ServiceBubbleProps {
  text: string;
  position: string;
  delay: number;
  bgColor: string;
  borderColor: string;
  pointerImage: string;
  pointerPosition: string;
  showPointerOnly?: boolean;
  showBubbleOnly?: boolean;
  stackIndex?: number;
}

export const ServiceBubble: React.FC<ServiceBubbleProps> = ({
  text,
  position,
  delay,
  bgColor,
  borderColor,
  pointerImage,
  pointerPosition,
  showPointerOnly = false,
  showBubbleOnly = false,
  stackIndex = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // Show only pointer image in original position (for expanded state)
  if (showPointerOnly) {
    return (
      <div
        className={`absolute ${position} transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        } flex-col items-center hidden xl:flex`}
      >
        {pointerPosition === "top" && (
          <img
            src={pointerImage}
            alt="pointer line"
            className="w-auto h-12 md:h-16 lg:h-20 xl:h-25"
          />
        )}

        {/* Invisible placeholder for spacing */}
        <div className="relative px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 py-1.5 md:py-2 lg:py-2.5 xl:py-3 opacity-0 text-xs md:text-sm lg:text-base">
          {text}
        </div>

        {pointerPosition === "bottom" && (
          <img
            src={pointerImage}
            alt="pointer line"
            className="w-auto h-12 md:h-16 lg:h-20 xl:h-25"
          />
        )}
      </div>
    );
  }

  // Show only bubble for the right stack (for expanded state)
  if (showBubbleOnly) {
    return (
      <div
        className="transform transition-all duration-1000 ease-out"
        style={{
          transitionDelay: `${300 + stackIndex * 100}ms`,
        }}
      >
        <div
          className="relative px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full flex items-center justify-center text-white font-medium text-xs sm:text-sm md:text-base gap-2 transition-transform duration-300 cursor-pointer backdrop-blur-3xl border-2 hover:scale-105 whitespace-nowrap"
          style={{
            backgroundColor: bgColor,
            borderColor,
            borderTopLeftRadius: "5px",
          }}
        >
          <img
            src={assets.Cursor}
            alt="corner decoration"
            className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-6 xl:-top-8 xl:-left-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
          />
          {text}
        </div>
      </div>
    );
  }

  // Original complete layout (for initial state)
  return (
    <div
      className={`absolute ${position} transform transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
      } flex-col items-center hidden xl:flex`}
    >
      {pointerPosition === "top" && (
        <img
          src={pointerImage}
          alt="pointer line"
          className="w-auto h-12 md:h-16 lg:h-20 xl:h-25"
        />
      )}

      <div
        className="relative px-3 md:px-4 lg:px-6 xl:px-8 2xl:px-10 py-1.5 md:py-2 lg:py-2.5 xl:py-3 rounded-full flex items-center justify-center text-white font-medium text-xs md:text-sm lg:text-base gap-2 transition-transform duration-300 cursor-pointer backdrop-blur-3xl border-2 hover:scale-105 whitespace-nowrap"
        style={{
          backgroundColor: bgColor,
          borderColor,
          borderTopLeftRadius: "5px",
        }}
      >
        <img
          src={assets.Cursor}
          alt="corner decoration"
          className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-6 lg:-left-6 xl:-top-8 xl:-left-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
        />
        {text}
      </div>

      {pointerPosition === "bottom" && (
        <img
          src={pointerImage}
          alt="pointer line"
          className="w-auto h-12 md:h-16 lg:h-20 xl:h-25"
        />
      )}
      {/* <div className="absolute inset-0 bg-black/10" /> */}
    </div>
  );
};
