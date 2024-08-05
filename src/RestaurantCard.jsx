import React from "react";

const RestaurantCard = ({ name, rating, costForTwo, cloudinaryImageId }) => {
  return (
    <div className="m-4 p-4 w-80 border border-solid border-black hover:bg-slate-200">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        className=" h-[290px] object-cover  w-full"
      />
      <h3 className="font-bold py-3">{name}</h3>
      <p>{rating}</p>
      <p>{costForTwo}</p>
    </div>
  );
};

// Higher order component
// input - RestaurantCard => RestaurantCardImproved

export const withDiscountLabel = (RestaurantCard) => {
  return ({
    name,
    rating,
    costForTwo,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  }) => {
    return (
      <div>
        <label>{aggregatedDiscountInfoV3.header}</label>
        <RestaurantCard
          name={name}
          rating={rating}
          costForTwo={costForTwo}
          cloudinaryImageId={cloudinaryImageId}
        />
      </div>
    );
  };
};

export default RestaurantCard;
