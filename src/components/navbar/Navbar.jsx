import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import LanguageSwitcher from "../language/LanguageSwitcher";

function Navbar() {

  const { t } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div className="flex justify-between items-center px-4 md:px-8 py-4 shadow-md relative">

      <h1 className="text-xl md:text-2xl font-bold text-green-700">
        AksharaRanadheer
      </h1>

      <div className="hidden md:flex gap-6">

        <Link to="/" className="hover:text-green-600">{t.navbar.home}</Link>
        <Link to="/mutualfunds" className="hover:text-green-600">{t.navbar.mutualFunds}</Link>
        <Link to="/sip" className="hover:text-green-600">{t.navbar.sip}</Link>
        <Link to="/tools" className="hover:text-green-600">{t.navbar.tools}</Link>
        <Link to="/about" className="hover:text-green-600">{t.navbar.about}</Link>
        <Link to="/contact" className="hover:text-green-600">{t.navbar.contact}</Link>

      </div>

      <div className="flex items-center gap-4">

        <LanguageSwitcher />

        <button
          className="md:hidden flex flex-col"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-5 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-gray-800"></span>
        </button>

      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col">
          <Link to="/" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
          <Link to="/mutualfunds" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.mutualFunds}</Link>
          <Link to="/sip" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.sip}</Link>
          <Link to="/tools" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.tools}</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.about}</Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-gray-100" onClick={() => setIsOpen(false)}>{t.navbar.contact}</Link>
        </div>
      )}

    </div>
  );
}

export default Navbar;