import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filteredRestaurants);
  };
  return (
    <>
      <div style={{ marginBottom: "8px" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "10px",
        }}
      >
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            name={restaurant.info.name}
            rating={restaurant.info.avgRating}
            costForTwo={restaurant.info.costForTwo}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
