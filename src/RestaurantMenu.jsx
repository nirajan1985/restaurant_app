import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  if (!resinfo) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resinfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}`}
      />
      <h1>{resinfo?.cards[2]?.card?.card?.info?.name}</h1>
      <h3>{resinfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
      <h3>Restaurant Menu</h3>
      <ol>
        {resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (resMenu) => (
            <li key={resMenu.card.info.id}>{resMenu?.card?.info?.name}</li>
          )
        )}
      </ol>
    </div>
  );
};
export default RestaurantMenu;
