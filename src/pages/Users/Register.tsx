import { useSignUpMutation } from "@/redux/Api/authApi";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
} from "@/redux/features/registerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, phone, address } = useAppSelector(
    (state: RootState) => state.register
  );
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const register = await signUp({ name, email, password, phone, address });
      console.log("user Register", register);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed! Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const result = await signUp({
  //       name,
  //       email,
  //       phone,
  //       address,
  //       password,
  //     });

  //     if ("data" in result) {
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Registration successful!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //       navigate("/login");
  //     } else {
  //       throw new Error(
  //         (result.error)?.data || "Registration failed!"
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Registration Error:", error);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "error",
  //       title: "Registration failed! Please try again.",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };

  return (
    <div className="mx-auto">
      <div className="flex w-full bg-slate-200 rounded-lg pb-12">
        <Helmet>
          <title>Car-Service | Register</title>
        </Helmet>

        {/* Left Side (Form) */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-100">
          <div className="w-full py-0 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit} className="px-8">
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4 my-2"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4 my-2"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4 my-2"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-4 my-2"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="hidden lg:flex w-1/2">
          <img
            src="https://i.ibb.co/tCGG7fq/istockphoto-905301022-1024x1024.jpg"
            alt="Register"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
