import React, { Fragment } from 'react';
import { getDayDdMonth, timeAgo } from '../common/utils/DatetimeUtils';
import { Button } from 'antd';

import './Displays.css';

interface TextProps {
  value: string,
  i?: number | null,   //optionally show list-index
}

export const Text = ({ value, i=null }: TextProps) => (
  <div className="Text">
    {i ? `${i}. ${value}` : value}
  </div>
);


interface BetListProps {
  items: any[]
}

export const BetList = ({ items }: BetListProps) => (
  <div className="DisplayList">
    {items.length > 0 
    ? items.map(({event, user, date, on, against}, i) => (
          <div 
            key={i}
            className="DisplayRow"
          >
            <Text value={event}/>
            <Text value={`by ${user}`}/>
            <Text value={`${getDayDdMonth(date)} (${timeAgo(date)})`}/>
              <Button
                onClick={() => {}}
                title="bet on the creator"
              >
                ON 
              </Button>
              <Button
                onClick={() => {}}
                title="bet against the creator"
              >
                AGAINST 
              </Button>
      <p>{`Odds: ${(on.length/against.length).toFixed(2)}`}</p>
          </div>
        ))
      : <Text value="No Bets placed..."/>
    }
  </div>
);
