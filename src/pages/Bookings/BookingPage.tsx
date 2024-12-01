import { useGetUserQuery } from "@/redux/Api/authApi";
import { useGetMyBookingsQuery } from "@/redux/Api/bookingApi";
import { useGetServiceDetailsQuery } from "@/redux/Api/serviceApi";
import { useGetAvailableSlotQuery } from "@/redux/Api/SlotApi";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams<{ id: string }>();
  // Fetch service details
  const {
    data: serviceResponse,
    error,
    isLoading,
  } = useGetServiceDetailsQuery(id || "");
  const service = serviceResponse?.data;

  // Fetch slot details
  const { data: slotResponse } = useGetMyBookingsQuery(id || "");
  const slot = slotResponse?.data;
  console.log(" new slot", slot);

  // get USER info
  const { data: userResponse } = useGetUserQuery(undefined);
  const user = userResponse?.data;
  console.log(" user to hajj", user);
  // loader
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: </div>;
  }
  // Handle input changes
  const handleChange = (e: { target: { name: string; value: string } }) => {
    e.target.value;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      user,
      service: {
        name: service.name,
        price: service.price,
        // slot: selectedSlot,
      },
    };
    console.log("data", data);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center p-8 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-6">Checkout</h2>

        <form onSubmit={handleSubmit} className="lg:flex">
          {/* Left Side: Service Details */}
          <div className="md:w-1/2 bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-gray-800 font-semibold">
              Price: ${service.price}
            </p>

            {/* <p className="text-gray-600">
                Date: {selectedSlot.date} <br />
                Time: {selectedSlot.startTime} - {selectedSlot.endTime}
              </p> */}
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
  );
};

export default BookingPage;
