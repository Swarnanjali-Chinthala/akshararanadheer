import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function Footer() {

  const { t } = useContext(LanguageContext);

  return (

    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-2">
            AksharaRanadheer
          </h2>

          <p className="text-xs md:text-sm">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base">
            {t.footer.quickLinks}
          </h3>

          <ul className="space-y-1 text-xs md:text-sm">
            <li>{t.navbar.home}</li>
            <li>{t.navbar.mutualFunds}</li>
            <li>{t.navbar.sip}</li>
            <li>{t.navbar.tools}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-sm md:text-base">
            {t.footer.contact}
          </h3>

          <p className="text-xs md:text-sm">
            Phone: +91 9346643007
          </p>

          <p className="text-xs md:text-sm">
            WhatsApp available for quick assistance
          </p>
        </div>

      </div>

      <div className="text-center text-xs md:text-sm pb-4">
        © {new Date().getFullYear()} AksharaRanadheer
      </div>

    </footer>

  );
}

export default Footer;