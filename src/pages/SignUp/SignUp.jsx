import React, { use, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import {
  GoogleAuthProvider,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  usePageTitle("Sign Up");

  const { createUser, signOutUser, signInWithGoogle } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    signInWithGoogle(googleProvider)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong, please try again", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const rex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handlePasswordChange = (event) => {
    const pass = event.target.value;
    setPassword(pass);

    if (!rex.test(password)) {
      setPasswordError(
        "Password must contain at least 1 uppercase, 1 lowercase letter and be 6+ characters long."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.imageUrl.value;

    if (!rex.test(password)) {
      toast.error(
        "Password must contain at least 1 uppercase, 1 lowercase letter and be 6+ characters long!!!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName, photoURL })
          .then()
          .catch((error) => {
            console.error(error);
            toast.error("Something went wrong, please try again", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
        signOutUser()
          .then(() => {
            navigate("/log-in");
          })
          .catch((error) => {
            console.error(error);
            toast.error("Something went wrong, please try again", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });

        sendEmailVerification(user)
          .then(() => {
            Swal.fire({
              title: "Sent Verification Email",
              text: "Verification email sent! Please verify before logging in!",
              icon: "warning",
              draggable: true,
            }).then(() => {
              navigate("/log-in");
            });
          })
          .catch((error) => {
            console.error(error);
            toast.error("Something went wrong, please try again", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          toast.warning("This mail already use for SignUp!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
    event.target.reset();
  };

  return (
    <div className="w-11/12 m-auto py-10">
      <ToastContainer></ToastContainer>
      <div className="flex items-center justify-center">
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-8 sm:p-12 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Join Gamora</h1>
          <p className="text-gray-400 text-center mb-6">
            Discover and support amazing game developers.
          </p>

          <div className="flex flex-col gap-4 mb-6">
            <button
              onClick={() => handleGoogleSignUp()}
              className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 transition-colors py-2 rounded-lg font-medium cursor-pointer"
            >
              <FontAwesomeIcon icon={faGoogle} />
              Sign up with Google
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-gray-400">
              <span className="bg-gray-800 px-2">or</span>
            </div>
          </div>

          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="p-3 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handlePasswordChange}
                placeholder="Password"
                className="p-3 w-full rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-2 flex items-center px-2 text-sm text-gray-500 cursor-pointer"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.963 9.963 0 012.223-3.394M6.3 6.3l11.4 11.4M9.88 9.88A3 3 0 0114.12 14.12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-400 text-sm">{passwordError}</p>
            )}
            <input
              type="text"
              name="imageUrl"
              placeholder="Photo URL"
              className="p-3 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors py-3 rounded-lg font-bold mt-2 cursor-pointer"
            >
              Sign Up
            </button>
          </form>

          <p className="text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link to="/log-in" className="text-indigo-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
