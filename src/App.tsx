import { ReactElement, useState } from 'react';
import data from './data';

const App = (): ReactElement => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
      </section>
    </main>
  );
};
export default App;
