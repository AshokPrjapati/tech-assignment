import { lazy } from "react"
import { Routes as AllRoutes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Authentication = lazy(() => import("../pages/Authentication"));
const Home = lazy(() => import("../pages/Home"))

const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </AllRoutes>
    )
}

export default Routes