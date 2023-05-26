import ToasterProvider from "./provider/ToasterProvider";
import Routes from "./routes/Routes"
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

function App() {

  return (
    <>
      <ToasterProvider />
      <Routes />
    </>
  )
}

export default App
