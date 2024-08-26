import React from 'react';
import Greeting from './Greeting';
import SocialLinks from './SocialLinks';


function Header(props) {
return (
  <nav className="nav">
    <Greeting />
    <SocialLinks />
  </nav>
)
}

export default Header;
