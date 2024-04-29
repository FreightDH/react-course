import { ReactElement, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const App = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, job, image, text } = reviews[activeIndex];

  const checkIndex = (newIndex: number) => {
    if (newIndex < 0) return reviews.length - 1;
    if (newIndex > reviews.length - 1) return 0;

    return newIndex;
  };

  const prevPerson = () => {
    const newIndex = checkIndex(activeIndex - 1);
    setActiveIndex(newIndex);
  };

  const nextPerson = () => {
    const newIndex = checkIndex(activeIndex + 1);
    setActiveIndex(newIndex);
  };

  const getRandomPerson = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === activeIndex) newIndex++;
    setActiveIndex(newIndex);
  };

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={getRandomPerson}>
          surprise me
        </button>
      </div>
    </main>
  );
};

export default App;
