import PuffLoader from "react-spinners/PuffLoader";

const SimpleBackdrop = () => {
  return (
    <div className="flex justify-center align-super m-10">
      <PuffLoader size={400} />
    </div>
  );
};

export default SimpleBackdrop;
