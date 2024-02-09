import { ReactElement, useState } from 'react';
import MenuList from './components/MenuList';
import FilterButtons from './components/FilterButtons';

const App = (): ReactElement => {
  const [category, setCategory] = useState<Category>('all');

  return (
    <main className="menu">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="title-underline"></div>
      </div>
      <FilterButtons setCategory={setCategory} />
      <MenuList category={category} />
    </main>
  );
};

export default App;
