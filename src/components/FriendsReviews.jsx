// FriendsReviews.jsx

import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const reviews = [
  { text: "A breathtaking experience of nature's beauty!", author: "Jane Doe" },
  { text: "Absolutely serene and stunning landscapes.", author: "John Smith" },
  {
    text: "I felt like I was transported to another world.",
    author: "Alice Johnson",
  },
  {
    text: "The perfect getaway for anyone looking to find peace.",
    author: "Bob Brown",
  },
  { text: "Nature at its finest. Highly recommended!", author: "Emily White" },
];

const AUTO_DELAY = 10000; // 10 seconds
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const FriendsReviews = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();
      if (x === 0) {
        setReviewIndex((prevIndex) =>
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, AUTO_DELAY);
    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && reviewIndex < reviews.length - 1) {
      setReviewIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER && reviewIndex > 0) {
      setReviewIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className="relative overflow-hidden bg-neutral-950 py-4 flex justify-center items-center"
      style={{ height: "50vh", width: "calc(100% - 40px)" }} // Adjust width considering possible padding
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x: dragX,
          width: `${100 * reviews.length}vw`, // Ensure this matches the overall layout setting
          display: "flex",
        }}
        animate={{ translateX: `-${reviewIndex * 100}vw` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        {reviews.map((review, idx) => (
          <Review key={idx} review={review} />
        ))}
      </motion.div>
      <Dots reviewIndex={reviewIndex} setReviewIndex={setReviewIndex} />
      <GradientEdges />
    </div>
  );
};

const Review = ({ review }) => (
  <div
    style={{
      padding: "10px",
      width: "100vw", // Full viewport width for each review
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", // Added to center the content horizontally
      height: "100%", // Height adjusted to 100% of container
    }}
    className="shrink-0"
  >
    <p className="text-lg font-semibold text-white">{review.text}</p>
    <p className="text-sm text-gray-300 mt-2">- {review.author}</p>
  </div>
);

const Dots = ({ reviewIndex, setReviewIndex }) => (
  <div className="mt-2 flex w-full justify-center gap-2">
    {reviews.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setReviewIndex(idx)}
        className={`h-3 w-3 rounded-full transition-colors ${
          idx === reviewIndex ? "bg-white" : "bg-gray-500" // Increased size and adjusted colors for better visibility
        }`}
      />
    ))}
  </div>
);

const GradientEdges = () => (
  <>
    <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
    <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[5vw] max-w-[50px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
  </>
);

export default FriendsReviews;
