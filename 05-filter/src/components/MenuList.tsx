import { FC, ReactElement } from 'react';
import { menu } from '../data';
import MenuItem from './MenuItem';

interface MenuListProps {
  category: Category;
}

const MenuList: FC<MenuListProps> = ({ category }): ReactElement => {
  return (
    <ul className="section-center">
      {menu.map((dish) => (
        <MenuItem key={dish.id} dish={dish} category={category} />
      ))}
    </ul>
  );
};

export default MenuList;
