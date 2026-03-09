import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import AssetAllocationChart from "../charts/AssetAllocationChart";

function AssetAllocation() {

  const { t } = useContext(LanguageContext);

  const assets = [
    {
      name: t.assetAllocation.equity,
      value: "60%",
      icon: "📈",
      color: "bg-green-500"
    },
    {
      name: t.assetAllocation.debt,
      value: "25%",
      icon: "🏦",
      color: "bg-blue-500"
    },
    {
      name: t.assetAllocation.gold,
      value: "15%",
      icon: "🪙",
      color: "bg-yellow-500"
    }
  ];

  return (

    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          {t.assetAllocation.title}
        </h2>

        <p className="max-w-2xl mx-auto text-center text-gray-600 mb-12 text-sm md:text-base lg:text-lg">
          {t.assetAllocation.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Chart */}
          <div className="flex justify-center">
            <AssetAllocationChart />
          </div>

          {/* Asset Explanation */}
          <div className="space-y-5">

            {assets.map((asset, i) => (
              <div
                key={i}
                className="flex items-center bg-white shadow rounded-lg p-4"
              >

                <div className={`w-4 h-4 rounded-full mr-4 ${asset.color}`}></div>

                <div className="text-2xl mr-4">
                  {asset.icon}
                </div>

                <div className="flex-1">

                  <h4 className="font-semibold">
                    {asset.name}
                  </h4>

                  <p className="text-sm text-gray-600">
                    {asset.value}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Diversification message */}

        <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto text-sm md:text-base">
          {t.assetAllocation.diversificationMessage}
        </p>

      </div>

    </div>

  );
}

export default AssetAllocation;