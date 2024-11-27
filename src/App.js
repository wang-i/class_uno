import logo from './logo.svg';
import './App.css';
import { classNames } from './components/class-info';
import { classImages } from './components/class-info';
import { classQuotes } from './components/class-info';
import { posEffects } from './components/class-info';
import { negEffects } from './components/class-info';
import { softColors } from './components/colors';
import { brightColors } from './components/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  // Initial state
  const [color, setColor] = useState("#ec3939");
  const [clazz, setClass] = useState("OMG Class Uno!!!!!");
  const [image, setImage] = useState(logo);
  const [quote, setQuote] = useState("woahhhhhhhhhh wow amazing ඞ");
  const [posEffect, setPosEffect] = useState("+ fun");
  const [negEffect, setNegEffect] = useState("- brain explode");

  // State change after reload
  const handleClick = () => {
    const randNum = Math.floor(Math.random() * classNames.length);

    setClass(classNames[randNum]);
    setImage(classImages[randNum]);
    setQuote(classQuotes[randNum]);

    if (randNum === 9) { // Time traveller has a longer list of positive effects
      setPosEffect(posEffects[randNum * 3] + "\n" + posEffects[randNum * 3 + 1] + "\n" + posEffects[randNum * 3 + 2]);
    } else {
      setPosEffect(posEffects[randNum * 3] + "\n" + posEffects[randNum * 3 + 1]);
    }

    if (randNum === 0) { // Traveller has no negative effects
      setNegEffect("");
    } else {
      setNegEffect(negEffects[randNum * 2] + "\n" + negEffects[randNum * 2 + 1]);
    }

    // Change background color
    const randColor = randNum % softColors.length; // each class should have a consistent colour
    setColor(softColors[randColor]);
  };

  useEffect(() => { //https://ghost-together.medium.com/how-to-change-background-color-dynamically-in-react-on-mouse-click-8af02fdc5e95
    document.body.style.backgroundColor = color
  }, [color]) //[color] is a dependency array which tells React to only re-run the useEffect hook when the color variable changes (according to chatgpt)

  // Allow users to use Space or Enter instead of clicking button
  const documentRef = useRef(document); //https://www.preciousorigho.com/articles/a-better-way-to-create-event-listeners-in-react
  documentRef.current.addEventListener("keydown", (e) => {
    onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === " ") {
        handleClick();
      };
    }
  });

  return (
    <div className="App">
      <div className="Card">
        <div className="Card-Inner">
          <div className="Card-Front">
            <div className="Title">
              <h3>{clazz}</h3>
            </div> {/*Title*/}
            <div className="Image">
              <img src={image} className="App-logo" alt="logo" />
            </div> {/*Image*/}
            <div className="Quote">
              <h4>{quote}</h4>
            </div> {/*Quote*/}
            <div className="Description">
              <div className="Description-Container">
                <p id="class-description-pos">{posEffect}</p>
                <p id="class-description-neg">{negEffect}</p>
              </div> {/*Description-Container*/}
            </div> {/*Description*/}
          </div> {/*Card-Front*/}
          <div className="Card-Back">
            <div className="Oval-Border"></div>
            <div className="Oval">
                <div className="Oval-Text-Smaller">
                  <h2>CLASS</h2>
                </div>
                <div className="Oval-Text-Main">
                  <h1>UNO</h1>
                </div>
            </div> {/*Oval*/}
          </div> {/*Card-Back*/}
        </div> {/*Card-Inner*/}


      </div> {/*Card*/}

      <button onClick={handleClick}>Generate class</button>
    </div> //App
  );
}

export default App;
