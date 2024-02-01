import { FC, ReactElement } from 'react';
import Person from './Person';

interface ListProps {
  people: People;
}

const List: FC<ListProps> = ({ people }): ReactElement => {
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
};

export default List;
