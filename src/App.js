import './App.css';
import { Card, getRandCard } from './Card.js';

import { classNames } from './components/class-info';
import { softColors } from './components/colors';
import { brightColors } from './components/colors';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { useSound } from 'use-sound'; //https://github.com/joshwcomeau/use-sound; https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
import cardSfx from './assets/sfx/card_pickup.wav';

function App() {
  // Initial state
  const [color, setColor] = useState("#ec3939");
  const [randNum, setRandNum] = useState(-1);
  
  // For audio
  const [volume, setVolume] = useState(0.1); //ranges from 0 to 1
  const [playbackRate, setPlaybackRate] = useState(1.75); //ranges from 0.5 to 4
  const [interrupt, setInterrupt] = useState(false); //true or false; specifies whether or not the sound should be able to "overlap" if the play function is called again before the sound has ended
  const [play] = useSound(cardSfx, { volume, playbackRate, interrupt });

  // State change after reload
  const handleClick = () => {
    // Logic for RNG; we want to prevent consecutive duplicates
    var x;
    do {
      x = Math.floor(Math.random() * classNames.length);
    } while (x === randNum)
    setRandNum(x);

    // Change info on card
    getRandCard(randNum);

    // Change background color
    const randColor = randNum % softColors.length; // each class should have a consistent colour
    setColor(softColors[randColor]);

    // Play audio
    play();
  };

  useEffect(() => { //https://ghost-together.medium.com/how-to-change-background-color-dynamically-in-react-on-mouse-click-8af02fdc5e95
    document.body.style.backgroundColor = color
  }, [color]) //[color] is a dependency array which tells React to only re-run the useEffect hook when the color variable changes (according to chatgpt)

  // Allow users to use Space or Enter instead of clicking button
  const documentRef = useRef(document); //https://www.preciousorigho.com/articles/a-better-way-to-create-event-listeners-in-react
  documentRef.current.addEventListener("keyup", (e) => {
    onkeyup = (e) => {
      if (e.key === 'Enter' || e.key === " ") {
        handleClick();
      };
    }
  });

  return (
    <div className="App">
      <Card />
      <button onClick={handleClick}>Generate class</button>
    </div> //App
  );
}

export default App;
