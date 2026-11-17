import React from 'react'
import { ChevronRight } from 'lucide-react'

type Props = {
  href: string
  title: string
  subtitle: string
  image: string
  icon: React.ReactNode
  /** Icon already carries its own coloured circle (brand logos). */
  bareIcon?: boolean
  tone?: 'cream' | 'green'
}

export function LinkCard({ href, title, subtitle, image, icon, bareIcon, tone = 'cream' }: Props) {
  const green = tone === 'green'
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-[84px] w-full items-center overflow-hidden rounded-[22px] border-[1.5px] border-white/90 shadow-[0_6px_16px_-6px_rgba(70,40,15,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-transform duration-150 ease-out active:scale-[0.985] sm:h-[104px] sm:rounded-[26px] ${
        green
          ? 'bg-[linear-gradient(90deg,rgba(246,248,240,0.95)_0%,rgba(228,240,222,0.92)_45%,rgba(126,190,120,0.9)_100%)]'
          : 'bg-[linear-gradient(90deg,rgba(252,247,240,0.96)_0%,rgba(247,238,226,0.92)_55%,rgba(240,228,212,0.88)_100%)]'
      }`}
    >
      {/* Right-side image, faded into the card */}
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-y-0 right-0 h-full w-[46%] object-cover [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] sm:w-[44%]"
      />

      {/* Left icon */}
      <span
        className={`relative z-10 ml-3 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full sm:ml-4 sm:h-[66px] sm:w-[66px] ${
          bareIcon
            ? 'border-[3px] border-white bg-white shadow-[0_4px_10px_-3px_rgba(70,40,15,0.4)]'
            : 'border-2 border-white bg-[#f3e3cc] shadow-[0_4px_10px_-3px_rgba(70,40,15,0.35),inset_0_-4px_8px_rgba(196,160,118,0.35)]'
        }`}
      >
        {icon}
      </span>

      {/* Text */}
      <span className="relative z-10 ml-3 flex min-w-0 flex-1 flex-col pr-14 sm:ml-4 sm:pr-16">
        <span className={`truncate text-[18px] leading-tight font-bold sm:text-[23px] ${green ? 'text-[#123a1c]' : 'text-cocoa'}`}>
          {title}
        </span>
        <span className="mt-0.5 truncate text-[13px] text-ink/90 sm:text-[16px]">{subtitle}</span>
      </span>

      {/* Arrow */}
      <span
        className={`absolute right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 text-white shadow-[0_3px_8px_-2px_rgba(0,0,0,0.45)] sm:right-4 sm:h-11 sm:w-11 ${
          green ? 'bg-[#1d5a2b]' : 'bg-[#4a2c1c]'
        }`}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.4} />
      </span>
    </a>
  )
}
