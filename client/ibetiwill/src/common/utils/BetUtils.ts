import { Action, Bet } from '../types';

//TODO test !

type NumActions = { on: number, against: number };

const getActionLengths = (bet: Bet): NumActions => ({
  on: bet.on.length,
  against: bet.against!==[] ? bet.against.length : 1,
})

const odds2Probability = (odds: number): number => 1 / (odds + 1);

export function oddsOn(bet: Bet): number {
  const numActions = getActionLengths(bet);
  return numActions.against / numActions.on
}

export function oddsAgainst(bet: Bet): number {
  const numActions = getActionLengths(bet);
  return numActions.on / numActions.against
}
