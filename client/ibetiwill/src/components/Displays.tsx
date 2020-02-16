import React from 'react';
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

