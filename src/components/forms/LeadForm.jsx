import { useState, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function LeadForm(){

  const { t } = useContext(LanguageContext);

  const [form,setForm] = useState({
    name:"",
    phone:"",
    message:""
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit=(e)=>{
  e.preventDefault();

  const phoneNumber = "919346643007"; // Replace with your phone number

  const message = `Name: ${form.name}%0A
Phone: ${form.phone}%0A
Message: ${form.message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");
};

  return(

    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow rounded-xl space-y-4"
    >

      <input
        name="name"
        placeholder={t.contact.name}
        onChange={handleChange}
        className="border w-full p-2"
        required
      />

      <input
        name="phone"
        placeholder={t.contact.phone}
        onChange={handleChange}
        className="border w-full p-2"
        required
      />

      <textarea
        name="message"
        placeholder={t.contact.message}
        onChange={handleChange}
        className="border w-full p-2"
      />

      <button
        className="bg-green-600 text-white px-6 py-2 rounded w-full md:w-auto"
      >
        {t.contact.submit}
      </button>

    </form>
  );
}

export default LeadForm;