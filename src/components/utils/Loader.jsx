import PuffLoader from "react-spinners/PuffLoader"


export default function SimpleBackdrop() {

  return (
    <div className="flex flex-col justify-center align-middle m-10">
      <PuffLoader size={250} />;
    </div>
  );
}