export type Visbility = 'global'|'group'|'1on1';
export type PrimitiveUser = 'Overstand'|'Jan'|'Brendan'|'Faebe'|'Chingu' | null;

type user_id = number;

export interface Bet {
  id: string,
  user: PrimitiveUser, //id in graphql
  goal: string,
  description: string,
  end_date: Date,
  on: user_id[] | [],
  against: user_id[] | [],
  publ: Boolean,
  created_at: Date,
  updated_at: Date | null,
}

export const data: Bet[] = [
  {
    id: '0',
    user: 'Overstand',
    goal: 'wake up tomorrow before Faebe',
    description: '',
    end_date: new Date('2028-05-25T10:11:53'),
    on: [0,2],
    against: [2], 
    publ: false,
    created_at: new Date('2018-05-25T10:11:53'),
    updated_at: null,
  },
  {
    id: '1',
    user: 'Brendan',
    goal: 'become proficient in graphQL in 4 weaks',
    description: '',
    end_date: new Date('2028-05-25T10:11:53'),
    on: [3,4,5,6],
    against: [], 
    publ: true,
    created_at: new Date('2018-05-25T10:11:53'),
    updated_at: null,
  },
  {
    id: '2',
    user: 'Jan',
    goal: 'go swimming in the river today',
    description: '',
    end_date: new Date('2028-05-25T10:11:53'),
    on: [],
    against: [], 
    publ: true,
    created_at: new Date('2018-05-25T10:11:53'),
    updated_at: null,
  },
  {
    id: '3',
    user: 'Faebe',
    goal: 'hike the highest mountain in Thailand tomorrow',
    description: '',
    end_date: new Date('2028-05-25T10:11:53'),
    on: [],
    against: [], 
    publ: false,
    created_at: new Date('2018-05-25T10:11:53'),
    updated_at: null,
  },
]
