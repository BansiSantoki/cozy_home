import React from 'react'

type P = { className?: string }

export function FacebookIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#1877F2" />
      <path
        fill="#fff"
        d="M33.3 30.9 34.4 24H27.8v-4.5c0-1.9.9-3.7 3.9-3.7h3V9.9s-2.7-.5-5.3-.5c-5.4 0-9 3.3-9 9.2V24h-6v6.9h6V48c1.2.2 2.4.3 3.7.3s2.5-.1 3.7-.3V30.9z"
      />
    </svg>
  )
}

export function InstagramIcon({ className }: P) {
  const id = React.useId()
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <radialGradient id={id} cx="0.3" cy="1.07" r="1.3">
          <stop offset="0" stopColor="#FDD56C" />
          <stop offset="0.1" stopColor="#FDD56C" />
          <stop offset="0.5" stopColor="#F5463B" />
          <stop offset="0.7" stopColor="#D6249F" />
          <stop offset="1" stopColor="#5B4FE0" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill={`url(#${id})`} />
      <rect x="12.5" y="12.5" width="23" height="23" rx="7" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="24" cy="24" r="5.6" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="30.6" cy="17.4" r="1.7" fill="#fff" />
    </svg>
  )
}

export function WhatsAppIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="24" fill="#25D366" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinejoin="round"
        d="M24 11.5c-6.9 0-12.5 5.6-12.5 12.4 0 2.3.6 4.4 1.7 6.3L11.5 36.5l6.5-1.7c1.8 1 3.9 1.6 6 1.6 6.9 0 12.5-5.6 12.5-12.4S30.9 11.5 24 11.5z"
      />
      <path
        fill="#fff"
        d="M19.6 17.8c-.3-.6-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 3.9c.2.3 2.6 4.2 6.5 5.7 3.2 1.3 3.9 1 4.6.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.7-.4l-2.4-1.2c-.3-.1-.6-.2-.8.2l-1.1 1.4c-.2.2-.4.3-.8.1-.3-.2-1.5-.5-2.8-1.7-1-.9-1.7-2-1.9-2.4-.2-.3 0-.5.1-.7l.6-.7c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1.1-2.6z"
      />
    </svg>
  )
}

export function MapsPinIcon({ className }: P) {
  const id = React.useId()
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <defs>
        <clipPath id={id}>
          <path d="M24 3a14 14 0 0 0-14 14c0 9.5 14 28 14 28s14-18.5 14-28A14 14 0 0 0 24 3z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect x="0" y="0" width="48" height="48" fill="#4285F4" />
        <polygon points="0,0 34,0 14,22 0,22" fill="#EA4335" />
        <polygon points="0,22 14,22 30,30 18,48 0,48" fill="#FBBC04" />
        <polygon points="18,48 30,30 40,28 40,48" fill="#34A853" />
      </g>
      <circle cx="24" cy="17" r="5" fill="#fff" />
    </svg>
  )
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function BedIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...stroke}>
      <path d="M7 36V14a3 3 0 0 1 3-3h28a3 3 0 0 1 3 3v22" />
      <path d="M11 24v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M25 24v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      <path d="M5 30a5 5 0 0 1 5-6h28a5 5 0 0 1 5 6v6H5z" />
      <path d="M8 36v3M40 36v3" />
    </svg>
  )
}

export function WardrobeIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...stroke}>
      <rect x="10" y="5" width="28" height="36" rx="1.5" />
      <path d="M24 5v36M21 22v4M27 22v4M12 41v3M36 41v3" />
    </svg>
  )
}

export function ToolsIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...stroke}>
      <path d="M13.5 5.5a7 7 0 0 0-7.6 9.6l4.4-.3 1.6 3.2-2.5 3.6a7 7 0 0 0 9.4-7.5l20.4 20.4a3 3 0 0 1-4.2 4.2L14.6 18.3" />
      <path d="M33 6l9 9-3 2-3.5-.5L22 30l-4-4 13.5-13.5L31 9z" />
      <path d="M18 26l-9.5 9.5a3 3 0 0 0 4 4L22 30" />
    </svg>
  )
}

export function FaucetIcon({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden {...stroke}>
      <path d="M18 8h12M24 8v5" />
      <path d="M8 26v-8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v3h-6v-1a2 2 0 0 0-2-2H16a2 2 0 0 0-2 2v6z" />
      <path d="M37 21v4" />
      <path d="M11 30c0 2-2.5 4.5-2.5 6.5a2.5 2.5 0 0 0 5 0C13.5 34.5 11 32 11 30z" />
    </svg>
  )
}
