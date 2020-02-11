import React from 'react';

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type InputEventHandler = (arg1: InputEvent) => void;

// TODO if more event types: make use of typescript generics
//export type EventHandler<T = {}> = (arg1: T) => void;
export type Visbility = 'global'|'group'|'1on1';
export type PrimitiveUser = 'Overstand'|'Jan'|'Brendan'|'Faebe'|'Chingu' | null;

export type Bet = {
  date: Date,
  event: string,
  user: PrimitiveUser,
  on: PrimitiveUser[] | [], //votes believing
  against: PrimitiveUser[] | [], //votes don't believe' 
  visibility: Visbility,
}
