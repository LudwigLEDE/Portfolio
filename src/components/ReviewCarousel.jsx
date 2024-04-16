function ReviewCarousel({ reviews }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available</p>; // Fallback UI if no reviews are provided
  }

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  const dots = () => {
    <div className="review-carousel">
      <button onClick={prevReview} className="side-button left-button">
        &lt;
      </button>
      <div className="review-card">
        <h4>{reviews[currentIndex].name}</h4>
        <p>{reviews[currentIndex].text}</p>
      </div>
      <button onClick={nextReview} className="side-button right-button">
        &gt;
      </button>
    </div>;
  };
}
export default ReviewCarousel;
