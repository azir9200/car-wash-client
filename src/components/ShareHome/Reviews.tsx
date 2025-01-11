import { useGetMeQuery } from "@/redux/Api/getMeApi";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Reviews: React.FC = () => {
  const navigate = useNavigate();

  const { data } = useGetMeQuery(undefined);
  const myself = data?.data;

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");
  const [reviews, setReviews] = useState<
    { rating: number; feedback: string }[]
  >([
    { rating: 5, feedback: "Great service! Highly recommended." },
    { rating: 4, feedback: "Fast and reliable car wash!" },
  ]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating && feedback) {
      setReviews([{ rating, feedback }, ...reviews].slice(0, 2)); // Keep last two reviews
      setRating(0);
      setFeedback("");
    }
  };

  // Calculate overall rating
  const overallRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length ||
    0;

  // Redirect to login if not authenticated
  const handleLoginRedirect = () => {
    navigate("/login", { state: { from: "/#reviews" } });
  };

  return (
    <section className="relative bg-gray-50 py-16 px-8" id="reviews">
      {!myself && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <button
            onClick={handleLoginRedirect}
            className="bg-white text-black px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Login to Leave a Review
          </button>
        </div>
      )}

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Share Your Feedback
        </h2>

        {myself && (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 shadow-lg rounded-lg"
          >
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
              required
            />

            {/* Star Rating */}
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`text-4xl cursor-pointer ${
                    (hover || rating) >= star
                      ? "text-yellow-500"
                      : "text-gray-300"
                  } transition-colors duration-200`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors"
            >
              Submit Review
            </button>
          </form>
        )}

        {/* Post-Submission Display */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Overall Rating: {overallRating.toFixed(1)} / 5 ⭐
          </h3>

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 mb-4 shadow-md rounded-lg border-l-4 border-indigo-500"
            >
              <div className="flex items-center mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl" />
                ))}
              </div>
              <p className="text-gray-700">{review.feedback}</p>
            </div>
          ))}

          <Link to="/allReviews">
            <button className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
              See All Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
