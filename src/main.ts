import { countValue, updateCountAndResetCounter, updateCount } from './counter'

const startInput = document.getElementById('start_at') as HTMLInputElement
const stepInput = document.getElementById('step') as HTMLInputElement
const countButton = document.querySelector('.count_button') as HTMLButtonElement
const currentCountDisplay = document.querySelector(
  '.current_count'
) as HTMLSpanElement

startInput?.addEventListener('change', () =>
  updateCountAndResetCounter(startInput, stepInput, currentCountDisplay)
)
stepInput?.addEventListener('change', () =>
  updateCountAndResetCounter(startInput, stepInput, currentCountDisplay)
)
countButton?.addEventListener('click', () =>
  updateCount(countValue, currentCountDisplay)
)
