import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function EquityVsOther() {

  const { t } = useContext(LanguageContext);

  const data = [
    { name: t.equityComparison.gold, returnValue: 8, icon: "🪙" },
    { name: t.equityComparison.fd, returnValue: 6, icon: "🏦" },
    { name: t.equityComparison.realEstate, returnValue: 9, icon: "🏠" },
    { name: t.equityComparison.equity, returnValue: 14, icon: "📈", highlight: true }
  ];

  return (
    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          {t.equityComparison.title}
        </h2>

        <p className="text-center text-gray-600 mb-10 text-sm md:text-base">
          {t.equityComparison.subtitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {data.map((item, i) => (

            <div
              key={i}
              className={`rounded-xl p-6 text-center shadow transition transform hover:-translate-y-1
                ${item.highlight
                  ? "bg-green-600 text-white scale-105"
                  : "bg-white"
                }`}
            >

              <div className="text-3xl mb-3">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>

              <p className={`text-2xl font-bold mt-2 
                ${item.highlight ? "text-white" : "text-green-700"}`}>
                {item.returnValue}%
              </p>

              <p className={`text-sm mt-2 
                ${item.highlight ? "text-green-100" : "text-gray-600"}`}>
                {t.equityComparison.averageReturn}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default EquityVsOther;