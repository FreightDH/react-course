import { ReactElement, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

const App = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { name, job, image, text } = reviews[activeIndex];

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
          <button className="prev-btn">
            <FaChevronLeft />
          </button>
          <button className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster">surprise me</button>
      </div>
    </main>
  );
};

export default App;
