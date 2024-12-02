import './App.css';
import { Card, getRandCard } from './Card.js';

import { softColors } from './components/colors';
import { brightColors } from './components/colors';

import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

import { useSound } from 'use-sound'; //https://github.com/joshwcomeau/use-sound; https://www.joshwcomeau.com/react/announcing-use-sound-react-hook/
import cardSfx from './assets/sfx/card_pickup.wav';

function App() {
  // Initial state
  const [numGenerated, setNumGenerated] = useState(0);
  const [color, setColor] = useState("#ec3939");
  const [randNum, setRandNum] = useState(-1);
  
  // For audio
  const [volume, setVolume] = useState(0.1); //ranges from 0 to 1
  const [playbackRate, setPlaybackRate] = useState(1.75); //ranges from 0.5 to 4
  const [interrupt, setInterrupt] = useState(false); //true or false; specifies whether or not the sound should be able to "overlap" if the play function is called again before the sound has ended
  const [play] = useSound(cardSfx, { volume, playbackRate, interrupt });

  var timeoutTime;

  // State change after reload
  const handleClick = () => {
    setNumGenerated(numGenerated + 1);

    // Disable button
    document.getElementById("btn").disabled = true; //https://stackoverflow.com/questions/1550150/how-to-rate-limit-clicks-on-a-button-to-once-per-minute-in-javascript

    // Play card hide animation if it's not the first card being revealed
    if (numGenerated !== 0) {
      restartAnimation1();
      timeoutTime = 2000;
    } else { // If it is the first card, go straight into card reveal animation
      timeoutTime = 0;
    }

    // Use timeout to ensure animation finishes before changing class
    setTimeout(() => {
      // Logic for background RNG; we want to prevent consecutive duplicates
      var x;
      do {
        x = Math.floor(Math.random() * softColors.length);
      } while (x === randNum)
      setRandNum(x);

      // Change info on card
      getRandCard();

      // Change background color
      const randColor = randNum % softColors.length;
      setColor(softColors[randColor]);

      // Play audio
      play();

      // Play card reveal animation
      restartAnimation2();
      
      // Re-enable button after card is fully revealed
      setTimeout(() => {
        document.getElementById("btn").disabled = false;
      }, 1000);
      
    }, timeoutTime);

  };

  // Hide card
  function restartAnimation1() { //https://www.kirupa.com/animations/restarting_css_animations.htm
    let card = document.getElementsByClassName("Card-Inner")[0];
    // Switch to a different animation momentarily to be able to "reset" the flipCard animation
    card.style.animationName = "keepCardRevealed";

    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.animation = "flipCard 0.5s 0s reverse";
        play();
      }, 500);
    });
  }

  // Reveal card
  function restartAnimation2() { //https://www.kirupa.com/animations/restarting_css_animations.htm
    let card = document.getElementsByClassName("Card-Inner")[0];

    card.style.animationName = "none";

    requestAnimationFrame(() => {
      setTimeout(() => {
        card.style.animation = "flipCard 1s 0s forwards";
      }, 0);
    });
  }

  useEffect(() => { //https://ghost-together.medium.com/how-to-change-background-color-dynamically-in-react-on-mouse-click-8af02fdc5e95
    document.body.style.backgroundColor = color
  }, [color]) //[color] is a dependency array which tells React to only re-run the useEffect hook when the color variable changes (according to chatgpt)

  // Allow users to use Space or Enter instead of clicking button
  const documentRef = useRef(document); //https://www.preciousorigho.com/articles/a-better-way-to-create-event-listeners-in-react
  documentRef.current.addEventListener("keyup", (e) => {
    onkeyup = (e) => {
      if (e.key === 'Enter' || e.key === " ") {
        // Only call function if button is not disabled (meaning cooldown is over)
        if (document.getElementById("btn").disabled === false) {
          handleClick();
        }
      };
    }
  });

  return (
    <div className="App">
      <Card />
      <button id = "btn" onClick={handleClick}>NEW CLASS 🔁</button>
    </div> //App
  );
}

export default App;
