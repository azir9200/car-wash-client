import { useLoginMutation } from "@/redux/Api/authApi";
import { setEmail, setPassword } from "@/redux/features/loginSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const dispatch = useAppDispatch();
  const { email, password } = useAppSelector((state: RootState) => state.login);
  const [login] = useLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password });
      const { success, data } = result?.data || {};

      if (success && data?.accessToken) {
        const { accessToken } = data;
        console.log("User access token:", accessToken);
        console.log("User access:", result);

        Swal.fire({
          title: "Your login Successful !",
          showClass: {
            popup: ` animate__animated animate__fadeInUp animate__faster  `,
          },
          hideClass: {
            popup: ` animate__animated animate__fadeOutDown  animate__faster `,
          },
        });
        navigate(from, { replace: true });
      } else {
        throw new Error("Login failed. No access token.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Registration failed! Please try again.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-full  bg-base-200">
      <div>
        <h1 className="text-3xl mb-8 text-center font-xl">Login First </h1>
      </div>
      <div className="lg:flex">
        <div className=" md:w-1/2 rounded-xl shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="p-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-success  text-2xl  "
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p>
            <Link to="/register">
              {" "}
              <div className="text-center text-lg">
                Don't have a account yet ?{" "}
                <span className="font-bold text-amber-800">Register</span>{" "}
              </div>{" "}
            </Link>
          </p>
        </div>
        <div className="text-center border  md:w-1/2 ">
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
