import { useEffect, useMemo, useState } from 'react'

export const IMPLEMENTATION_OPEN_AT = new Date('2026-05-04T19:00:00+05:30').getTime()
export const IMPLEMENTATION_URL = 'https://forms.gle/4pGd5xQYCMqzjrFB7'

export const SCHOOL_REGISTRATION_OPEN_AT = new Date('2026-06-13T00:00:00+05:30').getTime()
export const SCHOOL_REGISTRATION_CLOSE_AT = new Date('2026-06-20T23:59:59+05:30').getTime()
export const SCHOOL_REGISTRATION_URL = 'https://forms.gle/76HahruTXmjLPwdq6'

function formatCountdown(distance) {
  const hours = Math.floor(distance / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

function computeTimedState({ openAt, closeAt, openLabel, countdownPrefix, closedLabel, url, anchorWhenClosed }) {
  const now = Date.now()

  if (closeAt && now > closeAt) {
    return { isOpen: false, isClosed: true, label: closedLabel, href: anchorWhenClosed }
  }

  const distance = openAt - now

  if (distance <= 0) {
    return { isOpen: true, isClosed: false, label: openLabel, href: url }
  }

  return {
    isOpen: false,
    isClosed: false,
    label: `${countdownPrefix} ${formatCountdown(distance)}`,
    href: anchorWhenClosed,
  }
}

function useTimedRegistrationCta(config) {
  const computeState = () => computeTimedState(config)

  const [state, setState] = useState(computeState)

  useEffect(() => {
    const timer = setInterval(() => setState(computeState()), 1000)
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

export function useImplementationCta() {
  return useTimedRegistrationCta({
    openAt: IMPLEMENTATION_OPEN_AT,
    openLabel: 'IMPLEMENTATION SUBMISSION STARTED',
    countdownPrefix: 'OPENS IN',
    closedLabel: 'SUBMISSION CLOSED',
    url: IMPLEMENTATION_URL,
    anchorWhenClosed: '#register',
  })
}

export function useSchoolRegistrationCta() {
  return useTimedRegistrationCta({
    openAt: SCHOOL_REGISTRATION_OPEN_AT,
    closeAt: SCHOOL_REGISTRATION_CLOSE_AT,
    openLabel: 'SCHOOL REGISTRATION OPEN',
    countdownPrefix: 'OPENS IN',
    closedLabel: 'REGISTRATION CLOSED',
    url: SCHOOL_REGISTRATION_URL,
    anchorWhenClosed: '#register',
  })
}

/** @deprecated Use useImplementationCta instead */
export function useRegistrationCta() {
  return useImplementationCta()
}

export const REGISTRATION_OPEN_AT = IMPLEMENTATION_OPEN_AT
export const REGISTRATION_URL = IMPLEMENTATION_URL
