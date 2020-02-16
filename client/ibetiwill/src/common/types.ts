import React from 'react';

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type InputEventHandler = (arg1: InputEvent) => void;

// TODO if more event types: make use of typescript generics
//export type EventHandler<T = {}> = (arg1: T) => void;
export type Visbility = 'global'|'group'|'1on1';
export type PrimitiveUser = 'Overstand'|'Jan'|'Brendan'|'Faebe'|'Chingu' | null;

export type Action = {
  id: string,         //for graphql-integration?
  user: PrimitiveUser,
  odds: number,
  amount: number,
}

export type Bet = {
  id: string,         //for graphql-integration?
  event: string,
  user: PrimitiveUser,
  on: Action[] | [],
  against: Action[] | [],
  visibility: Visbility,
  createdOn: Date,
}
