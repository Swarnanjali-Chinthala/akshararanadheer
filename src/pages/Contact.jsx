import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import LeadForm from "../components/forms/LeadForm";

function Contact(){

  const { t } = useContext(LanguageContext);

  return(

    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20">

      <h1 className="text-3xl font-bold mb-8">
        {t.contact.title}
      </h1>

      <LeadForm/>

    </div>

  );
}

export default Contact;