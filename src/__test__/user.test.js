import checkHealth from '../user';

test.each([
  ['green status', { name: 'igor', health: 75 }, 'healthy'],
  ['orange status', { name: 'lena', health: 45 }, 'wounded'],
  ['red status', { name: 'God', health: 12 }, 'critical'],
])('check user helth  %s', (_, user, healthStatus) => {
  const result = checkHealth(user);
  expect(result).toBe(healthStatus);
});
