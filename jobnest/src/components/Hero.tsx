import React from "react";
import { BG2 } from "@/constants/data";
import Filter from "./Filter";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh]">
      {/* Background image with overlay */}
      <div
        style={{ backgroundImage: `url(${BG2})` }}
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full py-2"> {/* Increased z-index */}
        <Filter />
      </div>
    </section>
  );
};

export default Hero;