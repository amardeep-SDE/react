import { useParams } from "react-router-dom";
import userContext from "../../utils/userContext";
import { useContext } from "react";
const Contact = () => {

    const {loggedInUser} = useContext(userContext);
    return(
        <div>
            <h1>Contact Page</h1>
            <h2>Namaste React</h2>
            {loggedInUser}
        </div>
    )
}
export default Contact;