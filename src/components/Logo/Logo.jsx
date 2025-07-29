import { FaLeaf } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="text-2xl flex items-center gap-3 font-bold uppercase interactive">
      <div className="gradient-text font-poppins text-3xl">
        Fruit <span className="gradient-text-warm">Store</span>
      </div>
      <FaLeaf className="text-accent-500 text-2xl animate-bounce-gentle" />
    </div>
  );
};

export default Logo;