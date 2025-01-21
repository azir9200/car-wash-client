import { useAppSelector } from "../../redux/hooks";
import BookingDetails from "./BookingDetails";

const Cart = () => {
  const services = useAppSelector((store) => store.bookings.services);
  console.log("cart page", services);
  return (
    <div className="container mt-10 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40 ">
        <div className="space-y-5 lg:mt-0 mt-5">
          {services.length ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            services.map((service: any) => (
              <BookingDetails key={service._id} service={service} />
            ))
          ) : (
            <p className="text-2xl text-red-500 font-bold">
              {" "}
              You did not booked any service yet. Go to service page and booked
              a service.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
