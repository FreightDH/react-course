import { ReactElement } from 'react';
import questions from './data';
import { Question } from './components';

const App = (): ReactElement => {
  return (
    <main>
      <div className="container">
        <h1>Questions</h1>
        <ul>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
