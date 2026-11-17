/**
 * Central configuration for the digital visiting card.
 * Every link, number and business detail lives here.
 */

const ADDRESS = 'Raj Mandir Complex, Kuvadva Road, Rajkot – 360003'

export const business = {
  cozyHomes: {
    name: 'Cozy Homes',
    tagline: 'Furniture Experts',
    logo: '/cozy-homes-logo.png',
  },
  shreeRam: {
    name: 'Shree Ram',
    tagline: 'Hardware & Sanitary Mall',
    logo: 'https://cdn.magicpatterns.com/uploads/b8yihsmQRANCBcwcZTB3jP/image.png',
  },
  phones: ['+91 8140822281', '+91 7567493100'],
  whatsappNumber: '918140822281',
  website: 'https://www.cozyhomes.com/',
  websiteLabel: 'www.cozyhomes.com',
  instagram: 'https://www.instagram.com/cozyhomes/',
  instagramHandle: 'cozyhomes',
  /** Replace with the exact Facebook page URL when available. */
  facebook: 'https://www.facebook.com/cozyhomes',
  /** Set to the catalog PDF or link. Left empty so no fake catalog is opened. */
  catalog: '',
  address: ADDRESS,
  addressShort: 'Raj Mandir Complex, Kuvadva Road, Rajkot-360003',
  addressParts: {
    street: 'Raj Mandir Complex, Kuvadva Road',
    city: 'Rajkot',
    region: 'Gujarat',
    postalCode: '360003',
    country: 'India',
  },
}

export const links = {
  whatsapp: `https://wa.me/${business.whatsappNumber}`,
  maps: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`,
  tel: (phone: string) => `tel:${phone.replace(/\s+/g, '')}`,
}

export const images = {
  background: 'https://cdn.magicpatterns.com/patterns/generated-images/ee9e444e-c716-4cde-9136-f73d6fdbaa8e.jpg',
  dining: 'https://cdn.magicpatterns.com/patterns/generated-images/dd5c0a5c-caca-44bf-829b-c73f22f40e4e.jpg',
  phone: 'https://cdn.magicpatterns.com/patterns/generated-images/4e11ef56-fc26-4cfa-b828-d70400691402.jpg',
  bedroom: 'https://cdn.magicpatterns.com/patterns/generated-images/0095d6bf-fab7-4d40-a072-e71b95c4a4bd.jpg',
  sofa: 'https://cdn.magicpatterns.com/patterns/generated-images/d98514ac-b55e-4978-9b2d-c13a222c03c4.jpg',
  map: 'https://cdn.magicpatterns.com/patterns/generated-images/2b6f0d6a-ea4a-4ede-8d8b-a5f218dd0179.jpg',
  wood: 'https://cdn.magicpatterns.com/patterns/generated-images/c75ff87d-fe0f-4e55-baf3-7d5b74d983d0.jpg',
}
