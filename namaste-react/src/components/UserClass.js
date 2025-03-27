import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name, "child Constructor called");

    this.state = {
      count: 1,
      count2: 2,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("componentdidmount called");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentdidupdate called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentwillunmount called");
    
  }
  render() {
    console.log(this.props.name, "child render called");

    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-container">
        <h3>Count : {count}</h3>
        {/* <h3>Count : {count2}</h3> */}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
        <h2>Name : {name}</h2>
        <h3>Email : amardeep@gmail.com</h3>
        <h3>Role : Developer</h3>
      </div>
    );
  }
}
export default UserClass;
