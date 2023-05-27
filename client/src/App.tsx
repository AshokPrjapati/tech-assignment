import { Suspense } from "react";
import ToasterProvider from "./provider/ToasterProvider";
import Routes from "./routes/Routes"
import axios from "axios"
import Navbar from "./components/navbar/Navbar";


// default base url
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
const user = sessionStorage.getItem("user");

// token
const token = user ? JSON.parse(user)?.token : null;

// token assigned to default header
if (token) {
  axios.defaults.headers.common['Authorization'] = token;
}

function App() {

  return (
    <Suspense fallback={<h1 style={{ textAlign: "center" }}>...Loading</h1>}>
      <ToasterProvider />
      <Navbar />
      <Routes />
    </Suspense>
  )
}

export default App
