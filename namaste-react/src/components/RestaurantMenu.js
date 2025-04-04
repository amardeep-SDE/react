import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  RESTAURANT_MENU_API,
  RESTAURANT_MENU_IMG,
} from "../../utils/constants";
import { useParams } from "react-router";
import "../css/menu.css";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, resMenu } = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, areaName, cuisines, costForTwoMessage } = resInfo;

  return (
    <div
      className="menu-container"
      style={{
        margin: "30px auto",
      }}
    >
      <div
        style={{
          margin: "0 0 20px 0",
        }}
      >
        <h2>{name}</h2>
        <p>
          Outlet: <span>{areaName}</span>
        </p>
        <p>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      <div className="menu-categories">
        {resMenu?.map((category) =>
          category?.type === "nested" ? (
            <NestedMenuCategory key={category?.title} category={category} />
          ) : (
            <MenuCategory key={category?.title} category={category} />
          )
        )}
      </div>
    </div>
  );
};

const MenuCategory = (props) => {
  const { category } = props;
  return (
    <div className="menu-category">
      <h3 className="category-name">
        <div>
          {category?.title} ({category?.itemCards?.length})
        </div>
        <span>▼</span>
      </h3>
      <div className="menu-items">
        {category?.itemCards?.map((item) => (
          <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

const NestedMenuCategory = (props) => {
  const { category } = props;
  return (
    <div className="nested-menu-category">
      <h3 className="nested-category-name">{category?.title}</h3>
      {category?.categories?.map((subcategory) => (
        <div
          style={{
            padding: "20px 0 0 40px",
          }}
          key={subcategory?.title}
        >
          <h4 className="category-name">
            <div>
              {subcategory?.title} ({subcategory?.itemCards?.length})
            </div>
            <span>▼</span>
          </h4>
          <div className="menu-items">
            {subcategory?.itemCards?.map((item) => (
              <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const MenuItem = ({ item }) => {
  const { name, description, price, defaultPrice, imageId } = item;

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    console.log("click");
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="menu-item">
      <div className="left">
        {name && <h4>{name}</h4>}
        {/* {description && <p>{truncateString(description, 120)}</p>} */}
        {description && <p>{(description, 120)}</p>}

        {price && <p>Price: ₹{(price / 100).toFixed(2)}</p>}
        {defaultPrice && <p>Price: ₹{(defaultPrice / 100).toFixed(2)}</p>}
      </div>
      <div>
        <button
          className="absolute bg-black text-white py-1 px-3 rounded-md m-2"
          onClick={() => {
            handleAddItem(item);
          }}
        >
          Add
        </button>
        {imageId && <img src={RESTAURANT_MENU_IMG + imageId} alt={name} />}
      </div>
    </div>
  );
};

export default RestaurantMenu;
