import API from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../utils/Loader";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  const hotels = [];

  const getHotel = async (id) => {
    const res = await API.get();
    const data = res.data.hotels;

    const names = Object.values(data.name);
    const address = Object.values(data.address);
    const photos = Object.values(data.hotel_photos);
    const summary = Object.values(data.hotel_summary);
    const rating = Object.values(data.hotel_rating);
    const score = Object.values(data.review_score);
    const origin = Object.values(data.origin);
    const distance = Object.values(data["distance_from_downtown (km)"]);
    const avg = Object.values(data["avg_price_per_night (\u20ac)"]);

    const splitImages = (photos) => {
      return photos.split(", ");
    };

    names.map((elem, index) => {
      const newHotels = {
        name: elem,
        address: address[index],
        hotel_photos: splitImages(photos[index]),
        hotel_summary: summary[index],
        hotel_rating: rating[index],
        review_score: score[index],
        origin: origin[index],
        distance_from_downtown: distance[index],
        avg_price_per_night: avg[index],
      };
      hotels.push(newHotels);
    });

    setItem(hotels.find((hotel) => hotel.name === id));
    setIsLoading(false);
  };

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
