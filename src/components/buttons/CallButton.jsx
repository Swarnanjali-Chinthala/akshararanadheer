import { FaPhone } from "react-icons/fa";

function CallButton(){

  return(

    <a
      href="tel:+919346643007"
      className="fixed bottom-6 left-6 bg-blue-600 text-white p-4 rounded-full shadow-lg"
    >

      <FaPhone/>

    </a>

  );
}

export default CallButton;