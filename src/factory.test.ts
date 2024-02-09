import { expect, test } from 'vitest'
import { factory } from './factory'

test('creates a count function', function () {
  const count = factory(1, 1)
  expect(count()).toBe(2)
  expect(count()).toBe(3)
})

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5)
  expect(count()).toBe(15)
  expect(count()).toBe(20)
})

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory()
  expect(count()).toBe(1)
  expect(count()).toBe(2)
})

test("creates a count function with negative step value", function () {
  const count = factory(5, -2);
  expect(count()).toBe(3);
  expect(count()).toBe(1);
});

test("creates a count function with negative start value", function () {
  const count = factory(-3, 2);
  expect(count()).toBe(-1);
  expect(count()).toBe(1);
});

test("creates a count function with floating-point step value", function () {
  const count = factory(1, 0.5);
  expect(count()).toBe(1.5);
  expect(count()).toBe(2);
});
