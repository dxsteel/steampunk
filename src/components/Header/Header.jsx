import image from '../../img/imgonline-com-ua-Resize1.jpg'
import './Header.scss'


export const Header = () => {
  return (
    <div
    className='header'
      style={{
        backgroundImage:`url(${image})`
      }}
    >
      World of steampunk
    </div>
  );
};

export default Header;