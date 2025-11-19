import { Link, useLocation, useNavigate } from "react-router";
import usePageTitle from "../../utilities/setPageTitle/usePageTitle";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";

const ForgetPassword = () => {
  usePageTitle("Forget Password");

  const location = useLocation();
  const [email] = useState(location.state?.email);

  const { resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleRestPassword = (event) => {
    event.preventDefault();

    if (!email) {
      Swal.fire({
        title: "Enter your email",
        text: "Please enter your email address on Log In page then click then forgot password button!",
        icon: "warning",
        draggable: true,
      }).then(() => {
        navigate("/log-in");
      });
    } else {
      resetPassword(email)
        .then(() => {
          Swal.fire({
            title: "Sent Reset Email",
            html: `
            <p>Password reset email sent! Redirecting you to Gmail...</p>
            <p>If you can't find the email, check your spam folder.</p>
          `,
            icon: "success",
            draggable: true,
          }).then(() => {
            window.open("https://mail.google.com", "_blank");
            navigate("/log-in");
          });
        })
        .catch((error) => {
          console.log(error.code);
          navigate("/log-in");
        });
    }
  };

  return (
    <div className="bg-linear-to-br from-indigo-500 to-purple-500">
      <div className="w-11/12 m-auto py-16 text-white text-center">
        <h2 className="montserrat text-3xl font-bold mb-4">
          Reset your password!
        </h2>
        <p className="roboto mb-6">
          Please provide your email address to receive a password reset link.
        </p>
        <form
          onSubmit={handleRestPassword}
          className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 border-2 border-white"
        >
          <input
            type="text"
            value={email}
            readOnly
            className="bg-transparent focus:bg-transparent p-3 rounded text-white flex-1 placeholder:text-white outline-none cursor-not-allowed opacity-80"
          />
          <button
            type="submit"
            className="bg-white text-gray-900 font-semibold py-3 px-3 md:px-6 cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
