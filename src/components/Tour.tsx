import { FC, ReactElement, useState } from 'react';

interface TourProps {
  tour: Tour;
}

const Tour: FC<TourProps> = ({ tour }): ReactElement => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <li className="single-tour">
      <div className="tour-price">${tour.price}</div>
      <img src={tour.image} alt={tour.name} className="img" />
      <div className="tour-info">
        <h5>{tour.name}</h5>
        <p>
          {moreInfo ? tour.info : `${tour.info.slice(0, 200)}...`}
          <button className="info-btn" onClick={() => setMoreInfo(!moreInfo)}>
            {moreInfo ? 'Show Less' : 'Read More'}
          </button>
        </p>
      </div>
    </li>
  );
};

export default Tour;
