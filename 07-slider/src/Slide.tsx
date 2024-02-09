import { FC, ReactElement } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

interface SlideProps {
  person: Person;
  currentPerson: number;
  index: number;
}

const Slide: FC<SlideProps> = ({ person, index, currentPerson }): ReactElement => {
  const { image, name, title, quote } = person;

  return (
    <div
      className="slide"
      style={{
        transform: `translateX(${100 * (index - currentPerson)}%)`,
        opacity: index === currentPerson ? 1 : 0,
        visibility: index === currentPerson ? 'visible' : 'hidden',
      }}
    >
      <img src={image} alt={name} className="person-img" />
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <p className="text">{quote}</p>
      <FaQuoteRight className="icon" />
    </div>
  );
};

export default Slide;
