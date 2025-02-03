import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white p-6">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      {/* Success Icon */}
      <CheckCircleIcon className="w-24 h-24 text-white mb-4 animate-bounce" />

      {/* Success Message */}
      <h1 className="text-4xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-lg text-white/80 mb-8">
        Thank you for your payment. Your transaction was successful.
      </p>

      {/* Actions */}
      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white text-green-600 font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-green-50 transition-transform transform hover:scale-105"
        >
          Go to Dashboard
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-green-600 transition-transform transform hover:scale-105"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
