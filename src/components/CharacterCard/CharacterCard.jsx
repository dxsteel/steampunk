import { Link } from 'react-router-dom';
import './CharacterCard.scss';

const CharacterCard = props => {

  const {id, photo, name, specie} = props.character;

  return (
    <li className="card" key={id}>
      <Link to={`/character/${id}`}>
        <img
          className="image"
          src={photo}
          alt={`Pictures of ${name}`}
          title={`Pictures of ${name}`}
        />
        <h4 className="name">{name}</h4>
        <p className="species">{specie}</p>
      </Link>
    </li>
  );
};

export default CharacterCard;