import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllGames from "../pages/AllGames/AllGames";
import GameDetails from "../pages/GameDetails/GameDetails";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard/Dashboard";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import UpdateUser from "../pages/UpdateUser/UpdateUser";
import CustomLoader from "../components/CustomLoader/CustomLoader";
import Contact from "../pages/Contact/Contact";
import Career from "../pages/Career/Career";
import Press from "../pages/Press/Press";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <CustomLoader></CustomLoader>,
        Component: Home,
      },
      {
        path: "/log-in",
        Component: LogIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact-us",
        Component: Contact,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "/press",
        element: <Press></Press>,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/all-games",
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <CustomLoader></CustomLoader>,
        Component: AllGames,
      },
      {
        path: "/game-details/:id",
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <CustomLoader></CustomLoader>,
        element: (
          <PrivateRoutes>
            <GameDetails></GameDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard></Dashboard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-user",
        element: (
          <PrivateRoutes>
            <UpdateUser></UpdateUser>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
