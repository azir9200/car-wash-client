import { Link } from "react-router-dom";
import {
  FaCalendarCheck,
  FaCreditCard,
  FaBullhorn,
  FaBriefcase,
  FaDesktop,
  FaPlug,
} from "react-icons/fa";

const FeaturedServices = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Features & Integrations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card Items */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className={`text-${card.color} text-5xl mb-6`}>
                {card.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              {card.link && (
                <Link
                  to="/about"
                  className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

// Card Data Array
const cardData = [
  {
    title: "Booking Made Easy",
    description:
      "Schedule car washes seamlessly with a few clicks. Choose available slots that fit your schedule.",
    icon: <FaCalendarCheck />,
    color: "blue-500",
  },
  {
    title: "Payments",
    description:
      "Secure online payment options with integrations like AAMARPAY and more to make transactions smooth.",
    icon: <FaCreditCard />,
    color: "green-500",
  },
  {
    title: "Marketing & Sales",
    description:
      "Increase sales and engage customers with targeted marketing campaigns and promotions.",
    icon: <FaBullhorn />,
    color: "yellow-500",
  },
  {
    title: "Business & Client Management",
    description:
      "Manage your car wash services, bookings, and clients efficiently with built-in tools.",
    icon: <FaBriefcase />,
    color: "purple-500",
  },
  {
    title: "Website & Widgets",
    description:
      "Add customizable widgets to your website for real-time booking and service management.",
    icon: <FaDesktop />,
    color: "red-500",
  },
  {
    title: "Integrations",
    description:
      "Seamlessly integrate with third-party tools to expand your car wash business functionality.",
    icon: <FaPlug />,
    color: "indigo-500",
    link: "/integrations",
  },
];
