// import { useState } from "react";
// import { loginHomeImg } from "../../../assets/Images";
// import { motion } from "framer-motion";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import axios from "axios";
// import { BASE_URL } from "../../Service/Api/Api";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// interface DealerState {
//   username: string;
//   phone: string;
//   gst: string;
//   email: string;
//   password: string;
// }

// export default function DealerRegistration() {
//   const [dealer, setDealer] = useState<DealerState>({
//     username: "",
//     phone: "",
//     gst: "",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoader, setIsLoader] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setDealer({
//       ...dealer,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     setIsLoader(true); // Show the loader while submitting the form

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/product/dealerregistration`, // API endpoint for registration
//         dealer,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log(response);

//       if (response.status >= 200 && response.status < 300) {
//         alert("Registration successful!");

//         // Reset form data
//         setDealer({
//           username: "",
//           phone: "",
//           gst: "",
//           email: "",
//           password: "",
//         });

//         // Redirect to the login page after successful registration
//         navigate("/dealer-login"); // Adjust the route if needed
//       } else {
//         alert("Error during registration. Please try again.");
//       }
//     } catch (error) {
//       // Handle errors
//       if (axios.isAxiosError(error)) {
//         console.error("Axios Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else if (error instanceof Error) {
//         console.error("Error:", error.message);
//         alert(`An unexpected error occurred: ${error.message}`);
//       } else {
//         console.error("Unexpected Error:", error);
//         alert("An unexpected error occurred. Please try again.");
//       }
//     } finally {
//       setIsLoader(false); // Hide the loader once the submission is done
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };

//   return (
//     <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
//       <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-[75rem]">
//         <div className="flex flex-col lg:flex-row">
//           {/* Image Section */}
//           <motion.div
//             className="relative w-full lg:w-1/2 flex justify-center items-center"
//             initial={{ x: "-100vw" }}
//             animate={{ x: 0 }}
//             transition={{ type: "spring", stiffness: 30 }}
//           >
//             <img
//               src={loginHomeImg}
//               alt="Dealer Registration"
//               className="h-[35rem] max-w-xs lg:max-w-[35rem]"
//             />
//           </motion.div>

//           {/* Form Section */}
//           <motion.div
//             className="w-full lg:w-1/2 p-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           >
//             <h2 className="Title">Dealer Registration</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Username <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={dealer.username}
//                   onChange={handleInput}
//                   placeholder="Enter your username"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Phone <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   id="phone"
//                   name="phone"
//                   value={dealer.phone}
//                   onChange={handleInput}
//                   placeholder="Enter your phone number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="gst"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   GST Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="gst"
//                   name="gst"
//                   value={dealer.gst}
//                   onChange={handleInput}
//                   placeholder="Enter your GST number"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={dealer.email}
//                   onChange={handleInput}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   Password <span className="text-red-500">*</span>
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     id="password"
//                     name="password"
//                     value={dealer.password}
//                     onChange={handleInput}
//                     placeholder="Enter your password"
//                     required
//                     className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute right-3 top-5 text-gray-600 focus:outline-none"
//                   >
//                     {showPassword ? <FaEyeSlash /> : <FaEye />}
//                   </button>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="px-8 py-4 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound]  hover:bg-[--black] hover:text-[--secound]"
//                 disabled={isLoader}
//               >
//                 {isLoader ? "Submitting..." : "Register Now"}
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </main>
//     </section>
//   );
// }

import { useState } from "react";
import { loginHomeImg } from "../../../assets/Images";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { BASE_URL } from "../../Service/Api/Api";
import { useNavigate } from "react-router-dom";
import { ErrorPopup } from "../../../components";

interface DealerState {
  username: string;
  phone: string;
  gst: string;
  email: string;
  password: string;
}

export default function DealerRegistration() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [dealer, setDealer] = useState<DealerState>({
    username: "",
    phone: "",
    gst: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle input change
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDealer({
      ...dealer,
      [name]: value,
    });
  };

  // Password validation function
  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,15}$/;

    if (!passwordRegex.test(password)) {
      return "Password must be between 6 to 15 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }
    return "";
  };

  // Phone number validation function (must be 10 digits)
  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return "Phone number must be exactly 10 digits.";
    }
    return "";
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the password
    const passwordError = validatePassword(dealer.password);
    if (passwordError) {
      setErrorMessage(passwordError);
      return; // Stop form submission if password is invalid
    }

    // Validate the phone number
    const phoneError = validatePhoneNumber(dealer.phone);
    if (phoneError) {
      setErrorMessage(phoneError);
      return; // Stop form submission if phone number is invalid
    }

    setIsLoader(true); // Show the loader while submitting the form

    try {
      const response = await axios.post(
        `${BASE_URL}/product/dealerregistration`, // API endpoint for registration
        dealer,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.status >= 200 && response.status < 300) {
        // Reset form data
        setDealer({
          username: "",
          phone: "",
          gst: "",
          email: "",
          password: "",
        });

        navigate(`dealer-message/${dealer.username}`);
      } else {
        alert("Error during registration. Please try again.");
      }
    } catch (error) {
      // Handle errors
      if (axios.isAxiosError(error)) {
        const errorResponse = error.response?.data;
        console.log(errorResponse);

        if (errorResponse.message === "Email already exists") {
          setErrorMessage("Email already exists");
          setShowErrorPopup(true);
        } else if (errorResponse.message === "Phone number already exists") {
          setErrorMessage("Phone number already exists");
          setShowErrorPopup(true);
        }
      } else if (error instanceof Error) {
        console.error("Error:", error.message);
        setErrorMessage(`An unexpected error occurred: ${error.message}`);
        setShowErrorPopup(true);
      } else {
        console.error("Unexpected Error:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
        setShowErrorPopup(true);
      }
    } finally {
      setIsLoader(false);
    }
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <main className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-[75rem]">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <motion.div
            className="relative w-full lg:w-1/2 flex justify-center items-center"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 30 }}
          >
            <img
              src={loginHomeImg}
              alt="Dealer Registration"
              className="h-[35rem] max-w-xs lg:max-w-[35rem]"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="w-full lg:w-1/2 p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="Title">Dealer Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-600"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={dealer.username}
                  onChange={handleInput}
                  placeholder="Enter your username"
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-600"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={dealer.phone}
                  onChange={handleInput}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="gst"
                  className="block text-sm font-medium text-gray-600"
                >
                  GST Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="gst"
                  name="gst"
                  value={dealer.gst}
                  onChange={handleInput}
                  placeholder="Enter your GST number"
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={dealer.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={dealer.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-5 text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {showErrorPopup && (
                    <ErrorPopup
                      message={errorMessage}
                      onClose={closeErrorPopup}
                    />
                  )}
                </div>
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="px-8 py-4 text-[--black] font-bold bg-[--secound] rounded-4xl transition-700 cursor-pointer border border-[--secound] hover:bg-[--black] hover:text-[--secound]"
                disabled={isLoader}
              >
                {isLoader ? "Submitting..." : "Register Now"}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </section>
  );
}
