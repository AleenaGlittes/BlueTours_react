import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import Logo from '../../User_components/logo';
import Nav from '../../User_components/nav.js';


const Header = () => {

  
  return (
    <header className=' sticky top-0 z-[20]mx-auto flex w-full flex-wrap  justify-between border-b  p-3 bg-opacity-0  ' >
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;