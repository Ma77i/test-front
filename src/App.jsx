import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import ItemListContainer from "./components/Containers/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import PageNotFound from "./pages/404/PageNotFound";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<ItemListContainer />} />
        <Route path="/hotels/:id" element={<ItemDetailContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
