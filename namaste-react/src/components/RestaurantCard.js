import { RESTAURANT_IMG_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
  const { id, cloudinaryImageId, name, cuisines, avgRating, deliveryTime } = props;

  // RESTAURANT_IMG_URL + cloudinary_id + image_format
  return (
    <>
        <div className=" border border-gray-400 w-[200px] m-4 p-2 bg-gray-100 rounded-md">
          <img
            src={
              cloudinaryImageId && `${RESTAURANT_IMG_URL}${cloudinaryImageId}`
            }
            alt={name}
            className="h-40 w-[100%]"
          />
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>
            ⭐ {avgRating} | 🚚 {deliveryTime} mins
          </p>
        </div>
    </>
  );
};
export default RestaurantCard;
