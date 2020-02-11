import { 
  getHHMM,
  getDayDdMonth,
} from '../DatetimeUtils'

test('getHHMM with double digits', () => {
  const date = new Date('2018-05-25T10:11:53');
  expect(getHHMM(date)).toMatch('10:11');
});

test('getHHMM with single digits', () => {
  const date = new Date('2018-05-25T01:02:53');
  expect(getHHMM(date)).toMatch('01:02');
});

test('getDayDdMonth', () => {
  const date = new Date('2018-05-25T10:11:53');
  expect(getDayDdMonth(date)).toMatch('Fri 25.May');
});
