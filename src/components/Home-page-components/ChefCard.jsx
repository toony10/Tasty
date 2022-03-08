import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
function ChefCard({ chef }) {
  return (
    <div className='chef-card'>
      <img src={chef.img} alt='chef' />
      <div className='chef-card-info'>
        <div className='chef-name'>{chef.name}</div>
        <div className='chef-recipes-count'>
          Recipes: <b> {chef.recipesCount}</b>
        </div>
        <div className='chef-Cuisine'>
          Cuisine: <b> {chef.cuisine}</b>
        </div>
        <div className='chef-social-media'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}

export default ChefCard;
