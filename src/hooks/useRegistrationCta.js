import { useEffect, useMemo, useState } from 'react'

export const REGISTRATION_OPEN_AT = new Date('2026-05-04T19:00:00+05:30').getTime()
export const REGISTRATION_URL = 'https://forms.gle/4pGd5xQYCMqzjrFB7'

function formatCountdown(distance) {
  const hours = Math.floor(distance / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export function useRegistrationCta() {
  const computeState = () => {
    const distance = REGISTRATION_OPEN_AT - Date.now()

    if (distance <= 0) {
      return { isOpen: true, label: 'IMPLEMENTATION SUBMISSION STARTED', href: REGISTRATION_URL }
    }

    return { isOpen: false, label: `REGISTER IN ${formatCountdown(distance)}`, href: '#register' }
  }

  const [state, setState] = useState(computeState)

  useEffect(() => {
    const timer = setInterval(() => {
      setState(computeState())
    }, 1000)

    setState(computeState())

    return () => clearInterval(timer)
  }, [])

  return useMemo(() => ({
    ...state,
    onClick: (event) => {
      if (!state.isOpen) {
        event.preventDefault()
      }
    },
    'aria-disabled': !state.isOpen,
    tabIndex: state.isOpen ? undefined : -1,
  }), [state])
}