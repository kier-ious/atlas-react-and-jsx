import React from 'react';
import links from '../assets/links.json';


const Footer = () => {
  // JS for current yr
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.link}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  );
}

export default Footer;
