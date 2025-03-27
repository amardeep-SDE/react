import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count1] = useState(1);

    const counter = () => {
        setCount(count - 1);
        if (count === 0) {
            setCount(0);
        }
    }
    return (
        <div className="user-container">
        <h3>Count: {count}</h3>
        <h3>Count: {count1}</h3>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        <button onClick={counter}>Click Me</button>
        <h2>Name : {name}</h2>
        <h3>Email : amardeep@gmail.com</h3>
        <h3>Role : Developer</h3>
        </div>

    )
}
export default User;