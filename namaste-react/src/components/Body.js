import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("body render");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser, setUserName} = useContext(userContext);
  console.log(loggedInUser);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const restaurantsData = json?.data?.cards?.find((item) =>
        item?.card?.card?.id?.includes("restaurant_grid")
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (onlineStatus === false) {
    return (
      <h1>You are offline , please check your internet connection !!</h1>

    )
  }

  return (
    <>
      {listOfRestaurants.length === 0 ? (
        <div>
          <Shimmer />
        </div>
      ) : (
        <div className="">
          <div className="flex m-3 p-3">
            <div className="filter">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-400 p-1 rounded-md"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              <button
              className="m-3 bg-blue-400 px-3 py-1 rounded-md"
                onClick={() => {
                  const filteredData = listOfRestaurants.filter((item) =>
                    item.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  console.log(filteredData);
                  setFilteredRestaurants(filteredData);
                }}
              >
                Search
              </button>
            </div>

            <button
              className="m-3 bg-green-300 px-3 py-1 rounded-md"
              onClick={() => {
                {
                  const filteredData = listOfRestaurants.filter(
                    (item) => item?.info?.avgRating > 4.6
                  );
                  console.log(filteredData);

                  setListOfRestaurants(filteredData);
                }
                // setListOfRestaurants((prev) => [...prev].sort((a, b) => b?.info?.avgRating - a?.info?.avgRating));
              }}
            >
              Top Rated Restaurant
            </button>
            <input className="m-3 border border-gray-400 p-1 rounded-md" value={loggedInUser} type="text" onChange={(e) => setUserName(e.target.value)}/>
          </div>
          <div className="flex flex-wrap ">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant?.info.id} {...restaurant?.info} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Body;
