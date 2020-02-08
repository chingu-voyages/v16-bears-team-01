import React from 'react';

export type InputEvent = React.ChangeEvent<HTMLInputElement>;
export type InputEventHandler = (arg1: InputEvent) => void;

// TODO if more event types: make use of typescript generics
//export type EventHandler<T = {}> = (arg1: T) => void;
