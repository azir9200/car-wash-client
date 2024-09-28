/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllReviewQuery } from "@/redux/Api/reviewApi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AllReviews = () => {
  const { data: reviews, isLoading, isError } = useGetAllReviewQuery(undefined);
  const allReviews = reviews?.data;
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="text-center mt-10">Loading reviews...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-10">
        Failed to load reviews. Please try again.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">
          Customer Reviews
        </h2>
        {allReviews?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allReviews.map((review: any) => (
              <div
                key={review.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 bg-blue-500 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                    {review.user?.name?.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">
                      {review.user?.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <p className="text-gray-800 mb-4">{review.comment}</p>

                <div className="flex items-center">
                  {Array(5)
                    .fill(0)
                    .map((_, index) =>
                      index < review.rating ? (
                        <AiFillStar
                          key={index}
                          className="text-yellow-400 text-xl"
                        />
                      ) : (
                        <AiOutlineStar
                          key={index}
                          className="text-yellow-400 text-xl"
                        />
                      )
                    )}
                  <span className="ml-2 text-gray-600">
                    ({review.rating}/5)
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-10">
            No reviews available.
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
