/* import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
}); */

import Magician from '../app';
import Daemon from '../daemon';

test('test magician with stoned', () => {
  const magician = new Magician(5, false, 100);
  const result = magician.attack;
  // без дурмана зависимость линейная
  // на 5 клетки - 60% сила урона
  expect(result).toBe(60);
});

test('test magician without stoned', () => {
  const magician = new Magician(2, true, 100);
  const result = magician.attack;
  // без дурмана зависимость линейная
  // на 5 клетки - 60% сила урона
  expect(result).toBe(85);
});

test('test daemon with stoned', () => {
  const daemon = new Daemon(5, false, 100);
  const result = daemon.attack;
  // без дурмана зависимость линейная
  // на 5 клетки - 60% сила урона
  expect(result).toBe(60);
});

test('test daemon without stoned', () => {
  const daemon = new Daemon(2, true, 100);
  const result = daemon.attack;
  // без дурмана зависимость линейная
  // на 5 клетки - 60% сила урона
  expect(result).toBe(85);
});
