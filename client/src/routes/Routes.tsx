import { lazy } from "react"
import { Routes as AllRoutes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Authentication = lazy(() => import("../pages/Authentication"));
const Home = lazy(() => import("../pages/Home"))

const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </AllRoutes>
    )
}

export default Routes