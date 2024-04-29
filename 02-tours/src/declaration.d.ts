declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Tour = {
  id: string;
  image: string;
  info: string;
  name: string;
  price: string;
};

type Tours = Tour[];
