import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./components/StarRating";

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        defaultRating={1}
        onSetMovieRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StarRating
      maxRating={"5"}
      messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
    />
    <StarRating size={24} color="red" defaultRating={3} />
    <Test />
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
  </React.StrictMode>
);
