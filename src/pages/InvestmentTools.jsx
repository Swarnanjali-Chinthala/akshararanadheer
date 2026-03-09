import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import SIPCalculator from "../tools/SIPCalculator";
import SIPGrowthSimulator from "../tools/SIPGrowthSimulator";
import RetirementEstimator from "../tools/RetirementEstimator";

function InvestmentTools(){

  const { t } = useContext(LanguageContext);

  return(

    <div className="py-12 md:py-16 lg:py-20 px-4 md:px-8 space-y-16">

      <h1 className="text-3xl font-bold text-center">
        {t.tools.title}
      </h1>

      <SIPCalculator/>

      <SIPGrowthSimulator/>

      <RetirementEstimator/>

    </div>
  );
}

export default InvestmentTools;