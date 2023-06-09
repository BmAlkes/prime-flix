import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MoviesDetails from "./pages/Movies";
import Header from "./assets/components/header";
import Error from "./pages/error";
import Favorite from "./pages/Favorite";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<MoviesDetails />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
