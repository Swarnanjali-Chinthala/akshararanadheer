import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero() {

  const { t } = useContext(LanguageContext);
  const navigate = useNavigate();

  return (

    <div className="text-center py-12 md:py-16 lg:py-20 bg-gradient-to-r from-green-50 to-blue-50">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.h1
          initial={{ opacity:0, y:40 }}
          animate={{ opacity:1, y:0 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
        >
          {t.hero.title}
        </motion.h1>

        <p className="text-sm md:text-base lg:text-lg mb-6">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <button 
            className="bg-green-600 text-white px-6 py-3 rounded w-full md:w-auto"
            onClick={() => navigate("/mutualfunds")}
          >
            {t.hero.start}
          </button>

          <button 
            className="border px-6 py-3 rounded w-full md:w-auto"
            onClick={() => navigate("/contact")}
          >
            {t.hero.advisor}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Hero;