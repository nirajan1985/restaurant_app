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

export default RestaurantCard;
