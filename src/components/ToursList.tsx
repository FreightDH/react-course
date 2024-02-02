import { FC, ReactElement } from 'react';
import Tour from './Tour';

interface ToursListProps {
  tours: Tours;
  removeTour: (id: string) => void;
}

const ToursList: FC<ToursListProps> = ({ tours, removeTour }): ReactElement => {
  return (
    <ul className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </ul>
  );
};

export default ToursList;
