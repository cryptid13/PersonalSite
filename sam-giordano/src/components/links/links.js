import '../common.css';
import './links.css';
import map from '../../images/BerlinUBahnSubwayMap1970_150x150.jpg'

const mapAlt = "A map of Berlin's U-Bahn (Untergrundbahn = subway) in 1970, when Germany and Berlin were divided";

function Links() {
  return(
    <div className='main-component-content'>
        <figure>
          <img id='map' src={map} alt={mapAlt} title='Berlin - U-Bahn / Subway Map (1970)' />
          <figcaption>
            <i><a tabIndex={0} href='https://www.flickr.com/photos/24736216@N07/6570985349'>Image Credit: Roger W</a></i>
          </figcaption>
        </figure>
        <h1>More About Me</h1>
        <ul>
          <li>
            <a tabIndex={0} href='https://zenreveriescode.blog/'>My Blog</a>
          </li>
          <li>
            <a tabIndex={0} href='https://www.linkedin.com/in/johnathan-macgregor/'>LinkedIn</a>
          </li>
          <li>
            <a tabIndex={0} href='https://github.com/jdmac020'>Github</a>
          </li>
          <li>
            <a tabIndex={0} href='https://resist.bot/go/jdmac020'>ResistBot Petitions</a>
          </li>
        </ul>
    </div>
  );
}

export default Links;