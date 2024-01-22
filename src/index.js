import React from "react";
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
