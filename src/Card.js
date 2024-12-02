import logo from './logo.svg';

import { classNames } from './components/class-info';
import { classImages } from './components/class-info';
import { classQuotes } from './components/class-info';
import { posEffects } from './components/class-info';
import { negEffects } from './components/class-info';

var clazz;
var image;
var quote;
var posEffect;
var negEffect;

// Basic template for card
export function Card() {
  return (
    <div className="Card">
      <div className="Card-Inner">
        <div className="Card-Front">
          <div className="Title">
            <h3>{clazz}</h3>
          </div> {/*Title*/}
          <div className="Image">
            <img src={image} className="class-image" alt="class image" />
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
    </div> //Card
  );
};

// Customize card based on chosen class
export function getRandCard() {
  const randNum = Math.floor(Math.random() * classNames.length);

  clazz = classNames[randNum];
  image = classImages[randNum];
  quote = classQuotes[randNum];

  if (randNum === 9) { // Time traveller has a longer list of positive effects
    posEffect = posEffects[randNum * 3] + "\n" + posEffects[randNum * 3 + 1] + "\n" + posEffects[randNum * 3 + 2];
  } else {
    posEffect = posEffects[randNum * 3] + "\n" + posEffects[randNum * 3 + 1];
  }

  if (randNum === 0) { // Traveller has no negative effects
    negEffect = "";
  } else {
    negEffect = negEffects[randNum * 2] + "\n" + negEffects[randNum * 2 + 1];
  }
}
