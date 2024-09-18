import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteService: builder.mutation({
        query: (data) => {
          return {
            method: "POST",
            url: `/order/create`,
            body: data,
          };
        }
      }),
   
  }),
});
export const { useCreteServiceMutation  } = serviceApi;
