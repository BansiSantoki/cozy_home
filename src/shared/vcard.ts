import { business } from './config'

/** Escape a vCard text value (RFC 6350 / 2426). */
function esc(value: string) {
  return value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;')
}

export function buildVCard() {
  const { cozyHomes, shreeRam, phones, website, instagram, addressParts: a } = business
  const displayName = `${cozyHomes.name} & ${shreeRam.name}`
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:;${esc(displayName)};;;`,
    `FN:${esc(displayName)}`,
    `ORG:${esc(`${cozyHomes.name} – ${cozyHomes.tagline}`)};${esc(`${shreeRam.name} – ${shreeRam.tagline}`)}`,
    'X-ABShowAs:COMPANY',
    ...phones.map((p) => `TEL;TYPE=WORK,VOICE:${p.replace(/\s+/g, '')}`),
    `URL;TYPE=WORK:${website.replace(/\/$/, '')}`,
    `URL;TYPE=Instagram:${instagram}`,
    `X-SOCIALPROFILE;TYPE=instagram:${instagram}`,
    `ADR;TYPE=WORK:;;${esc(a.street)};${esc(a.city)};${esc(a.region)};${esc(a.postalCode)};${esc(a.country)}`,
    `NOTE:${esc(`${cozyHomes.name} – ${cozyHomes.tagline}.\n${shreeRam.name} – ${shreeRam.tagline}.`)}`,
    'END:VCARD',
  ]
  return lines.join('\r\n') + '\r\n'
}

/** Download the business contact as a .vcf file (works with Android and iPhone contacts). */
export function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Cozy-Homes-Shree-Ram.vcf'
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
