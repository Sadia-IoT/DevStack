import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Technologies />
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
