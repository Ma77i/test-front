import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HotelsContext } from "../../context/HotelsContext";
import HomeSlider from "./HomeSlider";

const Home = () => {
  const { items, getHotels } = useContext(HotelsContext);

  // const getRandomItems = () => {
  //   const randomItems = items[Math.floor(Math.random() * 10)];
  // }

  useEffect(()=> {
    getHotels()
    // getRandomItems()
  }, [])
  
  return (
    <div className="flex flex-col items-center m-5">
      <h1 className="tracking-widest">WELCOME TO <span className="font-black animate-pulse hover:animate-ping text-deep ">INMOBANA</span></h1>
      <HomeSlider items={items} />
      {/* <div className="flex flex-col items-center mt-10">
        <h3>Checkout all available hotels</h3>
        <Link
          className="bg-deep hover:bg-dark text-light text-2xl rounded-full mt-5 px-10 py-2 tracking-widest"
          to="/hotels"
        >
          HERE
        </Link>
      </div> */}
    </div>
  );
};

export default Home;
