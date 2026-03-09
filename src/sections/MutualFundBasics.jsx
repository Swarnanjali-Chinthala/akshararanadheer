import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import mutualFundImg from "../assets/images/mutual_funds.jpeg";
function MutualFundBasics() {

  const { t } = useContext(LanguageContext);

  return (

    <div className="py-16 px-6 bg-gray-50">

      <h2 className="text-3xl font-bold text-center mb-10">
        {t.mutualFund.title}
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        <img
          src={mutualFundImg}
          alt="Mutual Fund"
          className="rounded-lg"
        />

        <div className="mt-16">

          <p className="mb-4">
            {t.mutualFund.description1}
          </p>

          <p className="mb-4">
            {t.mutualFund.description2}
          </p>

          <ul className="list-disc ml-6 space-y-2">

            {t.mutualFund.points.map((point,index)=>(
              <li key={index}>{point}</li>
            ))}

          </ul>

        </div>

      </div>

    </div>

  );
}

export default MutualFundBasics;