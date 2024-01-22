import React, { useState, useEffect } from "react";
import "./index.css";

const StarRating = ({
  noOfStars,
  starFillColor,
  starBorderColor,
  timeOutToFade,
  resetFilledStar,
}) => {
  const [hoverStar, setHoverStar] = useState([]);
  const [clickedStar, setClickedStar] = useState(-1);
  const onHoverStar = (index) => {
    const iterates = Array.from({ length: index + 1 }, (_, index) => index);
    setHoverStar(iterates);
  };
  const onUnHoverStar = (index) => {
    setHoverStar([]);
  };
  const onStarClick = (index) => {
    setClickedStar(index);
  };

  useEffect(() => {
    timeOutToFade &&
      setTimeout(() => {
        setClickedStar(-1);
      }, 2000);
  }, [clickedStar]);

  useEffect(() => {
    setClickedStar(-1);
  }, [resetFilledStar]);
  console.log("hover", hoverStar);
  return (
    <div className="sr-con">
      {Array.from({ length: noOfStars }, (_, index) => (
        <div
          className="star"
          key={index}
          onMouseEnter={() => onHoverStar(index)}
          onMouseLeave={() => onUnHoverStar(index)}
          onClick={() => onStarClick(index)}
        >
          <Icon
            fillColor={
              hoverStar.includes(index)
                ? starFillColor
                : index <= clickedStar
                ? starFillColor
                : "white"
            }
            borderColor={starBorderColor}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRating;

const Icon = ({ fillColor, borderColor }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={fillColor ? fillColor : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.1}
        stroke={borderColor ? borderColor : "black"}
        style={{ width: "100%", height: "100%", cursor: "pointer" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    </>
  );
};
