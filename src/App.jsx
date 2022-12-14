import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HotelsProvider } from "./context/HotelsContext";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./pages/404/PageNotFound";
import Hotels from "./pages/Hotels/Hotels";

const App = () => {
  return (
    <Router>
      <HotelsProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </HotelsProvider>
    </Router>
  );
};

export default App;
