import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center mt-60">
      <h1>404 YOU ARE LOST HERE!</h1>
      <Link
        className="bg-deep hover:bg-dark text-light text-2xl rounded-full my-10 px-10 py-2 tracking-widest"
        to="/"
      >
        GET BACK HOME
      </Link>
    </div>
  );
}

export default PageNotFound