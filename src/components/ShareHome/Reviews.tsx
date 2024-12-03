/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  useCreteReviewMutation,
  useGetAllReviewQuery,
} from "@/redux/Api/reviewApi";
import { selectCurrentUser } from "@/redux/features/userSlice";
import { useAppSelector } from "@/redux/hooks";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitReview] = useCreteReviewMutation();
  const { data: reviews } = useGetAllReviewQuery(undefined);
  const allReviews = reviews?.data;
  const user = useAppSelector(selectCurrentUser);
  const userName = user?.name;
  const navigate = useNavigate();
 
  useEffect(() => {
    if (user?.token && window.location.hash === "#reviews") {
      document
        .getElementById("reviewSection")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [user]);

  const handleReviewSubmit = async () => {
    if (!user?.token) {
      Swal.fire("Please log in to submit a review.", "", "warning");
      return;
    }

    try {
      await submitReview({ rating, feedback, userId: user._id }).unwrap();
      setFeedback("");
      setRating(0);
      Swal.fire("Review submitted successfully!", "", "success");
    } catch (error) {
      Swal.fire("Error submitting review.", "", "error");
    }
  };

  return (
    <div className="bg-gray-100 p-8" id="reviewSection">
      <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>

      {/* Black Overlay for non-logged-in users */}
      {!user && (
        <div className="relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-neutral-300 m-4">
                You must log in to leave a review
              </p>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() =>
                  navigate("/login", { state: { from: "/#reviews" } })
                }
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      )}

      {user && (
        <div className="mt-4">
          <textarea
            className="w-full p-2 border border-gray-700 rounded-md"
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
                  className={`cursor-pointer text-2xl ${
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

      {/* Latest Reviews */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold">Latest Reviews</h3>
        {allReviews?.length ? (
          allReviews.slice(0, 2).map((review: any) => (
            <div
              key={review._id}
              className="mt-4 p-4 bg-white rounded-md shadow-sm"
            >
              <div>
                <p className="text-lg font-bold">{userName}</p>
                <p className="text-sm text-gray-600">{review.comment}</p>
                <p className="text-yellow-400">
                  {"★".repeat(review.rating)}{" "}
                  <span className="text-gray-500">({review.rating}/5)</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
        <button
          className="mt-4 text-blue-500 hover:text-blue-700"
          onClick={() => navigate("/review")}
        >
          See All Reviews
        </button>
      </div>

      {/* Overall Rating */}
      <div className="mt-8">
        <p className="text-lg font-semibold">Overall Rating: </p>
        <p className="text-2xl text-yellow-400">
          {allReviews?.length
            ? (
                allReviews.reduce(
                  (acc: any, review: { rating: number }) => acc + review.rating,
                  0
                ) / allReviews.length
              ).toFixed(1)
            : "No ratings yet"}
          /5
        </p>
      </div>
    </div>
  );
};

export default Reviews;
