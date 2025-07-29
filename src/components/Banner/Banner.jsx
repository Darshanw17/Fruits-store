import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";
import BTN from "../BTN/BTN";

const Banner = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="modern-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20 rounded-full blur-3xl scale-150"></div>
        
        {/* Banner image */}
        <BannerImage />
        {/* Brand info */}
        <BannerInfo />
      </div>
    </section>
  );
};

function BannerImage() {
  return (
    <div className="flex justify-center items-center relative">
      {/* Glow effect behind image */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-200/30 to-secondary-200/30 rounded-full blur-2xl scale-110"></div>
      
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true, amount: 0.3 }}
        src={BannerPng}
        alt="Fruits"
        className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow-soft relative z-10 float-animation"
      />
    </div>
  );
}

function BannerInfo() {
  return (
    <div className="flex flex-col justify-center relative z-10">
      <div className="text-center md:text-left space-y-6 lg:max-w-[500px]">
        <motion.h1
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-6xl font-bold gradient-text text-shadow-lg">
          Fresh & Healthy
        </motion.h1>
        
        <TextP fadeUp={FadeUp(0.7)}>
          Discover our premium selection of fresh fruits, carefully sourced and delivered 
          to your doorstep. Experience the perfect blend of taste and nutrition with 
          every bite.
        </TextP>
        
        <TextP fadeUp={FadeUp(0.9)}>
          Join thousands of satisfied customers who trust us for their daily dose of 
          healthy, delicious fruits. Start your healthy journey today!
        </TextP>

        {/* button section */}
        <BTN fade={FadeUp(1.1)}>Learn More</BTN>
      </div>
    </div>
  );
}

function TextP({ children, fadeUp }) {
  return (
    <motion.p
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="text-lg text-gray-600 leading-relaxed">
      {children}
    </motion.p>
  );
}

export default Banner;