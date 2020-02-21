export type Visbility = 'global'|'group'|'1on1';
export type PrimitiveUser = 'Overstand'|'Jan'|'Brendan'|'Faebe'|'Chingu' | null;

type user_id = number;

export interface Bet {
  id: string,
  goal: string,
  description: string,
  endDate: Date,
  isPublished: Boolean,
  won: boolean
  createdAt: Date,
  updatedAt: Date | null,
  user: PrimitiveUser, //ManyToOne in graphQl
}


export const data: Bet[] = [
  {
    id: '0',
    user: 'Overstand',
    goal: 'wake up tomorrow before Faebe',
    description: '',
    endDate: new Date('2028-05-25T10:11:53'),
    isPublished: true,
    won: true,
    createdAt: new Date('2018-05-25T10:11:53'),
    updatedAt: null,
  },
  {
    id: '1',
    user: 'Brendan',
    goal: 'become proficient in graphQL in 4 weaks',
    description: '',
    endDate: new Date('2028-05-25T10:11:53'),
    isPublished: true,
    won: true,
    createdAt: new Date('2018-05-25T10:11:53'),
    updatedAt: null,
  },
  {
    id: '2',
    user: 'Jan',
    goal: 'go swimming in the river today',
    description: '',
    endDate: new Date('2028-05-25T10:11:53'),
    isPublished: true,
    won: false,
    createdAt: new Date('2018-05-25T10:11:53'),
    updatedAt: null,
  },
  {
    id: '3',
    user: 'Faebe',
    goal: 'hike the highest mountain in Thailand tomorrow',
    description: '',
    endDate: new Date('2028-05-25T10:11:53'),
    isPublished: true,
    won: false,
    createdAt: new Date('2018-05-25T10:11:53'),
    updatedAt: null,
  },
]
