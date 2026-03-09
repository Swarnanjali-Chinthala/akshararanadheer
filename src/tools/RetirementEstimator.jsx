import { useState,useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function RetirementEstimator(){

  const { t } = useContext(LanguageContext);

  const [monthlyExpense,setMonthlyExpense] = useState(50000);
  const [years,setYears] = useState(25);

  const corpus = monthlyExpense * 12 * years;

  return(

    <div className="bg-white p-6 shadow rounded-xl max-w-lg mx-auto px-4 md:px-6">

      <h2 className="text-xl font-bold mb-4">
        {t.tools.retirement}
      </h2>

      <div className="mb-3">

        <label>Monthly Expense</label>

        <input
          type="number"
          value={monthlyExpense}
          onChange={(e)=>setMonthlyExpense(e.target.value)}
          className="border w-full p-2"
        />

      </div>

      <div className="mb-3">

        <label>Retirement Years</label>

        <input
          type="number"
          value={years}
          onChange={(e)=>setYears(e.target.value)}
          className="border w-full p-2"
        />

      </div>

      <p className="text-green-700 font-bold">

        Required Corpus: ₹{corpus.toLocaleString()}

      </p>

    </div>

  );
}

export default RetirementEstimator;