export const CONTACT_EMAIL = 'gareykd@gmail.com'

export type ServiceItem = { name: string; price: string }

export type ServiceCategory = {
  id: string
  title: string
  description: string
  items: ServiceItem[]
}

export const SERVICES: ServiceCategory[] = [
  {
    id: 'replacement-parts',
    title: 'Replacement Parts',
    description: 'Clips, brackets, and discontinued parts for bikes, cars, and appliances.',
    items: [{ name: 'Replacement part', price: '$25 each' }],
  },
  {
    id: 'motorcycle-accessories',
    title: 'Motorcycle Accessories',
    description: 'Phone/GPS mounts and brackets.',
    items: [{ name: 'Mount or bracket', price: '$30 each' }],
  },
  {
    id: 'signage-engraving',
    title: 'Signage & Engraving',
    description: 'Nameplates, plaques, house numbers, and signs.',
    items: [
      { name: 'Nameplates and plaques', price: '$25' },
      { name: 'House numbers and small signs', price: '$40' },
      { name: 'Custom wood signs', price: '$60' },
    ],
  },
]

export const CAPABILITIES = ['3D Printing', '3D Modeling', 'CNC Machining']
