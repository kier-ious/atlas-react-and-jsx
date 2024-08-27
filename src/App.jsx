import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';
import OpenLink from './components/OpenLink';
import Footer from './components/Footer';


function App() {
return (
  <div className="App">
    <Header className="header" />

    <Section title="What is React?">
      <p>
        React is a JavaScript Library for building user interfaces, maintained by FB
        and a community of developers. It is not a framework, it is a complete
        solutiion - such as Angular, which is a full feature framework. React uses a
        virtual DOM, with this it helps mitigate a longer reload and update time and only reloads
        and updates specific components that you've made adjustments to. React uses
        component based architecture, breaking down the UI into small independent
        components that have their own responsibities. This makes production more
        maintainable and scalable.
      </p>
    </Section>

    <Section title="Benefits of React">
      <ul>
        <li>Component based architecture</li>
        <li>Efficient updates and loading speed with virtual DOM</li>
        <li>Maintained by a large community of developers</li>
        <li>Wide array of libraries and tools</li>
        <li>Declarative syntax, you tell React what you want to happen without
          specifying how to get there. This makes for easier debugging and testing.
        </li>
      </ul>
    </Section>

    <Section title="Helpful Resources">
      <HelpfulResource
        link="https://www.youtube.com/watch?v=CgkZ7MvWUAA"
        label="React Full Course"
      />
      <HelpfulResource
        link="https://react.dev/"
        label="React Official Documentation"
      />
      <HelpfulResource
        link="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
        label="React MDN Web Docs"
      />
    </Section>

    <AboutMe />

    <Footer />
  </div>
  );
}

export default App;
