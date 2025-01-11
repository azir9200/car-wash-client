import { baseApi } from "./baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    creteReview: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/reviews/create`,
          body: data,
        };
      },
    }),
    //get service api
    getAllReview: builder.query({
      query: () => ({
        url: "/api/reviews",
        method: "GET",
      }),
    }),
    // Fetch a single product by ID
    getReviewDetails: builder.query({
      query: (id: string) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
    }),
  }),
});
export const {
  useCreteReviewMutation,
  useGetAllReviewQuery,
  useGetReviewDetailsQuery,
} = serviceApi;
