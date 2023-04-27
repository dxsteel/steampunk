import instagram from "img/instagram-original.png";
import discord from "img/discord-original.png";
import mail from "img/mail.png";
import logo from "img/Logo.png";
import './Navigation.scss';


export const Navigation = () => {
  return (
    <div className="navigation-position">
      <div className="navigation-logo">
      <img src={logo} className="logo" alt="logo" />
      <h2 className="navigation-header">PromptFactory</h2>
      </div>
      
      <div className="navigation">
      <a href="https://discordapp.com/users/1047236441832439918/" className="navigation-instagram" target="_blank" rel="noopener noreferrer">
      <img src={discord} alt="discord" width={40} /> </a>
      <a href="https://www.instagram.com/iron_maidenss/" className="navigation-instagram" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="instagram" width={40} /> </a>
      <a href="mailto: dxsteel27@gmail.com" className="navigation-instagram" target="_blank" rel="noopener noreferrer">
      <img src={mail} alt="mail" width={40} /> </a>
      </div>
    </div>
  );
};

export default Navigation;