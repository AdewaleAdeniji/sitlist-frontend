import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages";
import LoginPage from "../pages/auth/login";
import Signup from "../pages/auth/signup";
import Dashboard from "../pages/user";
import WaitlistsPage from "../pages/user/waitlists";
import WaitlistPage from "../pages/user/waitlist";
import NotFoundPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/app/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/app/waitlists",
    element: <WaitlistsPage />,
  },
  {
    path: "/app/waitlist/:waitlistID",
    element: <WaitlistPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
]);
export default router;
