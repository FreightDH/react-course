import { ReactElement, useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { longList } from './data';
import Slide from './Slide';

const App = (): ReactElement => {
  const [people] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  const nextSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, index) => (
        <Slide person={person} currentPerson={currentPerson} index={index} key={person.id} />
      ))}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default App;
