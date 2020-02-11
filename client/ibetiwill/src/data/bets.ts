import { Bet } from '../common/types';

export const Bets: Bet[] = [
  {
    event: 'wake up tomorrow before Faebe',
    date: new Date('2018-05-25T10:11:53'),
    user: 'Overstand',
    on: [],
    against: ['Faebe'], 
    visibility: '1on1',
  },
  {
    event: 'become proficient in graphQL in 4 weaks',
    date: new Date('2018-05-25T10:11:53'),
    user: 'Brendan',
    on: ['Jan','Overstand'],
    against: [], 
    visibility: 'group',
  },
  {
    event: 'go swimming in the river today',
    date: new Date('2018-05-25T10:11:53'),
    user: 'Jan',
    on: [],
    against: ['Jan','Overstand','Faebe'], 
    visibility: 'global',
  },
  {
    event: 'hike the highest mountain in Thailand tomorrow',
    date: new Date('2018-05-25T10:11:53'),
    user: 'Faebe',
    on: ['Brendan'],
    against: ['Jan','Overstand'], 
    visibility: 'global',
  },
]
