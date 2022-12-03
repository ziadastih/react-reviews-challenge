import React, { useState, useEffect } from "react";
import Review from "./components/Review";
import reviewsArr from "./reviewsData";

function App() {
  const [count, setCount] = useState(0);
  const [review, setReview] = useState(reviewsArr);

  useEffect(() => {
    setReview(reviewsArr[count]);
  }, [count]);

  const prevReview = () => {
    setCount((prevCount) => {
      return prevCount === 0 ? reviewsArr.length - 1 : prevCount - 1;
    });
  };

  const nextReview = () => {
    setCount((prevCount) => {
      return prevCount === reviewsArr.length - 1 ? 0 : prevCount + 1;
    });
  };
  const randomReview = () => {
    const randomNum = Math.floor(Math.random() * reviewsArr.length);
    setCount(randomNum);
  };

  return (
    <div className="app">
      <Review
        img={review.img}
        name={review.name}
        job={review.job}
        info={review.text}
        prevReview={prevReview}
        nextReview={nextReview}
        randomReview={randomReview}
      />
    </div>
  );
}

export default App;
