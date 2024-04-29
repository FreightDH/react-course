import { FC, ReactElement } from 'react';
import Person from './Person';

interface ListProps {
  people: People;
}

const List: FC<ListProps> = ({ people }): ReactElement => {
  if (!people) return <></>;

  return (
    <ul>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};

export default List;
