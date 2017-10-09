// @flow

import test from 'ava';
import Nightmare from 'nightmare';

test('Page title should be "fake"', async (t): Promise<*> => {
  const nightmare: any = Nightmare();

  const res: string = await nightmare
    .goto(process.env.TEST_URL)
    // eslint-disable-next-line no-undef
    .evaluate(() => document.title);

  t.is(res, 'fake');
});
