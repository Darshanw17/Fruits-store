import { useState } from "react";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";
import Logo from "../Logo/Logo";

const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Products",
    url: "/products",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Shop",
    url: "/shop",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-white/20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="modern-container flex justify-between items-center py-4">
          <Logo />
          {/* menu section  */}
          <Menu />
          {/* Mobile Hamburger menu section  */}
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
      </nav>
      {/* Mobile Menu section */}
      <ResponsiveMenu open={isOpen} />
    </>
  );
};

function Menu() {
  return (
    <div className="hidden md:block">
      <ul className="flex text-gray-700 gap-8">
        {NavBarMenu.map((link) => (
          <li key={link.id} className="text-lg font-medium">
            <a
              href={link.url}
              className="inline-block py-2 px-4 font-semibold 
                         hover:text-primary-600 hover:bg-primary-50 
                         rounded-xl transition-all duration-300
                         relative group">
              {link.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 
                             group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
        <button className="text-2xl p-3 rounded-full hover:bg-primary-100 hover:text-primary-600 
                          transition-all duration-300 hover:scale-110 interactive">
          <MdOutlineShoppingCart />
        </button>
      </ul>
    </div>
  );
}

function Hamburger({ isOpen, setIsOpen }) {
  return (
    <div className="md:hidden block">
      <MdMenu 
        className="text-4xl text-gray-700 hover:text-primary-600 transition-colors duration-300 interactive" 
        onClick={() => setIsOpen(!isOpen)} 
      />
    </div>
  );
}

export default NavBar;