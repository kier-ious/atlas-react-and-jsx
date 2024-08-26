import React from 'react';
import dayTimeImage from '../assets/day.svg';
import eveningImage from '../assets/evening.svg';
import nightTimeImage from '../assets/night.svg';


function Greeting() {
  // Get the current hour/time
  const currentHour = new Date().getHours();

  // Array for image and greeting selection
  const greetings = [
    { start: 6, end: 12, image: dayTimeImage, text: "Good Morning! " },
    { start: 12, end: 17, image: dayTimeImage, text: "Good Afternoon! " },
    { start: 17, end: 21, image: eveningImage, text: "Good Evening! " },
    { start: 21, end: 24, image: nightTimeImage, text: "Good Night! " }
  ];

  // Find correct image and greeting based on the current time
  const theGreeting = greetings.find(({ start, end }) =>
                      currentHour >= start && currentHour < end )

  // Greeting will always be provided unless it's the end of times
  if (!theGreeting) {
    // Just in case!
    return null;
  }

  const { image, text } = theGreeting;

  return (
    <h1 className="greeting">
      <img src={image} alt="greeting image" />
      {text}
    </h1>
  );
}

export default Greeting;
