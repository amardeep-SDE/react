import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../../utils/constants";

const RestaurantMenu = () => {

    const [resMenu, setResMenu] = useState(null);

    const {resId} = useParams();
    console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const response = await fetch(RESTAURANT_MENU_API + resId);
      const json = await response.json();
      
      // Sirf restaurant type wale cards filter karna
      const restaurantCards = json?.data?.cards?.filter(
        (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      console.log(restaurantCards);
      
      // Name extract karna
      const restaurantNames = restaurantCards.map((item) => item?.card?.card?.info?.name);
      
      console.log(restaurantNames); // Example Output: ['Meghana Foods']
        setResMenu(restaurantNames);
    } catch (error) {
      console.log("Error", error);
    }
  };
  
  return (
    <div>
      <h1>{resMenu}</h1>
      <h1>Menu</h1>
      <ul>
        <li>Idly</li>
        <li>Vada</li>
        <li>Dosa</li>
        <li>Poori</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
