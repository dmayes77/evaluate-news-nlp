import { checkUrl } from '../src/client/js/checkURL';

const formUrl =
  'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen';

describe('checkUrl', () => {
  test('should validate url', () => {
    expect(checkUrl(formUrl)).toBe(true);
  });
  test('should validate url', () => {
    expect(checkUrl('google')).toBe(false);
  });
});
