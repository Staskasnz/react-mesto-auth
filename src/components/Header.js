import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header(props) {

  const location = useLocation();
  const navigate = useNavigate();

  let text = '';
  let handleLinkClick = null;

  switch (location.pathname) {
    case '/sign-in':
      text = 'Регистрация';
      handleLinkClick = () => navigate('/sign-up', { replace: true });
      break;
    case '/sign-up':
      text = 'Войти';
      handleLinkClick = () => navigate('/sign-in', { replace: true });
      break;
    case '/':
      text = 'Выйти'
      handleLinkClick = () => {
        localStorage.removeItem('token');
        navigate('/sign-in', { replace: true })
      };
      break;
    default:
      text = 'Такой страницы не существует';
  }

  return (
    <>
      <header className="header">

        <img src={logo} alt="Логотип" className="header__logo" />
        <div className='header__user-information'>
          <p className='header__email'>{props.loginEmail}</p>
          <a className="header__link" onClick={handleLinkClick} href={'#'}>{text}</a>
        </div>
      </header>
      <div className="header__line"></div>
    </>
  )
}

export default Header;