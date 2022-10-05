import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center m-20">
      <h1 className="tracking-widest">WELCOME TO INMOBANA</h1>
      <h3>Checkout available hotels</h3>
      <Link
        className="bg-deep hover:bg-dark text-light text-2xl rounded-full my-10 px-10 py-2 tracking-widest"
        to="/hotels"
      >
        HERE
      </Link>
    </div>
  );
};

export default Home;
