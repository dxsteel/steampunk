import { Link } from 'react-router-dom';
import image from '../../img/imgonline-com-ua-Resize2.jpg';
import './CharacterDetail.scss';

const CharacterDetail = props => {

const {photo, name, specie, resolution, step, scale, prompt} = props.character;

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
        <p className="detail-properties">Base model</p>
        <p className="detail-descriptions">{specie}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Training Resolution</p>
        <p className="detail-descriptions">{resolution}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Step Count</p>
        <p className="detail-descriptions">{step}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Guidance Scale</p>
        <p className="detail-descriptions">{scale}</p>
        <p className="detail-line"></p>
        <p className="detail-properties">Prompt details</p>
        <p className="detail-descriptions">{prompt}</p>
        <p className="detail-line"></p>
      </div>
    </article>
  );
};

export default CharacterDetail;