import { Link } from "react-router-dom";

const FeaturedServices = () => {
  return (
    <div>
      <h1>Featured Services</h1>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center ">
          <h2 className="text-3xl font-bold mb-8">Features & Integrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
            {/* <!-- Booking Made Easy --> */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-calendar-check text-blue-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Booking Made Easy</h3>
              <p className="text-gray-600">
                Schedule car washes seamlessly with a few clicks. Choose
                available slots that fit your schedule.
              </p>
            </div>

            {/* <!-- Payments --> */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-credit-card text-green-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Payments</h3>
              <p className="text-gray-600">
                Secure online payment options with integrations like AAMARPAY
                and more to make transactions smooth.
              </p>
            </div>

            {/* <!-- Marketing & Sales --> */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-bullhorn text-yellow-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Marketing & Sales</h3>
              <p className="text-gray-600">
                Increase sales and engage customers with targeted marketing
                campaigns and promotions.
              </p>
            </div>

            {/* <!-- Business & Client Management --> */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-briefcase text-purple-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">
                Business & Client Management
              </h3>
              <p className="text-gray-600">
                Manage your car wash services, bookings, and clients efficiently
                with built-in tools.
              </p>
            </div>

            {/* <!-- Website & Widgets --> */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <i className="fas fa-desktop text-red-500 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Website & Widgets</h3>
              <p className="text-gray-600">
                Add customizable widgets to your website for real-time booking
                and service management.
              </p>
            </div>

            {/* <!-- Integrations --> */}
            <Link to="/integrations">
              <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
                <i className="fas fa-plug text-indigo-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-2">Integrations</h3>
                <p className="text-gray-600">
                  Seamlessly integrate with third-party tools to expand your car
                  wash business functionality.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedServices;
