import { XCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white p-6">
      {/* Error Icon */}
      <XCircleIcon className="w-24 h-24 text-white mb-4 animate-pulse" />

      {/* Error Message */}
      <h1 className="text-4xl font-bold mb-2">Payment Failed</h1>
      <p className="text-lg text-white/80 mb-8">
        Oops! Something went wrong. Please try again or contact support.
      </p>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/checkout")}
          className="bg-white text-red-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-red-50 transition-transform transform hover:scale-105"
        >
          Retry Payment
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-red-600 transition-transform transform hover:scale-105"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
