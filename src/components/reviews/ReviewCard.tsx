// const Review = ({ review }) => {
//   const { userName, rating, description, date } = review;

//   // Render stars using Unicode characters
//   const renderStars = (rating: number) => {
//     const filledStars = "★".repeat(rating);
//     const emptyStars = "☆".repeat(5 - rating);
//     return filledStars + emptyStars;
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-semibold">{userName}</h3>
//         <span className="text-sm text-gray-500">{date}</span>
//       </div>

//       <div className="mt-2 text-yellow-500 text-lg">{renderStars(rating)}</div>
//       <p className="text-xl italic font-bold ">"-- {description} --"</p>
//     </div>
//   );
// };

// export default Review;
