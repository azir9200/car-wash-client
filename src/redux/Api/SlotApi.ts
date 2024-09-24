import { baseApi } from "./baseApi";

const slotApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteSlot: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/slot/create`,
          body: data,
        };
      },
    }),
    //get service api
    getAvailableSlot: builder.query({
      query: (serviceId) => ({
        url: `slot/available?serviceId=${serviceId}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreteSlotMutation, useGetAvailableSlotQuery } = slotApi;
