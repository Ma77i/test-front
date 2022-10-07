import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../utils/Loader";
import { HotelsContext } from "../../context/HotelsContext";

const ItemDetailContainer = () => {

  const { item, isLoading, setIsLoading, getHotel } = useContext(HotelsContext)
  const param = useParams();

  useEffect(() => {
    setIsLoading(true);
    getHotel(param.id);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col items-center m-5">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
