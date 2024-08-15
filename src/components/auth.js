import React, { useState } from "react";
import Increment from "./increament";
import Cincrement from "./cincrement";

const About = () => {
  const [isauth, setauth] = useState(false);

  return (
    <div>
      {isauth ? <Increment /> : <Cincrement />}
      <button onClick={() => setauth(!isauth)}>
        {isauth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default About;


{/* 
const auth = true;
const user = "admin";

const About = () => {
  if (user === "admin" && auth === false) {
    return (
      <div>
        <h1>Welcome admin</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome user</h1>
      </div>
    );
  }
}; */}

