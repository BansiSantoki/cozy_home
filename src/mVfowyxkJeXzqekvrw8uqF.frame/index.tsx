import React from 'react'
import { BookOpen, Globe, MapPin, Phone, UserPlus } from 'lucide-react'

import { business, images, links } from '../shared/config'
import { downloadVCard } from '../shared/vcard'
import {
  BedIcon,
  FacebookIcon,
  FaucetIcon,
  InstagramIcon,
  MapsPinIcon,
  ToolsIcon,
  WardrobeIcon,
  WhatsAppIcon,
} from '../shared/components/Icons'
import { LinkCard } from './components/LinkCard'

export const args = {
  catalogUrl: '',
}

export const argTypes = {
  catalogUrl: { control: 'text' },
}

type Props = Partial<typeof args>

export default function VisitingCard(props: Props) {
  const { catalogUrl } = { ...args, ...props }
  const catalog =
    catalogUrl || business.catalog ||
    `${links.whatsapp}?text=${encodeURIComponent('Hi Cozy Homes, please share your product catalog.')}`

  return (
    <div className="relative min-h-full w-full font-sans text-ink">
      {/* Fixed background layer: stays put while the content scrolls */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[center_top] bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url(${images.background})`, backgroundSize: '100% 100%' }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,245,236,0.78)_0%,rgba(251,245,236,0.35)_28%,rgba(251,245,236,0.05)_45%,rgba(240,226,207,0.35)_70%,rgba(240,226,207,0.55)_100%)]" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-[560px] flex-col items-center overflow-x-hidden">
        {/* Logos */}
        <header className="flex w-full items-center justify-center gap-3 px-4 pt-7 sm:gap-6 sm:pt-10">
          <div className="flex min-w-0 flex-1 justify-end">
            <img
              src={business.cozyHomes.logo}
              alt="Cozy Homes – Furniture Experts"
              className="h-auto w-full max-w-[120px] mix-blend-multiply sm:max-w-[145px]"
            />
          </div>
          <div className="h-16 w-px shrink-0 bg-[#b88a5c]/70 sm:h-20" />
          <div className="flex min-w-0 flex-1 justify-start">
            <img
              src={business.shreeRam.logo}
              alt="Shree Ram – Hardware & Sanitary Mall"
              className="h-auto w-full max-w-[115px] mix-blend-multiply sm:max-w-[140px]"
            />
          </div>
        </header>

        {/* Social icons */}
        <nav aria-label="Social profiles" className="mt-5 flex items-center gap-3.5 sm:mt-6 sm:gap-5">
          <SocialLink href={business.facebook} label="Facebook">
            <FacebookIcon className="h-full w-full" />
          </SocialLink>
          <SocialLink href={business.instagram} label="Instagram">
            <InstagramIcon className="h-full w-full" />
          </SocialLink>
          <SocialLink href={links.whatsapp} label="WhatsApp">
            <WhatsAppIcon className="h-full w-full" />
          </SocialLink>
        </nav>

        {/* Room for the sofa in the background to show through */}
        <div className="h-36 sm:h-48" />

        {/* Link cards */}
        <section className="flex w-full flex-col gap-2.5 px-3.5 sm:gap-3 sm:px-5">
          <LinkCard
            href={business.website}
            title="Website"
            subtitle={business.websiteLabel}
            image={images.dining}
            icon={<Globe className="h-6 w-6 text-ink sm:h-7 sm:w-7" strokeWidth={1.6} />}
          />
          <LinkCard
            href={links.whatsapp}
            title="Chat on WhatsApp"
            subtitle="Get Instant Assistance"
            image={images.phone}
            icon={<WhatsAppIcon className="h-full w-full" />}
            bareIcon
          />
          <LinkCard
            href={business.instagram}
            title="Instagram"
            subtitle={`@${business.instagramHandle}`}
            image={images.bedroom}
            icon={<InstagramIcon className="h-full w-full" />}
            bareIcon
          />
          <LinkCard
            href={business.facebook}
            title="Facebook"
            subtitle={business.cozyHomes.name}
            image={images.sofa}
            icon={<FacebookIcon className="h-full w-full" />}
            bareIcon
          />
          <LinkCard
            href={links.maps}
            title="Our Location"
            subtitle="Visit Our Showroom"
            image={images.map}
            icon={<MapsPinIcon className="h-8 w-8 sm:h-9 sm:w-9" />}
          />
          <LinkCard
            href={catalog}
            title="Product Catalog"
            subtitle="Explore Our Range"
            image={images.wood}
            icon={<BookOpen className="h-6 w-6 text-ink sm:h-7 sm:w-7" strokeWidth={1.6} />}
          />
        </section>

        {/* Save contact */}
        <button
          type="button"
          onClick={downloadVCard}
          className="mt-5 flex items-center justify-center gap-2.5 rounded-2xl border border-white/40 bg-forest px-9 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_-6px_rgba(20,63,30,0.6)] transition-[transform,background-color] duration-150 ease-out hover:bg-forest-deep active:scale-[0.97] sm:mt-6 sm:px-12 sm:py-4 sm:text-lg"
        >
          <UserPlus className="h-5 w-5" strokeWidth={2} />
          Save Contact
        </button>

        {/* Categories */}
        <section className="mt-6 w-full bg-[linear-gradient(to_bottom,rgba(31,90,44,0)_0%,rgba(31,90,44,0.88)_22%,#1a4f26_60%,#174522_100%)] px-3 pb-12 pt-10 sm:pt-12">
          <ul className="grid grid-cols-4">
            {categories.map((c, i) => (
              <li
                key={c.title.join(' ')}
                className={`flex flex-col items-center px-1 text-center text-white ${i > 0 ? 'border-l border-white/35' : ''}`}
              >
                <c.Icon className="h-10 w-10 sm:h-12 sm:w-12" />
                <span className="mt-2 text-[12px] leading-tight font-medium sm:text-[15px]">
                  {c.title[0]}
                  <br />
                  <span className="font-normal">{c.title[1]}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact bar + address */}
        <footer className="w-full bg-[linear-gradient(to_bottom,#174522_0%,#174522_30px,rgba(251,245,236,0.92)_30px,#fbf5ec_100%)] px-2.5 pb-8 sm:px-4">
          <div className="relative -mt-6 flex items-stretch">
            <a
              href={links.tel(business.phones[0])}
              className="flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-l-full border border-r-0 border-white/70 bg-forest py-2.5 pl-2 text-[11px] font-medium text-white shadow-md sm:gap-2 sm:text-[15px]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={1.8} />
              {business.phones[0]}
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="relative -mt-2 flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap bg-clay px-5 text-[12px] font-medium text-white sm:gap-2 sm:px-8 sm:text-[16px]"
              style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 100%, 0 100%)' }}
            >
              <InstagramGlyph />
              {business.instagramHandle}
            </a>
            <a
              href={links.tel(business.phones[1])}
              className="flex min-w-0 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-r-full border border-l-0 border-white/70 bg-forest py-2.5 pr-2 text-[11px] font-medium text-white shadow-md sm:gap-2 sm:text-[15px]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={1.8} />
              {business.phones[1]}
            </a>
          </div>
          <a
            href={links.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-4 flex w-fit items-center gap-1.5 text-center text-[12px] text-ink sm:text-[15px]"
          >
            <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" strokeWidth={1.8} />
            {business.addressShort}
          </a>
        </footer>
      </main>
    </div>
  )
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-12 w-12 rounded-full border-[3px] border-white bg-white shadow-[0_6px_14px_-4px_rgba(60,35,15,0.45)] transition-transform duration-150 ease-out active:scale-95 sm:h-[60px] sm:w-[60px]"
    >
      {children}
    </a>
  )
}

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </svg>
  )
}

const categories = [
  { title: ['Home', 'Furniture'], Icon: BedIcon },
  { title: ['Modular', 'Furniture'], Icon: WardrobeIcon },
  { title: ['Hardware', 'Solutions'], Icon: ToolsIcon },
  { title: ['Sanitary', 'Products'], Icon: FaucetIcon },
]
