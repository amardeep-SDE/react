const element = React.createElement(
    "h1",
    { id: "title", className: "heading" },
    "Hello world from react"
  );
  console.log(element);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log(root);
  
  root.render(element);