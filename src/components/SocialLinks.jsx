import React from 'react';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';


function SocialLinks() {
  return (
    <div className="social-links">
      <a
      href="https://www.linkedin.com/in/kiermcalister/"
      >
        <img src={linkedInLogo} alt="LinkedIn" />
      </a>
      <a
      href="https://github.com/kier-ious"
      >
        <img src={githubLogo} alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialLinks;
