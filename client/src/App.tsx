import { Suspense } from "react";
import ToasterProvider from "./provider/ToasterProvider";
import Routes from "./routes/Routes"
import axios from "axios"
import Navbar from "./components/navbar/Navbar";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

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
