import { ReactElement } from 'react';
import useFetch from './hooks/useFetch';
import { Loader, ToursList } from './components';

const URL = 'https://course-api.com/react-tours-project';

const App = (): ReactElement => {
  const [tours, setTours, fetchTours, isLoading, isError] = useFetch(URL);

  const removeTour = (id: string) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (isLoading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h2 className="title">Something wen't wrong! Try to reload the page.</h2>
        <div className="title-underline"></div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <div className="title-underline"></div>
          <button className="btn" style={{ marginTop: '30px' }} onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <ToursList tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
