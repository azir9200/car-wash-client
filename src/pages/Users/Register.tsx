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

  const [signUp] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await signUp({ name, email, role, phone, address, password });
    console.log("user=>", user);
    if (user ) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!user) {
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
    <div className="min-h-screen flex">
      {/* Left Side (Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center  bg-gray-100">
        <div className=" w-full py-0 rounded-lg shadow-xl ">
          <form onSubmit={handleSubmit} className="px-8">
            <div className="form-control">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => dispatch(setPassword(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="block mb-1 font-semibold">Phone</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => dispatch(setPhone(e.target.value))}
              />
            </div>
            <div className="form-control">
              <label className="block mb-1 font-semibold">Role</label>
              <select
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={role}
                onChange={(e) => dispatch(setRole(e.target.value))}
              >
                <option value="">Select your role</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="form-control">
              <label className="block mb-1 font-semibold">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => dispatch(setAddress(e.target.value))}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
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
          className="object-cover w-full h-full "
        />
      </div>
    </div>
  );
};

export default Register;
