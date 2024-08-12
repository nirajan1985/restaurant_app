import { useParams } from "react-router-dom";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import AccordianItem from "./AccordianItem";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const dispatch = useDispatch();

  const resinfo = useRestaurantMenu(resId);

  if (!resinfo) {
    return <div>Loading....</div>;
  }
  const handleAddItem = (item) => {
    //Dispatch an action
    console.log(item);
    dispatch(addItem(item));
  };
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-3">
        {resinfo?.cards[2]?.card?.card?.info?.name}
      </h1>

      <ol>
        {resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
          (menuCategory) => (
            <>
              <AccordianItem
                title={menuCategory?.card?.card?.title}
                noOfItem={menuCategory?.card?.card?.itemCards?.length}
                content={menuCategory?.card?.card?.itemCards?.map((menu) => (
                  <div
                    className="flex items-center justify-between border-t-2"
                    key={menu.card.info.name}
                  >
                    <div>
                      <p className="font-bold">{menu.card.info.name}</p>
                      <p>{menu.card.info.defaultPrice / 100}</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f10379c6bd1edbbb7ee38da07c78058f" />
                      <button
                        className="px-4 py-1 m-2 bg-blue-400 hover:bg-blue-500 rounded-lg"
                        onClick={() => handleAddItem(menu)}
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              />
            </>
          )
        )}
      </ol>
    </div>
  );
};
export default RestaurantMenu;
