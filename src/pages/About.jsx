import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function About() {

  const { t } = useContext(LanguageContext);

  return (

    <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20">

      <h1 className="text-3xl font-bold mb-6">
        {t.about.title}
      </h1>

      <p className="mb-6 text-gray-700 leading-relaxed">
        {t.about.description}
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        {t.about.inflation}
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        {t.about.focusTitle}
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-6">
        {t.about.points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p className="mb-6 text-gray-700 leading-relaxed">
        {t.about.mission}
      </p>

      <p className="mb-6 text-gray-700 leading-relaxed">
        {t.about.audience}
      </p>

      <p className="mb-8 text-gray-700 leading-relaxed">
        {t.about.closing}
      </p>

      <h2 className="text-xl font-semibold mb-4">
        {t.about.upcomingTitle}
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        {t.about.upcomingPoints.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
}

export default About;