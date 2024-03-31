import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  '/aws-gif.gif',
  '/gif-final.gif',
  '/flights.jpg',
  '/bookmyshow.jpg'
  // add more image paths as needed
];

function ImageBox() {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(oldImage => {
        const currentIndex = images.indexOf(oldImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // change image every 2000ms (2 seconds)

    return () => clearInterval(intervalId); // clean up on unmount
  }, []);

  return (
    <div className="roundBox">
      <img src={currentImage} alt="description" />
    </div>
  );
}

export default ImageBox;