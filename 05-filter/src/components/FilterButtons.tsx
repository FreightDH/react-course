import { FC, ReactElement, MouseEvent } from 'react';
import { categories } from '../data';
import CustomButton from './CustomButton';

interface FilterButtonsProps {
  setCategory: (str: Category) => void;
}

const FilterButtons: FC<FilterButtonsProps> = ({ setCategory }): ReactElement => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const { textContent } = event.target as HTMLElement;

    if (!textContent) return;

    const text = textContent.toLowerCase() as Category;
    setCategory(text);
  };

  return (
    <div className="btn-container">
      {categories.map((item, index) => (
        <CustomButton key={index} onClick={handleClick}>
          {item}
        </CustomButton>
      ))}
    </div>
  );
};

export default FilterButtons;
