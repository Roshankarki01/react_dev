import React from "react";
import { jsx } from "react/jsx-runtime";
import  "./roshan.jpg"
import ImageComponent from "./image";


const Child = () => {
    return (
        <div className="child">
            <h1>This is Roshan karki.</h1>
            <ImageComponent/>
        </div>
    );
}
export default Child;

