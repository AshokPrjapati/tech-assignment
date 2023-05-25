import { Routes as AllRoutes, Route } from "react-router-dom"
import Authentication from "../pages/Authentication"

const Routes = () => {
    return (
        <AllRoutes>
            <Route path="/" element={<>AP</>} />
            <Route path="/auth" element={<Authentication />} />
        </AllRoutes>
    )
}

export default Routes