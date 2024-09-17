import React, { useRef } from 'react'
import { TopPart, Features, Subscriptions, TestimonialsSection } from '../components'

const Home = () => {

    const featuresRef = useRef(null)
    const subscriptionsRef = useRef(null)
    const realTimeAlertsRef = useRef(null)
    const VisaSlotBookingRef = useRef(null)

    return (
        <div>
            <TopPart
                scrollToFeatures={() => featuresRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToSubscriptions={() => subscriptionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Features
                ref={featuresRef}
                scrollToRealTime={() => realTimeAlertsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                scrollToVisaSlotBooking={() => VisaSlotBookingRef.current?.scrollIntoView({ behavior: 'smooth' })}
            />
            <Subscriptions
                ref={subscriptionsRef}
                realTimeAlertsRef={realTimeAlertsRef}
                VisaSlotBookingRef={VisaSlotBookingRef}
            />
            <TestimonialsSection />
        </div>
    )
}

export default Home