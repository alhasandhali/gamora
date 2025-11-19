import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import logInBanner from "../../assets/login-banner.jpg";
import googleIcon from "../../assets/google-icon.png";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();

const LogIn = () => {
  usePageTitle("Log In");

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const togglePassword = () => setShowPassword(!showPassword);

  const { singInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogIn = () => {
    signInWithGoogle(googleProvider)
      .then(() => {
        navigate(location?.state || "/");
      })
      .catch((error) => {
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
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    singInUser(email, password)
      .then((result) => {
        event.target.reset();
        if (!result.user.emailVerified) {
          Swal.fire({
            title: "Verify you email",
            text: "Please verified you email first!",
            icon: "warning",
            draggable: true,
          }).then(() => {
            navigate(location?.state || "/");
          });
        } else {
          navigate(location?.state || "/");
        }
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error("Incorrect information. Please try again.", {
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
  };

  return (
    <div className="w-11/12 m-auto">
      <ToastContainer></ToastContainer>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden md:flex">
            <img
              className="w-full h-full object-cover"
              src={logInBanner}
              alt="game-img"
            />
          </div>

          <div className="p-8 sm:p-12">
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Link
                    to="/"
                    className="w-20 h-10 rounded-lg bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg"
                  >
                    Gamora
                  </Link>
                  <div>
                    <h1 className="text-lg font-semibold text-gray-900">
                      Log in to Our Site
                    </h1>
                    <p className="text-sm text-gray-500">
                      Use your account to access your dashboard
                    </p>
                  </div>
                </div>
              </div>
              <form onSubmit={handleLogIn} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="appearance-none block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="you@company.com"
                      aria-describedby="email-desc"
                    />
                  </div>
                  <p id="email-desc" className="sr-only">
                    Enter the email address associated with your account.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition pr-12"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePassword}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
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
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white text-sm font-medium shadow cursor-pointer"
                >
                  Log in
                </button>
              </form>
              <div className="flex justify-between items-center flex-row-reverse mt-3">
                <div className="text-sm">
                  <Link
                    to="/sign-up"
                    className="text-indigo-600 hover:underline"
                  >
                    Need an account?
                  </Link>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forget-password"
                    state={{ email }}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-3">
                <button
                  role="button"
                  className="flex items-center justify-center gap-3 w-full px-4 py-2 border rounded-lg bg-white border-gray-200 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"
                  onClick={() => handleGoogleLogIn()}
                >
                  <img
                    className="w-7 h-7"
                    src={googleIcon}
                    alt="google-logo-icon"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Sign in with Google
                  </span>
                </button>
              </div>
              <p className="mt-6 text-xs text-gray-500">
                By continuing you agree to our{" "}
                <a href="#" className="underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
