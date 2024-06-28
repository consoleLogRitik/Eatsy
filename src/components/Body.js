import { IMG_URL_CDN } from "../config";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";

const RestarauntCard = (
  { name, avgRatingString, cuisines, cloudinaryImageId },
  id
) => {
  return (
    <div
      className="w-80 h-96 shadow-sm p-5 items-center justify-center rounded-md  space-y-4 transition duration-500 ease-out transform hover:scale-90 hover:-translate-y-2 "
      key={id}
    >
      <img
        className="w-52 h-44 m-5 rounded-lg"
        src={IMG_URL_CDN + cloudinaryImageId}
      />
      <div className="m-5">
        <h3 className="font-medium">{name}</h3>
        <h4 className="flex flex-wrap justify-start items-center text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#75FB4C"
          >
            <path d="m243-144 63-266L96-589l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z" />
          </svg>
          {avgRatingString}{" "}
        </h4>
        <h4 className="opacity-70 text-sm">{cuisines.join(" , ")}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  const [allRestauraunt, setAllRestauraunt] = useState([]);
  const [filterRestauraunt, setFilterRestauraunt] = useState([]);
  const [inputTxt, setInputTxt] = useState("");
  useEffect(() => {
    getRestauraunt();
  }, []);

  async function getRestauraunt() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const details = await data?.json();
    setFilterRestauraunt(
      details?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestauraunt(
      details?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <Offline/>;
  }

  return (
    <>
      <div className="m-5 p-5 justify-center flex gap-4 items-center ">
        <input
          className="w-80 p-1 text-center outline-none shadow-lg bg-orange-100 rounded-xl"
          type="text"
          placeholder="what's on your mind?"
          value={inputTxt}
          onChange={(e) => {
            setInputTxt(e.target.value);
            if (e.target.value == "") {
              setFilterRestauraunt(allRestauraunt);
            }
          }}
        />
        <input
          type="submit"
          className="px-2 py-1 text-base items-center flex outline-0 outline rounded-md shadow-lg bg-orange-400 hover:bg-orange-500 text-white"
          value={"search"}
          onClick={(e) => {
            setFilterRestauraunt(filterData(allRestauraunt, inputTxt));
          }}
        />
      </div>
      {!allRestauraunt.length ? (
        <ShimmerUi />
      ) : (
        <div className="flex flex-wrap gap-16 justify-center items-center ">
          {filterRestauraunt.map((rests) => (
            <Link to={"/restaurant/" + rests.info.id}>
              {" "}
              <RestarauntCard {...rests.info} key={rests.info.id} />{" "}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
