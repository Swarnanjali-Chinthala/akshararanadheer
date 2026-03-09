import { useState,useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

function SIPGrowthSimulator(){

  const { t } = useContext(LanguageContext);

  const [sip,setSip] = useState(5000);
  const [years,setYears] = useState(20);
  const [rate,setRate] = useState(12);

  const generateData=()=>{

    const data=[];
    let total=0;
    const monthlyRate = rate/12/100;

    for(let year=1;year<=years;year++){

      for(let month=1;month<=12;month++){

        total=(total + Number(sip))*(1+monthlyRate);

      }

      data.push({
        year:year,
        value:Math.round(total)
      });

    }

    return data;
  };

  const data=generateData();

  return(

    <div className="bg-white p-6 shadow rounded-xl max-w-3xl mx-auto px-4 md:px-6">

      <h2 className="text-2xl font-bold mb-6 text-center">
        {t.tools.growth}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <input
          type="number"
          value={sip}
          onChange={(e)=>setSip(e.target.value)}
          placeholder="Monthly SIP"
          className="border p-2 w-full"
        />

        <input
          type="number"
          value={years}
          onChange={(e)=>setYears(e.target.value)}
          placeholder="Years"
          className="border p-2 w-full"
        />

        <input
          type="number"
          value={rate}
          onChange={(e)=>setRate(e.target.value)}
          placeholder="Return %"
          className="border p-2 w-full"
        />

      </div>

      <div className="flex justify-center">

        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={data}
          >

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="year"/>
          <YAxis/>
          <Tooltip/>

          <Line
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={3}
          />

        </LineChart>
        </ResponsiveContainer>

      </div>

    </div>


  );
}

export default SIPGrowthSimulator;