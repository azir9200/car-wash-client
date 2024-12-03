/* eslint-disable @typescript-eslint/no-explicit-any */

import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setUser } from "@/redux/features/userSlice";
import { useLoginMutation } from "@/redux/Api/authApi";
import { verifyToken } from "@/redux/utils";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      console.log("user login", result);

      const user = verifyToken(result.data.accessToken);
      dispatch(setUser({ user: user, token: result.data.accessToken }));
      console.log("login", user);
      if (result.success && result.data?.accessToken) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration is successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        throw new Error(result.message || "Login failed. No access token.");
      }
    } catch (error: any) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration is successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };

  return (
    <div className="m-0 p-0 w-full ">
      <h1 className="text-3xl bg-slate-200 text-center p-4">Login First </h1>

      <div className="lg:flex items-center justify-center  bg-gray-400">
        <div className="lg:w-1/2 p-4 shadow-md rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 px-8">
            <div>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            New here?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              register first
            </Link>
          </p>
        </div>

        <div className=" lg:w-1/2 ">
          <img
            src="https://i.ibb.co/Kbt6HR3/istockphoto-1138947293-1024x1024.jpg"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
