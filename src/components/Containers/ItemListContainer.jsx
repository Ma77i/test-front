import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../Items/ItemList";
import API from "../../api";
import Loader from "../utils/Loader";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const hotels = [];

  const getHotels = async () => {
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

    names.map((elem, index) => {
      const myObject = {
        name: elem,
        address: address[index],
        hotel_photos: photos[index],
        hotel_summary: summary[index],
        hotel_rating: rating[index],
        review_score: score[index],
        origin: origin[index],
        distance_from_downtown: distance[index],
        avg_price_per_night: avg[index],
      };
      hotels.push(myObject);
    });
    setItems(hotels);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getHotels();
  }, []);

  console.log(items);

  if (isLoading) return <Loader />;

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
