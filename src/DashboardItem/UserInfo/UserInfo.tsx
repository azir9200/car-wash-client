import { useGetMeQuery } from "@/redux/Api/getMeApi";
import { logout } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useGetMeQuery(undefined);
  const myself = data?.data;

  // Handle logout and navigate to home
  const handleLogout = () => {
    dispatch(logout()); // Logout the user
    navigate("/"); // Redirect to the home page after logout
  };

  return (
    <div className=" mx-auto p-8 flex justify-center items-center  bg-slate-500 rounded-md">
      <div className=" bg-white dark:bg-gray-800 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 rounded-xl shadow-xl p-8">
        {/* Profile Image */}
        <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden shadow-md ">
          <img
            src={
              myself?.profileImage ||
              "https://gremcorpsarpg.com/images/avatars/default.jpg"
            }
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details */}
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Welcome, {myself?.name || "User"}!
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          We're thrilled to have you with us! 🎉
        </p>

        {/* User Info */}
        <div className="mt-6 space-y-4 text-left border-t border-gray-200 dark:border-gray-700 pt-4">
          <p className="text-lg text-gray-700 dark:text-gray-200">
            <span className="font-semibold">📧 Email:</span>{" "}
            {myself?.email || "N/A"}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            <span className="font-semibold">📱 Phone:</span>{" "}
            {myself?.phone || "N/A"}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            <span className="font-semibold">🏠 Address:</span>{" "}
            {myself?.address || "N/A"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition-all"
          >
            Go Home
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
