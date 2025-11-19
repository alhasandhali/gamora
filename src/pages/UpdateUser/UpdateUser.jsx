import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const UpdateUser = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const navigate = useNavigate();

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const photoURL = event.target.imageUrl.value;

    updateUserProfile({ displayName, photoURL })
      .then(() => {
        Swal.fire({
          title: "Updated your Information!",
          icon: "success",
          draggable: true,
        }).then(() => {
          navigate("/dashboard");
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

    event.target.reset();
  };

  return (
    <div className="w-11/12 m-auto">
      <ToastContainer></ToastContainer>
      <div className="flex justify-center">
        <div className="my-5 p-10 w-full md:w-6/12 bg-gray-800 rounded-3xl">
          <h3 className="montserrat font-bold text-lg text-white mb-5">
            Update your profile
          </h3>
          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName || ""}
              placeholder="Full Name"
              className="p-3 text-white rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="imageUrl"
              defaultValue={user?.photoURL || ""}
              placeholder="Photo URL"
              className="p-3 text-white rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 transition-colors py-3 rounded-lg font-bold mt-2 text-white cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
