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
      <h1 className="tracking-widest">WELCOME TO <span className="font-black animate-pulse hover:animate-ping text-deep ">INMOBANA</span></h1>
      <HomeSlider items={items} />
    </div>
  );
};

export default Home;
