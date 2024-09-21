/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useCreteReviewMutation,
  useGetAllReviewQuery,
} from "@/redux/Api/reviewApi";
import { useState } from "react";
import { useSelector } from "react-redux";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { data: reviews } = useGetAllReviewQuery(undefined);
  const [submitReview] = useCreteReviewMutation();
  const user = useSelector((state: any) => state.user);

  const handleReviewSubmit = async () => {
    if (!user?.token) return alert("Please log in to submit a review.");

    try {
      await submitReview({ rating, feedback, userId: user.id });
      setFeedback("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-2xl font-semibold">Leave a Review</h2>

      {!user?.token && (
        <div className="bg-black bg-opacity-50 p-4 mt-4 text-center">
          <p className="text-white">You must log in to leave a review</p>
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => (window.location.href = "/login")}
          >
            Log in
          </button>
        </div>
      )}

      {user?.token && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Write your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <div className="mt-4">
            <label className="text-lg">Rating: </label>
            <div className="inline-block ml-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`cursor-pointer ${
                    star <= rating ? "text-yellow-400" : "text-gray-400"
                  }`}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
            onClick={handleReviewSubmit}
          >
            Submit Review
          </button>
        </div>
      )}

      <div className="mt-8">
        <h3 className="text-xl font-semibold">Latest Reviews</h3>
        {reviews?.length ? (
          reviews.slice(0, 2).map((review: any) => (
            <div key={review.id} className="mt-4">
              <p className="text-lg font-bold">{review.userName}</p>
              <p className="text-sm text-gray-600">{review.feedback}</p>
              <div className="text-yellow-400">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-500">({review.rating}/5)</span>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        <button
          className="mt-4 text-blue-500 hover:text-blue-700"
          onClick={() => (window.location.href = "/reviews")}
        >
          See All Reviews
        </button>
      </div>

      <div className="mt-8">
        <p className="text-lg font-semibold">Overall Rating: </p>
        <p className="text-2xl text-yellow-400">
          {reviews?.length
            ? (
                reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length
              ).toFixed(1)
            : "No ratings yet"}
          /5
        </p>
      </div>
    </div>
  );
};

export default Reviews;
