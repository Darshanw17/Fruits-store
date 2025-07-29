import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="z-20 w-full h-screen top-20 left-0 absolute md:hidden block">
          {/* menu list */}
          <MenuList />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function MenuList() {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Products", href: "/products" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="glass-card m-6 p-8 backdrop-blur-lg">
      <ul className="flex flex-col items-center gap-8">
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-xl font-semibold text-gray-700 hover:text-primary-600 
                       transition-colors duration-300 interactive">
            <a href={item.href} className="uppercase tracking-wide">
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

ResponsiveMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default ResponsiveMenu;