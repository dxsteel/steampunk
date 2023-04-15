import { Link } from 'react-router-dom';
import image from '../../img/imgonline-com-ua-Resize2.jpg';
import './CharacterDetail.scss';

const CharacterDetail = props => {

const {photo, name, gender, status, specie, origin, type} = props.character;

  return (
    <article className='detail'
    style={{
      backgroundImage:`url(${image})`
    }}>
      <Link className="detail-link" to="/">
        ⬅ GO BACK
      </Link>
      <img 
        className="detail-image"
        src={photo}
        alt={`Pictures of ${name}`}
        title={`Pictures of ${name}`}
      />
      <div>
        <h3 className="detail-name">{name}</h3>
        <h4 className="detail-informations">Informations</h4>
        <p className="detail-properties">Gender</p>
        <p className="detail-descriptions">{gender}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Status</p>
        <p className="detail-descriptions">{status}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Specie</p>
        <p className="detail-descriptions">{specie}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Origin</p>
        <p className="detail-descriptions">{origin}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Type</p>
        <p className="detail-descriptions">{type}</p>
        <p className="detail-line"></p>
      </div>
    </article>
  );
};

export default CharacterDetail;