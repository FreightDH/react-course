import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

import data from './data';

const App = (): ReactElement => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setCount(+target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form action="#" className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="numberInput">Paragraphs: </label>
        <input
          type="number"
          id="numberInput"
          min="1"
          max={data.length}
          value={count}
          onChange={handleChange}
        />
        <button className="btn">Generate</button>
      </form>
      <div className="lorem-text">
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default App;
