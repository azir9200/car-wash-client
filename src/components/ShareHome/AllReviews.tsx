/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllReviewQuery } from "@/redux/Api/reviewApi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AllReviews = () => {
  const { data: reviews, isLoading, isError } = useGetAllReviewQuery(undefined);
  const allReviews = reviews?.data;
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="text-center mt-10 text-lg text-gray-600">
        Loading reviews...
      </div>
    );
  }

  if (isError) {
    console.error(isError);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Customer Reviews
        </h2>
        <p className="text-gray-500 mt-2">
          See what our customers have to say!
        </p>
      </div>

      {allReviews?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allReviews.map((review: any) => (
            <div
              key={review._id}
              className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-lg">
                  {review.user?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.user?.name || "Unknown User"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Review Comment */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.comment}
              </p>

              {/* Star Rating */}
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, index) =>
                    index < review.rating ? (
                      <AiFillStar
                        key={index}
                        className="text-yellow-500 text-xl"
                      />
                    ) : (
                      <AiOutlineStar
                        key={index}
                        className="text-yellow-500 text-xl"
                      />
                    )
                  )}
                <span className="ml-2 text-gray-600 text-sm">
                  ({review.rating}/5)
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 mt-10 text-lg">
          No reviews available.
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
