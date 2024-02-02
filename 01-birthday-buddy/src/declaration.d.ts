declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Person = {
  id: number;
  name: string;
  age: number;
  image: string;
};

type People = Person[] | null;
