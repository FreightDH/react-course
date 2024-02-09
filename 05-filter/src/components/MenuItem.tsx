import { FC, ReactElement } from 'react';

interface MenuItemProps {
  dish: Dish;
  category: Category;
}

const MenuItem: FC<MenuItemProps> = ({ dish, category }): ReactElement => {
  if (category !== 'all' && dish.category !== category) {
    return <></>;
  }

  return (
    <li className="menu-item">
      <img src={dish.img} alt={dish.title} className="img" />
      <div className="item-info">
        <header>
          <h5>{dish.title}</h5>
          <div className="item-price">{dish.price}</div>
        </header>
        <div className="item-text">{dish.desc}</div>
      </div>
    </li>
  );
};

export default MenuItem;
