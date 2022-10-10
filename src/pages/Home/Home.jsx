import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext";
import HomeSlider from "./HomeSlider";

const Home = () => {
  const { items, getHotels } = useContext(HotelsContext);

  useEffect(()=> {
    getHotels()
  }, [])
  
  return (
    <div className="flex flex-col items-center m-5">
      <span className="text-4xl md:text-8xl text-center uppercase tracking-widest">
        WELCOME TO{" "}
      </span>
      <h1 className="text-6xl md:text-8xl font-black animate-pulse hover:animate-ping text-deep">
        INMOBANA
      </h1>
      <HomeSlider items={items} />
    </div>
  );
};

export default Home;
