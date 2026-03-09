import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function SIP(){

  const { t } = useContext(LanguageContext);

  return(

    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 text-center">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {t.sip.title}
        </h2>

        <p className="max-w-3xl mx-auto mb-8 text-sm md:text-base lg:text-lg">
          {t.sip.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div className="p-6 bg-white shadow rounded w-full">
            {t.sip.point1}
          </div>

          <div className="p-6 bg-white shadow rounded w-full">
            {t.sip.point2}
          </div>

          <div className="p-6 bg-white shadow rounded w-full">
            {t.sip.point3}
          </div>

        </div>

      </div>

    </div>

  );
}

export default SIP;