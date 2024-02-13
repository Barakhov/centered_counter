import { factory } from './factory';

export let countValue = factory(0, 1);

export function updateCountAndResetCounter(
  startInput: HTMLInputElement,
  stepInput: HTMLInputElement,
  currentCountDisplay: HTMLSpanElement
) {
  countValue = factory(+startInput.value, +stepInput.value);
  resetCounterDisplay(+startInput.value, currentCountDisplay);
}

export function updateCount(
  countFunction: () => number,
  currentCountDisplay: HTMLSpanElement
) {
  currentCountDisplay.innerText = countFunction().toString();
}

function resetCounterDisplay(
  startValue: number,
  currentCountDisplay: HTMLSpanElement
) {
  currentCountDisplay.innerText = startValue.toString();
}
