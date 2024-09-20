import React from "react";

const RestaurantCard = ({ resData }) => {
  //console.log("resdata", resData);
  return (
    <div className="m-4 p-4 w-80 border border-solid border-black hover:bg-slate-200">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.cloudinaryImageId}`}
        className=" h-[290px] object-cover  w-full"
      />
      <h3 className="font-bold py-3">{resData.name}</h3>
      <p>{resData?.rating}</p>
      <p>{resData?.costForTwo}</p>
    </div>
  );
};

// Higher order component
// input - RestaurantCard => RestaurantCardImproved

export const withDiscountLabel = (RestaurantCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label>{resData.aggregatedDiscountInfoV3.header}</label>
        <RestaurantCard resData={resData} />
      </div>
    );
  };
};

export default RestaurantCard;
