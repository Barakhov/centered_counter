import { factory } from './factory'

export let count = factory(0, 1)

export function update_count_and_reset_counter(
  start_at_control: HTMLInputElement,
  step_control: HTMLInputElement,
  current_count: HTMLSpanElement
) {
  count = factory(+start_at_control.value, +step_control.value)
  reset_counter(current_count, +start_at_control.value)
}

export function update_count(
  current_count: HTMLSpanElement,
  countFuntion: () => number
) {
  current_count.innerText = countFuntion().toString()
}

export function reset_counter(
  current_count: HTMLSpanElement,
  start_at_value: number
) {
  current_count.innerText = start_at_value.toString()
}
