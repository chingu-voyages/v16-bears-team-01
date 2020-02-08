import React from 'react';

//this is just about typescript - in can become complicated with events
import { InputEventHandler } from '../common/types';

import './UserInput.css';

interface TextInputProps {
  value: string,
  placeHolder: string,
  changeHandler: InputEventHandler,
}

export const TextInput = ({ 
  value, 
  placeHolder,
  changeHandler,
}: TextInputProps) => (
  <input
    type="text" 
    value={value}
    placeholder={placeHolder} 
    onChange={changeHandler}
  />
)
