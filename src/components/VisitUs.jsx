import React from 'react'
import Store from './Store'
import closet from '../assets/images/closet.jpg'
import closet2 from '../assets/images/closet2.jpg'
const STORE_LIST = [
  {
    image: closet,
    name: 'Everlane Prince',
    desc: 'Our first store is here. Visit us in Nolita to shop our latest arrivals and most essential products. With our integrated I.D. system, you can return in store, shop walletless, and apply any existing credits to your purchase.',
    descriptionAdditional: 'Stay tuned for community events, educational panels, and more.',
    location: [
      {
        street: '28 Prince St.',
        cityStateZip: 'New York, NY 10012',
        mapLink: 'See Map'
      }
    ],
    hours: [
      {
        hours1: 'Monday–Friday: 11am–8pm',
        hours2: 'Saturday: 10am–7pm',
        hours3: 'Sunday: 11am–6pm'
      }
    ],
    services: [
      {
        name: '1-Hour Styling Sessions',
        description: 'Book your appointment to shop with an Everlane Ambassador and we’ll help you find your new favorite looks.',
        days: 'Monday-Thursday',
        hours: '9am-1pm'
      }
    ]
  },
  {
    image: closet2,
    name: 'Valencia',
    desc: 'Come say hello at our SF flagship, located in the heart of the Mission. From shopping our latest collections to learning the stories behind our products, theres a lot to explore at our Valencia store. Visit our Returns Bar to make a return, or browse our entire collection online at our Search Bar.',
    descriptionAdditional: '',
    location: [
      {
        street: '461 Valencia St.',
        cityStateZip: 'San Francisco, CA 94103',
        mapLink: 'See Map'
      }
    ],
    hours: [
      {
        hours1: 'Monday–Saturday: 11am–8pm',
        hours2: 'Sunday: 11am–7pm',
        hours3: ''
      }
    ],
    services: [
      {
        name: 'Cut The Line',
        description: 'Don’t have time to wait? Book your early access spot* at our Valencia store and get in before the crowds.',
        days: 'Friday–Monday',
        hours: '9:30am–10:30am'
      }
    ]
  }
]

function VisitUs() {
  return (
    <div>
      {STORE_LIST.map((store, index) =>
        <Store image={store.image}
          name={store.name}
          desc={store.desc}
          descriptionAdditional= {store.descriptionAdditional}
          location={store.location}
          hours={store.hours}
          services={store.services}
          key={index}/>
      )}
    </div>
  )
}

export default VisitUs
