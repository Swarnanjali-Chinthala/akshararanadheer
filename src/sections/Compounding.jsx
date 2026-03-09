import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Compounding(){

  const { t } = useContext(LanguageContext);

  return(

    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
          {t.compounding.title}
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-10 text-sm md:text-base lg:text-lg">
          {t.compounding.description}
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 shadow rounded text-center w-full">

            <h3 className="font-bold mb-2 text-lg md:text-xl">
              {t.compounding.year1}
            </h3>

            <p>₹1,00,000 → ₹1,12,000</p>

          </div>

          <div className="bg-white p-6 shadow rounded text-center w-full">

            <h3 className="font-bold mb-2 text-lg md:text-xl">
              {t.compounding.year5}
            </h3>

            <p>₹1,76,000</p>

          </div>

          <div className="bg-white p-6 shadow rounded text-center w-full">

            <h3 className="font-bold mb-2 text-lg md:text-xl">
              {t.compounding.year10}
            </h3>

            <p>₹3,10,000</p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Compounding;