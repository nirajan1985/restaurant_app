import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = ({ restaurants }) => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "10px",
        }}
      >
        {restaurants.map((restaurant) => (
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

export default Body;
