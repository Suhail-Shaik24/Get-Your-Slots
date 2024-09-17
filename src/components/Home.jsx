import React, {useRef} from 'react'
import { TopPart, Features, Subscriptions, TestimonialsSection } from '../components'

const Home = () => {

    const featuresRef = useRef(null)
    const subscriptionsRef = useRef(null)

    return (
        <div>
            <TopPart
                scrollToFeatures={()=> featuresRef.current?.scrollIntoView({behavior : 'smooth'})}
                scrollToSubscriptions={()=> subscriptionsRef.current?.scrollIntoView({behavior : 'smooth'})} 
            />
            <Features ref={featuresRef} />
            <Subscriptions ref={subscriptionsRef}/>
            <TestimonialsSection />
        </div>
    )
}

export default Home