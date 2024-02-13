import { count, update_count_and_reset_counter, update_count } from "./counter";

const start_at_control = document.getElementById('start_at') as HTMLInputElement
const step_control = document.getElementById('step') as HTMLInputElement
const count_button = document.querySelector('.count_button') as HTMLButtonElement
const current_count = document.querySelector('.current_count') as HTMLSpanElement

start_at_control?.addEventListener('change', () => update_count_and_reset_counter(start_at_control, step_control, current_count))
step_control?.addEventListener('change', () => update_count_and_reset_counter(start_at_control, step_control, current_count))
count_button?.addEventListener('click', () => update_count(current_count, count))
