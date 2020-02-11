import React, { useState, Fragment } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Menu, Icon } from 'antd';
import { InputEvent, Bet, PrimitiveUser } from './common/types';
import { TextInput, TextList } from './components';
import { getDayDdMonth, timeAgo } from './common/utils/DatetimeUtils';

//testdata: should consider integrating redux maybe:)
import { Bets } from './data/bets';

//important: I use a Function-component with 'Hooks' here to 
//represent the stateful Top-component. 
//You could use a Class instead but it is more code.
//(But: sometimes it is still better to use classes - mostly when 
// you need lifecycle methods or refs)
//TODO --- probably we will transform to a Class component when the app grows.



const App = () => {
  const [user, setUser] = useState<PrimitiveUser>('Faebe'); //TODO set to null
  const [betEvent, setBetEvent] = useState(''); //TODO set to null
  const [bets, setBets] = useState<Bet[]>(Bets);
  return (
    <Fragment>
      {!user
        ? <div>login</div>
        : <div className="App">
            <Menu onClick={() => {}} mode="horizontal">
              <Menu.Item key="bets">
                <Icon type="mail" />
                Navigation One
              </Menu.Item>
              <Menu.Item key="activity" disabled>
                <Icon type="appstore" />
                Activity 
              </Menu.Item>
              <Menu.Item key="friends" disabled>
                <Icon type="appstore" />
                Friends 
              </Menu.Item>
            </Menu>
            <div className="Tools">
              <TextInput
                value={betEvent}
                placeHolder="Place a bet:"
                changeHandler={(e: InputEvent)  => {
                  setBetEvent(e.target.value);
                }}
              />
              <Button
                onClick={() => {
                  if (betEvent !== '') {
                    setBets([...bets,  {
                      event: betEvent,
                      date: new Date(),
                      user: user,
                      on: [],
                      against: [],
                      visibility: 'global',
                    }]);
                    setBetEvent('');
                  }
                }}
                title="Are you sure? - Release your Bet to the wild"
              >
                I bet!
              </Button>
              <Button
                onClick={() => {
                  setBets([]);
                  setBetEvent('');
                }}
                title="clear bets"
              >
                reset 
              </Button>
            </div>
            <div className="BetsContainer">
              <TextList items={bets.map(
                bet => `bet.event ${getDayDdMonth(bet.date)} | by ${bet.user} | (${timeAgo(bet.date)})`
              )}/>
            </div>
            <footer>
              <p>coded by chingu Bears 01</p>
            </footer>
            </div>
      }
    </Fragment>
  );
}

export default App;
