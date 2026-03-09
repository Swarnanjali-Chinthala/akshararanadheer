function InfoCard({ title, description }) {

  return (

    <div className="bg-white shadow-md rounded-xl p-6 w-full">

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {description}
      </p>

    </div>

  );
}

export default InfoCard;