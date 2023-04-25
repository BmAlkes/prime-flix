import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import MoviesDetails from "./pages/Movies";
import Header from "./assets/components/header";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviesDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
