import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import useRestaurant from "./utils/useRestaurant";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onlineStatus = useOnlineStatus();
  const { restaurantList, filteredList, setFilteredList } = useRestaurant();

  const handleSearch = () => {
    const filteredRestaurants = restaurantList?.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filteredRestaurants);
  };

  if (!onlineStatus) {
    return (
      <h1>
        It seems like you are offline!! Please check your internet connection !
      </h1>
    );
  }
  if (!filteredList) {
    return <div>Loading restaurants....</div>;
  }

  return (
    <>
      <div className="p-4 m-4">
        <input
          className="border border-black border-solid rounded pl-1"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-1 m-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredList?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard
              name={restaurant.info.name}
              rating={restaurant.info.avgRating}
              costForTwo={restaurant.info.costForTwo}
              cloudinaryImageId={restaurant.info.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
