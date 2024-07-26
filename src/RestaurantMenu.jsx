import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resinfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=405798&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };
  console.log("resinfo", resinfo);

  if (resinfo.length === 0) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resinfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}`}
      />
      <h1>{resinfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resinfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>

      {/* <ul>
        {restaurantsMenu.map((resMenu) => (
          <li key={resMenu.card.info.id}>{resMenu.card.info.name}</li>
        ))}
      </ul> */}
    </div>
  );
};
export default RestaurantMenu;

/* json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card.itemCards */
