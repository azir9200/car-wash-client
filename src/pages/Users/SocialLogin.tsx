// import { useContext } from "react";
// import {
//   FaFacebook,
//   FaGithub,
//   FaGoogle,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";

// const SocialLogin = () => {
//   const { googleSignIn } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleGoogleSignIn = () => {
//     googleSignIn().then((result) => {
//       console.log(result.user);
//       const userInfo = {
//         email: result.user?.email,
//         name: result.user?.name,
//       };
//       axiosOpen.post("/users", userInfo).then((res) => {
//         console.log(res.data);
//         navigate("/");
//       });
//     });
//   };

//   return (
//     <div className="mt-12 mx-12">
//       <div>
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-block text-2xl bg-blue-500"
//         >
//           {" "}
//           <FaGoogle className="mr-4"></FaGoogle>Google{" "}
//         </button>
//       </div>

//       <div className="my-8">
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-block text-2xl bg-slate-400"
//         >
//           {" "}
//           <FaGithub className="mr-4"> </FaGithub> Github{" "}
//         </button>
//       </div>
//       <div>
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-block text-2xl bg-sky-300"
//         >
//           {" "}
//           <FaFacebook> </FaFacebook> FaceBook{" "}
//         </button>
//       </div>

//       <div className="my-8">
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-block text-2xl bg-green-300"
//         >
//           {" "}
//           <FaTwitter></FaTwitter> Twitter{" "}
//         </button>
//       </div>

//       <div>
//         <button
//           onClick={handleGoogleSignIn}
//           className="btn btn-block text-2xl bg-emerald-200"
//         >
//           {" "}
//           <FaLinkedin></FaLinkedin> Linkedin{" "}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SocialLogin;
