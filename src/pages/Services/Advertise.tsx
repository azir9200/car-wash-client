import { Link } from "react-router-dom";

const Advertise = () => {
  return (
    <div className=" bg-base-200">
      <div className="lg:flex items-center justify-center  ">
        <div className="lg:w-1/2 relative">
          <img
            src="https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/services/ownership-landing-page-3.jpg.ximg.l_12_m.smart.jpg"
            className="w-3/4 rounded-lg shadow-2xl"
          />
          <img
            src="https://files.gandi.ws/ea/ba/eaba1c98-9fed-440a-a08d-75f3f4c697ed.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">Advertise Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <Link to="/about">
            <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
              Get More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
