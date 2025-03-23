import { RESTAURANT_IMG_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    
    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = props;

     
      // RESTAURANT_IMG_URL + cloudinary_id + image_format
      return (
        <div  className="restaurant-card">
        <img
          src={cloudinaryImageId && `${RESTAURANT_IMG_URL}${cloudinaryImageId}`}
          alt={name}
          className="restaurant-image"
        />
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>⭐ {avgRating} | 🚚 {deliveryTime} mins</p>
      </div>
      )
    }
export default RestaurantCard;