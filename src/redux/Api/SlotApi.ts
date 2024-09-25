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
      query: (id) => ({
        url: `/slot/available/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreteSlotMutation, useGetAvailableSlotQuery } = slotApi;
