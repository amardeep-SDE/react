import { useState } from "react";

const useOnlineStatus = () => {

    const [onlineStatus, SetOnlineStatus] = useState("online");

    window.addEventListener("online", (event) => {
        console.log("You are now connected to the network.");
        SetOnlineStatus(true);
      });
      window.addEventListener("offline", (event) => {
        console.log("You are now connected to the network.");
        SetOnlineStatus(false);
      });

      return onlineStatus;
}
export default useOnlineStatus;