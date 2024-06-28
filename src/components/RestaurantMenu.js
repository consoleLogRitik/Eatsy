import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL_CDN } from "../config";
import ShimmerUi from "./ShimmerUi";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const MenuCard = ({ items }, id) => {
  const { name, price, description, imageId } = items?.card?.info;
  const [info, setInfo] = useState("more");
  return (
    <>
      <div
        className="flex my-8 p-1 shadow-sm shadow-slate-300 justify-between "
        key={id}
      >
        <div className="w-1/2">
          <h4 className="font-semibold ">{name}</h4>
          <h4 className="font-semibold">₹ {price / 100}</h4>
          <div>
            <button
              onClick={() => setInfo(description)}
              className="text-left text-xs"
            >
              {info}
            </button>
          </div>
        </div>
        <div>
          <img className="size-32 rounded-s-lg" src={IMG_URL_CDN + imageId} />
        </div>
      </div>
    </>
  );
};

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const dataPromise = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await dataPromise.json();
    console.log(json);
    setRestaurant(json?.data?.cards?.[2]?.card?.card?.info);
    setMenu(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card
    );
  }

  const {
    name,
    city,
    locality,
    cloudinaryImageId,
    avgRatingString,
    costForTwoMessage,
  } = restaurant;

  const isOnline = useOnline();
  if (!isOnline) {
    return <Offline/>
  }

  return (
    <>
      <div>
        <div className="m-auto mt-16 w-1/2">
          <h2 className="font-semibold text-xl">{name}</h2>
          <div className="my-4 p-4 flex rounded-md items-center shadow-slate-500 shadow-lg justify-between">
            <div className="w-1/2 ">
              {/* details div */}
              <h4 className="flex justify-between items-center">
                <span className="font-semibold">{city}</span>{" "}
                <span className="flex justify-between items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#75FB4C"
                  >
                    <path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" />
                  </svg>
                  {avgRatingString}
                </span>
              </h4>
              <h4 className="text-sm flex justify-between items-center">
                <span className="opacity-70">{locality}</span>
                <span className="text-stone-600 font-medium">
                  {costForTwoMessage}
                </span>
              </h4>
            </div>
            {/* image div */}
            <div>
              <img
                className="h-36 w-44 rounded-md"
                src={IMG_URL_CDN + cloudinaryImageId}
              ></img>
            </div>
          </div>

          <div className="menuList">
            <h2 className="font-semibold text-xl">Menu</h2>
            {menu?.itemCards?.map((items) => (
              <MenuCard items={items} key={items?.card?.info.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
