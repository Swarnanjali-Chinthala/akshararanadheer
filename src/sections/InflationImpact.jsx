import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import InflationChart from "../charts/InflationChart";

function InflationImpact() {

  const { t } = useContext(LanguageContext);

  return (

    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">
          {t.inflation.title}
        </h2>

        {/* Simple explanation */}
        <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base lg:text-lg">
          {t.inflation.description}
        </p>

        {/* Example Card */}
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow mb-10">

          <h3 className="font-semibold text-lg mb-2">
            {t.inflation.exampleTitle}
          </h3>

          <p className="text-gray-600 text-sm md:text-base">
            {t.inflation.exampleText}
          </p>

        </div>

        {/* Axis Explanation */}
        <div className="text-center mb-6 text-gray-700 text-sm md:text-base">

          <p>
            <strong>{t.inflation.xAxis}:</strong> Years
          </p>

          <p>
            <strong>{t.inflation.yAxis}:</strong> Purchasing Power (₹)
          </p>

        </div>

        {/* Chart */}
        <div className="flex justify-center mb-10">
          <InflationChart />
        </div>

        {/* Takeaway Message */}
        <div className="max-w-3xl mx-auto bg-green-50 border border-green-200 p-6 rounded-xl text-center">

          <h3 className="font-semibold text-green-700 mb-2 text-lg md:text-xl">
            {t.inflation.takeawayTitle}
          </h3>

          <p className="text-gray-700 text-sm md:text-base">
            {t.inflation.takeawayText}
          </p>

        </div>

      </div>

    </div>

  );
}

export default InflationImpact;