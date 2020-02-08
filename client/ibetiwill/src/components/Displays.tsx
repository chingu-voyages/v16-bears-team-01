import React from 'react';

import './Displays.css';

interface TextProps {
  value: string,
  i?: number | null,   //optionally show list-index
}

export const Text = ({ value, i=null }: TextProps) => (
  <div className="DisplayText">
    {i ? `${i}. ${value}` : value}
  </div>
);


interface TextListProps {
  items: any[]
}

export const TextList = ({ items }: TextListProps) => (
  <div className="DisplayList">
    {items.length > 0 
      ? items.map((text, i) => (
          <Text 
            key={i}
            value={text}
            i={i+1}
          />
        ))
      : <Text value="No Bets placed..."/>
    }
  </div>
);
