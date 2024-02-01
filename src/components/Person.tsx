import { FC, ReactElement } from 'react';

interface PersonProps {
  person: Person;
}

const Person: FC<PersonProps> = ({ person }): ReactElement => {
  return (
    <li className="person">
      <img src={person.image} alt={person.name} />
      <div>
        <h4>{person.name}</h4>
        <p>{person.age} years</p>
      </div>
    </li>
  );
};

export default Person;
