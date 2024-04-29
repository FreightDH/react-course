declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Dish = {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

type Category = 'all' | 'breakfast' | 'lunch' | 'shakes';
