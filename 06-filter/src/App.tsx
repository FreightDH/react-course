import { ReactElement, useState } from 'react';
import { useFetch } from './shared';
import { Buttons, Job, Loader } from './components';

const URL = 'https://course-api.com/react-tabs-project';

const App = (): ReactElement => {
  const [jobs, isLoading, isError] = useFetch(URL);
  const [activeTab, setActiveTab] = useState(0);

  if (isLoading) return <Loader />;
  if (!jobs || isError) return <h3>Something wen't wrong!</h3>;

  return (
    <main className="jobs-center">
      <Buttons jobs={jobs} activeTab={activeTab} setActiveTab={setActiveTab} />
      <Job job={jobs.find((_, index) => index === activeTab)} />
    </main>
  );
};

export default App;
