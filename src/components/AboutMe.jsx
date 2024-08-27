import React from 'react';
import AboutMePic from '../assets/aboutMePic.jpeg'
import OpenLink from './OpenLink';


function AboutMe({link}) {
  // const linkContainerStyle = {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: '20px',
  //   marginLeft: '8px',
  // };

  return (
    <div className="about-me">
      <img src={AboutMePic} alt="About Me" />
        <p>
          My name is Kier McAlister and I'm a student at Atlas School and my spec
          is Full Stack Web Development and I have just started my 5th Trimester. I
          just started working with React but I would have to say it's one of my favorites
          so far. Second would have to be Python for it's simplicity and powerful libraries that
          boast readability and clean syntax.
          My dream is to be able to incorporate my love for art and design with code. I've
          so enjoyed my time at Atlas for opening up my eyes to the world of possibilities. Ultimately I'd
          like to work on a team that does design and marketing.
          Outside of school I love to spend any time I have in nature, going to state parks with
          my dog and partner. I love to draw hyper-realism and read fiction. I also a HUGE fan of
          the X-Files.
        </p>
      {/* <p>
        You can learn more about me on my personal website!
        <span style={linkContainerStyle}>
          <OpenLink link="https://kier-mcalister.netlify.app/" />
        </span>
      </p> */}
    </div>
  );
}

export default AboutMe;
