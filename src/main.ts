import { factory } from './factory'

let count = factory(0, 1)

const start_at_control = document.getElementById('start_at') as HTMLInputElement
const step_control = document.getElementById('step') as HTMLInputElement
const count_button = document.querySelector('.count_button') as HTMLButtonElement
const current_count = document.querySelector('.current_count') as HTMLSpanElement

function update_count_and_reset_counter() {
  count = factory(+start_at_control.value, +step_control.value)
  reset_counter(+start_at_control.value)
}

function update_count() {
  current_count.innerText = count().toString()
}

function reset_counter(start_at_value: number) {
  console.log(start_at_control.value)
  current_count.innerText = start_at_value.toString()
}

start_at_control?.addEventListener('change', update_count_and_reset_counter)
step_control?.addEventListener('change', update_count_and_reset_counter)
count_button.addEventListener('click', update_count)
