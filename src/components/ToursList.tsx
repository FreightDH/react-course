import { FC, ReactElement } from 'react';
import Tour from './Tour';

interface ToursListProps {
  tours: Tours;
}

const ToursList: FC<ToursListProps> = ({ tours }): ReactElement => {
  return (
    <ul className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </ul>
  );
};

export default ToursList;
