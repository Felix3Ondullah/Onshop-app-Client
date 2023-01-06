import React from "react";
import image from "../Assets/cart3.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        position: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        width: "215vh",
      }}
    >
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
