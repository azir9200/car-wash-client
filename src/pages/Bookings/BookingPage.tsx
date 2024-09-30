import { useCreteOrderMutation } from "@/redux/Api/orderApi";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// Sample data to simulate selected service and slot
const selectedService = {
  name: "Premium Car Wash",
  description: "A complete exterior and interior car wash service.",
  price: 50, // Price in dollars or relevant currency
};

const selectedSlot = {
  startTime: "10:00 AM",
  endTime: "11:00 AM",
  date: "2024-09-28", // Auto-fill slot time
};

const BookingPage = () => {
  // const navigate = useNavigate();
  const [createOrder] = useCreteOrderMutation();
  // State for user input
  const [user, setUser] = useState({
    name: "zaif",
    email: "zaif@ph.com",
    phone: "0123456789",
    address: "New city, Honduras",
  });

  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      user,
      service: {
        name: selectedService.name,
        price: selectedService.price,
        slot: selectedSlot,
      },
    };

    try {
      const res = await createOrder(data).unwrap();
      if (res.success) {
         window.location.href = res.data.payment_url;
        console.log("azir res=>", res);
        // console.log("url go", res.data.payment_url);
      } else {
        console.error("Order creation failed:", res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center p-8 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>
        <div>
          <form onSubmit={handleSubmit} className="lg:flex">
            {/* Left Side: Service Details */}
            <div className="md:w-1/2 bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {selectedService.name}
              </h2>
              <p className="text-gray-600 mb-2">
                {selectedService.description}
              </p>
              <p className="text-gray-800 font-semibold">
                Price: ${selectedService.price}
              </p>
              <p className="text-gray-600">
                Date: {selectedSlot.date} <br />
                Time: {selectedSlot.startTime} - {selectedSlot.endTime}
              </p>
            </div>

            {/* Right Side: User Info Form */}
            <div className="md:w-1/2 bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Enter Your Information
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 text-left">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={user.address}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Pay Now Button */}
                <button
                  type="submit" // This ensures the form gets submitted
                  className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
