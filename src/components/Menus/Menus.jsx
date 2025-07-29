import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/orange.png";
import Fruit3 from "../../assets/fruits/avocado.png";
import Fruit4 from "../../assets/fruits/cherry.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "$4.99",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avocado",
    link: "/",
    price: "$5.99",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "/",
    price: "$2.99",
    img: Fruit4,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section className="section-padding">
      <div className="modern-container">
        <Header />
        <MenuCard />
      </div>
    </section>
  );
};

function Header() {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
      Our Fresh Menus
    </motion.h1>
  );
}

function MenuCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {MenusData.map((item) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FadeLeft(item.delay)}
          whileHover={{ scale: 1.05, y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          key={item.id}
          className="glass-card p-6 flex flex-col justify-center items-center gap-4 
                     hover-card group cursor-pointer">
          <div className="relative">
            <img
              src={item.img}
              alt="Fruit"
              className="w-20 h-20 object-contain transform group-hover:scale-110 
                         transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-200/20 to-secondary-200/20 
                           rounded-full blur-lg scale-150 opacity-0 group-hover:opacity-100 
                           transition-opacity duration-300"></div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 
                          transition-colors duration-300">
              {item.title}
            </h3>
            <p className="text-2xl font-bold gradient-text-warm">
              {item.price}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Menus;