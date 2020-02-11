import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { InputEvent } from './common/types'
import { TextInput, TextList } from './components'


//important: I use a Function-component with 'Hooks' here to 
//represent the stateful Top-component. 
//You could use a Class instead but it is more code.
//(But: sometimes it is still better to use classes - mostly when 
// you need lifecycle methods or refs)
//TODO --- probably we will transform to a Class component when the app grows.

const App = () => {
  const [betText, setBetText] = useState(''); // <- those constants are hooks
  const [bets, setBets] = useState<string[] | []>([]);
  return (
    <div className="App">
      <div className="Tools">
        <TextInput
          value={betText}
          placeHolder="Place a bet:"
          changeHandler={(e: InputEvent)  => {
            setBetText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (betText !== '') {
              setBets([...bets,  betText]);
              setBetText('');
            }
          }}
          title="Are you sure? - Release your Bet to the wild"
        >
          I bet!
        </button>
        <button
          onClick={() => {
            setBets([]);
            setBetText('');
          }}
          title="clear bets"
        >
          reset 
        </button>
      </div>
      <div className="BetsContainer">
        <TextList items={bets}/>
      </div>
      <footer>
        <p>coded by chingu Bears 01</p>
      </footer>
    </div>
  );
}

export default App;
