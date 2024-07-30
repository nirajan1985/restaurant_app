import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurant = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);

  //fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // return data
  return {
    restaurantList,
    filteredList,
    setFilteredList,
  };
};
export default useRestaurant;
