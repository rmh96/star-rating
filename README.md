A customizable and easy-to-use React star rating component that seamlessly integrates into your projects, providing a visually appealing way for users to rate and review content.

**Download command:**
npm i rmh-react-star-rating

**Code Snippet:**
```jsx
import React from "react";
import StarRating from "rmh-react-star-rating";

const YourComponent = () => {
return (
<div className="w-[600px] h-[80px] border-2">
{/* Specify your box width and height; stars will fit into that space. /}
<StarRating
noOfStars={10}
starFillColor={"yellow"}
starBolderColor={"red"}
timeOutToFade={true}
{/ resetFilledStar={false} - Set this value to a state if you have a reset button */}
/>
</div>
);
};

export default YourComponent;
```


**Properties:**

| Keys               | Purpose                                                                                       |
|--------------------|-----------------------------------------------------------------------------------------------|
| `noOfStars` (int) * | Specify how many stars you want in the given width                                            |
| `starFillColor` (string) * | Specify your customized color to fill in the stars (Default White)                          |
| `starBorderColor` (string) | Specify the border color for the star (Default Black)                                          |
| `timeOutToFade` (int) | After the user clicks the star, the selected star’s filled color will be reset after the given time |
| `timeDelayToFade` (int) | Specify the time delay to reset the filled stars (e.g., 1000 or 2000 ms) Default value **2000**, Note: This will be used when timeOutToFade is active, if you set it as false then this will be no use |
| `resetFilledStar` (Boolean) | Manually pass a boolean value to reset the filled colors (works like toggling a Boolean value)  |


**Peer Dependencies:**
“react”: “>=16.8.0”,
“react-dom”: “>=16.8.0”

**More to come:**
-	Need to add half-star functionality in the next version.

**License:**

Harish RM [@rmh96](https://in.linkedin.com/in/harish-mukundhaprasath-aaa3b5117)

