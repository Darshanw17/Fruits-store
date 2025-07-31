import { IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
 import LeafPng from "../../assets/Leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
import BTN from "../BTN/BTN";

const Hero = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="modern-container grid grid-cols-1 md:grid-cols-2 min-h-[80vh] relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 rounded-full blur-3xl scale-150"></div>
        
        {/* Brand info */}
        <Info />
        {/* Hero Images */}
        <HeroImage />
        {/* Leaf Images */}
        <LeafImage />
      </div>
    </section>
  );
};

function Info() {
  return (
    <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
      <div className="text-center md:text-left space-y-8 lg:max-w-[500px]">
        <motion.h1
          variants={FadeRight(0.6)}
          initial="hidden"
          animate="visible"
          className="text-responsive font-bold leading-tight text-shadow-lg">
          Healthy <br />
          Fresh <span className="gradient-text-warm">Fruits!</span>
        </motion.h1>
        
        <motion.p
          variants={FadeRight(0.9)}
          initial="hidden"
          animate="visible"
          className="text-2xl md:text-3xl font-medium text-gray-700 tracking-wide">
          Order Now For Fresh Healthy Life
        </motion.p>
        
        <motion.p
          variants={FadeRight(1.2)}
          initial="hidden"
          animate="visible"
          className="text-lg text-gray-600 leading-relaxed">
          Healthy and yummy food for fresh morning breakfast. Eat Daily for good
          health and mind. Order now and get 20% off on your first order!
        </motion.p>
        
        {/* button section */}
        <BTN fade={FadeRight(1.5)}>
          <span className="text-xl">
            <IoBagHandleOutline />
          </span>
          Order Now
        </BTN>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="flex justify-center items-center relative">
      {/* Glow effect behind image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl scale-110"></div>
      
      <motion.img
        initial={{ opacity: 0, x: 200, rotate: 75 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        src={HeroPng}
        alt="Fruit Plate"
        className="w-[350px] md:w-[550px] drop-shadow-soft relative z-10 float-animation"
      />
    </div>
  );
}

function LeafImage() {
  return (
    <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
      <motion.img
        initial={{ opacity: 0, y: -200, rotate: 75 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        src={LeafPng}
        alt="Leaf"
        className="w-full md:max-w-[300px] animate-float-slow"
      />
    </div>
  );
}

export default Hero;