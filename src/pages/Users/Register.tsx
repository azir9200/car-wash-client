import { useSignUpMutation } from "@/redux/Api/authApi";
import {
  setAddress,
  setEmail,
  setName,
  setPassword,
  setPhone,
  setRole,
} from "@/redux/features/registerSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, email, password, phone, address, role } = useAppSelector(
    (state) => state.register
  );

  const [signUp, { isError, isSuccess }] = useSignUpMutation();
  // const navigate = useNavigate();
  // const location = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, role, phone, address, password });
    console.log("user=>", user);
    if (isSuccess) {
      // Show success toast
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (isError) {
      // Show error toast
      // toast.error("Registration failed! Please try again.", {
      //   className: "custom-toast-error",
      // });
    }
  };

  // const from = location.state?.from?.pathname || "/";

  return (
    <>
      <div className=" bg-base-200">
        <div>
          <h1 className="text-5xl mt-12 text-center font-2xl">
            SignUp Please!
          </h1>
        </div>
        <div className=" lg:flex">
          <div className="card px-8 md:w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => dispatch(setName(e.target.value))}
                />
                {/* {error.name && (
                  <span className="text-red-700">Name field is required</span>
                )} */}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email :</span>
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => dispatch(setEmail(e.target.value))}
                />
                {/* {errors.email && (
                  <span className="text-red-700">Photo URL is required</span>
                )} */}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
                {/* {errors.password && (
                  <p className="text-red-700">Email field is required</p>
                )} */}
              </div>
              <div>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="phone"
                  value={phone}
                  onChange={(e) => dispatch(setPhone(e.target.value))}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="address"
                  value={address}
                  onChange={(e) => dispatch(setAddress(e.target.value))}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role:</span>
                </label>
                <input
                  type="text"
                  id="role"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Role"
                  value={role}
                  onChange={(e) => dispatch(setRole(e.target.value))}
                />
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="px-10">
              <Link to="/login">
                {" "}
                <div className="text-center text-lg">
                  Already have an account ?{" "}
                  <span className="font-bold text-amber-800">Login</span>
                </div>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
