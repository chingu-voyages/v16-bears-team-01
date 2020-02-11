import { Bets } from '../common/types';

export const IBets: Bets[] = [
  {
    event: 'wake up tomorrow before Faebe',
    user: 'Overstand',
    on: [],
    against: ['Faebe'], 
    visibility: '1on1',
  },
  {
    event: 'become proficient in graphQL in 4 weaks',
    user: 'Brendan',
    on: ['Jan','Overstand'],
    against: [], 
    visibility: 'group',
  },
  {
    event: 'go swimming in the river today',
    user: 'Jan',
    on: [],
    against: ['Jan','Overstand','Faebe'], 
    visibility: 'global',
  },
  {
    event: 'hike the highest mountain in Thailand tomorrow',
    user: 'Faebe',
    on: ['Brendan'],
    against: ['Jan','Overstand'], 
    visibility: 'global',
  },
]
