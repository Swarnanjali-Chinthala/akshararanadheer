import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function LanguageSwitcher() {

  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select
      value={language}
      onChange={handleChange}
      className="px-3 py-1 border rounded bg-white"
    >
      <option value="en">English</option>
      <option value="te">తెలుగు</option>
      <option value="hi">हिंदी</option>
    </select>
  );
}

export default LanguageSwitcher;