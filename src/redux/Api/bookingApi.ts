import { baseApi } from "./baseApi";

const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/bookings/create`,
          body: data,
        };
      },
    }),
    //get service api
    getAllBookings: builder.query({
      query: () => ({
        url: "/bookings",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getMyBookings: builder.query({
      query: (id: string) => ({
        url: `/booking/my-bookings/${id}`,
        method: "GET",
      }),
    }),

    getSingleBookings: builder.query({
      query: (id: string) => ({
        url: `/bookings/single-booking/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreateBookingMutation,
  useGetAllBookingsQuery,
  useGetMyBookingsQuery,
} = bookingsApi;
