import { Suspense } from "react";
import ToasterProvider from "./provider/ToasterProvider";
import Routes from "./routes/Routes";
import Navbar from "./components/navbar/Navbar";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ToasterProvider />
      <Navbar />
      <Routes />
    </Suspense>
  );
}

export default App;
