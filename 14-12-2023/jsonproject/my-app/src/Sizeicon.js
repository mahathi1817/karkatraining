import React from "react";
import Data from './Data.json';
import { useState } from 'react';
import { Button } from "./Button";

export const Sizeicons = () => {
    const [clickedSize, setClickedSize] = useState(null);
    const [clickedImage, setClickedImage] = useState(null);
  
    const handleSizeClick = (selectedSize, selectedImage) => {
     
        setClickedSize(selectedSize);
        setClickedImage(selectedImage);
      };
  
    return (
      <>
        <div>
      {Data.map((sizes, index) => (
        <div key={index}>
          <div className="sizicn">
            <a
              href="#"
              onClick={() => handleSizeClick(sizes.size, sizes.image)}
            >
              {sizes.size}
            </a>
          </div>
        </div>
      ))}
      {clickedSize && (
        <div>
          <p>Clicked Size: {clickedSize}</p>
          {/* Display the associated image */}
          {clickedImage && <img src={clickedImage} alt="Associated Image" style={{width : "400px"}}/>}
        </div>
      )}
    </div>
      </>
    );
  };