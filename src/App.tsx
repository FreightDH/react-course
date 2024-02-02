import { ReactElement } from 'react';
import useFetch from './hooks/useFetch';
import { Loader, ToursList } from './components';

const URL = 'https://course-api.com/react-tours-project';

const App = (): ReactElement => {
  const [tours, isLoading, isError] = useFetch(URL);

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

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="title-underline"></div>
        </div>
        <ToursList tours={tours} />
      </section>
    </main>
  );
};

export default App;
