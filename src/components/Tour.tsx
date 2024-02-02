import { FC, ReactElement } from 'react';

interface TourProps {
  tour: Tour;
}

const Tour: FC<TourProps> = ({ tour }): ReactElement => {
  return (
    <li className="single-tour">
      <div className="tour-price">${tour.price}</div>
      <img src={tour.image} alt={tour.name} className="img" />
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>{tour.info}</p>
      </div>
    </li>
  );
};

export default Tour;
