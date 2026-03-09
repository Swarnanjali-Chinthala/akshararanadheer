import { useState,useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function SIPCalculator(){

  const { t } = useContext(LanguageContext);

  const [sip,setSip] = useState(5000);
  const [years,setYears] = useState(10);
  const [rate,setRate] = useState(12);

  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  const futureValue =
    sip *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const invested = sip * months;

  return(

    <div className="bg-white shadow p-6 rounded-xl max-w-lg mx-auto px-4 md:px-6">

      <h2 className="text-xl font-bold mb-4">
        {t.tools.sipCalculator}
      </h2>

      <div className="mb-3">

        <label>Monthly Investment</label>

        <input
          type="number"
          value={sip}
          onChange={(e)=>setSip(e.target.value)}
          className="border w-full p-2"
        />

      </div>

      <div className="mb-3">

        <label>Years</label>

        <input
          type="number"
          value={years}
          onChange={(e)=>setYears(e.target.value)}
          className="border w-full p-2"
        />

      </div>

      <div className="mb-3">

        <label>Expected Return (%)</label>

        <input
          type="number"
          value={rate}
          onChange={(e)=>setRate(e.target.value)}
          className="border w-full p-2"
        />

      </div>

      <div className="mt-4">

        <p>
          Invested Amount: ₹{invested.toLocaleString()}
        </p>

        <p className="text-green-700 font-semibold">
          Future Value: ₹{Math.round(futureValue).toLocaleString()}
        </p>

      </div>

    </div>

  );
}

export default SIPCalculator;