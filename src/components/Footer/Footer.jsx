import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50"></div>
      
      <div className="relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="modern-container flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <Logo />

          {/* Social Icons section */}
          <FooterLinks />
        </motion.div>
      </div>
    </footer>
  );
};

function FooterLinks() {
  const socialIcons = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-500" },
    { icon: FaYoutube, href: "#", color: "hover:text-red-600" },
  ];

  return (
    <div className="flex items-center gap-6 text-3xl text-gray-600 mt-8 md:mt-0">
      {socialIcons.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          className={`transition-all duration-300 transform hover:scale-125 ${social.color} interactive`}
        >
          <social.icon />
        </motion.a>
      ))}
    </div>
  );
}

export default Footer;