import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor called");
  }

  componentDidMount() {
    console.log("parent componentDidMount called");
  }
  render() {
    console.log("parent render called");

    return (
      <div>
        <h1>About Page</h1>
        <h2>Namaste React</h2>
        <UserClass name="first" />
        <UserClass name="second" />
        <UserClass name="third" />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>Namaste React</h2>
//       <User name="shaktiman function" />
//       <UserClass name="shaktiman class" />
//     </div>
//   );
// };
// export default About;

export default About;
