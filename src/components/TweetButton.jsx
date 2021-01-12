import {Link} from 'react-router-dom';
import '../assets/style/button.scss';

export default function TweetButton(prop) {
  const Button = ({size}) => {
    return (
      <div className="tweet_circle" style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${size}px`
      }}>
        <i class="fas fa-feather"></i>
      </div>
    )
  }

  return (
    <div>
      <Link to="/tweet">
        <Button size={prop.size}/>
      </Link>
    </div>
  )
}