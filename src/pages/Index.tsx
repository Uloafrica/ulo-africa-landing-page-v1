import React, { useRef } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import VideoShowcaseSection from '@/components/VideoShowcaseSection'
import VideoContentSection from '@/components/VideoContentSection'
import FeaturesSection from '@/components/FeaturesSection'
import BusinessShowcaseSection from '@/components/BusinessShowcaseSection'
import HowToJoinSection, {
  HowToJoinSectionRef
} from '@/components/HowToJoinSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'
import ScrollDotsSection from '@/components/ScrollDotsSection'
import AncillaryServicesShowcase from '@/components/AncillaryServicesShowcase'
import { heroContent, businessSlides, flippedSlides } from '@/data'
import MusicToggleButton from '@/components/MusicToggleButton'

const Index = () => {
  const howToJoinSectionRef = useRef<HowToJoinSectionRef>(null)
  return (
    <div className="min-h-screen bg-white">
      <Header howToJoinSectionRef={howToJoinSectionRef} />

      <div className="">
        <HeroSection heroContent={heroContent} />

        <VideoShowcaseSection heroContent={heroContent} />

        <ScrollDotsSection />

        <VideoContentSection
          title1="Hands‑Free Management"
          subtitle1="From bookings to check-outs, Ulô handles every detail. This means you earn effortlessly, while your guests enjoy a flawless stay."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200066/INTRO_HANDS-FREE_v0fw1m.mp4"
          title2="Focus on what matters most"
          subtitle2="With Ulô Associates handling the chats, check-ins, and care, hosting feels easy — and guests feel at home."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200044/CHAT_koyihu.mp4"
          listItems={[
            'Automated booking management',
            '24/7 guest communication & support',
            'Seamless check-in, check-out & cleaning'
          ]}
          sectionId="handsfree-section"
        />

        <VideoContentSection
          title1="Xperience Gallery"
          subtitle1="From vibrant cities to local secrets, Ulô uncovers it all, helping you explore, connect, and make travel unforgettable."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200081/INTRO_XPE-_1_yoovjb.mp4"
          title2="See the soul of every stay"
          subtitle2="Ulô’s Xperience Gallery reveals the unique character of every home and journey, building the trust and connection that inspires your next adventure."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200146/XPE._DEMO_FULL_li5hau.mp4"
          listItems={[
            'Explore authentic reels of vibrant cities and local secrets.',
            'Create & share your unique city story with friends and family.',
            'Feel the home’s aura through video reels before you book.'
          ]}
          sectionId="xperience-section"
        />

        <VideoContentSection
          title1="Borderless Payment"
          subtitle1="Pay with confidence. Ulô Cowries makes every transaction, from booking to last-minute extras, simple, seamless, and secure."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200048/PAYMENT_pkdt2y.mp4"
          title2="Seamless Journeys, Simple Payments"
          subtitle2="Ulô Cowries makes paying simple and worry-free. You get to pay your way, so your focus stays on the adventure, not the transaction."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200053/HOME_PAYMENT_qnvakc.mp4"
          listItems={[
            'Convert with USD valuation — 1 ACW = 1 USD',
            'Share Cowries easily with family & friends',
            'Withdraw in any African currency with ease'
          ]}
          sectionId="borderless-section"
        />

        <VideoContentSection
          title1="Ulô Associates"
          subtitle1="Join a network of trusted professionals who bring Africa closer to the world. As an Associate, you’re more than support staff — you are the face of hospitality, guiding guests, managing stays, and curating experiences that leave lasting memories."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200085/INTRO_TOUR_cycmao.mp4"
          title2="Feel the city, not the stress"
          subtitle2="With Ulô Associates, guests are welcomed like family, guided through culture and hidden gems, and supported every step for a truly effortless stay."
          video2="https://res.cloudinary.com/dfcsaxtru/video/upload/q_70/v1756200069/GUEST_TOUR_FULL_oc7fdk.mp4"
          listItems={[
            'Gain world-class training and certification',
            'Earn a substantial, flexible income',
            'Work remotely while managing stays'
          ]}
          sectionId="associates-section"
        />
        <FeaturesSection />

        {/* <BusinessShowcaseSection businessSlides={businessSlides} /> */}

        <AncillaryServicesShowcase
          slides={flippedSlides}
          sectionTitle="Go Beyond the Stay"
        />

        <VideoContentSection
          title1="Guest Handbook"
          subtitle1="Your passport to belonging. This city companion has everything you need to explore African cities with confidence, from key phrases and etiquette to safe spots and hidden secrets."
          video1="https://res.cloudinary.com/dfcsaxtru/video/upload/v1756208494/INTRO_HANDBOOK_1_et6nsp.mp4"
          listItems={[
            'Navigate easily',
            'Connect authentically',
            'Access help when needed'
          ]}
          sectionId="guestbook-section"
          isLooped={false}
        />
        <CTASection />

        <HowToJoinSection ref={howToJoinSectionRef} />

        <FAQSection />

        <Footer />
      </div>
      {/* 
      <MusicToggleButton containerClassName="fixed left-8 bottom-8 z-50 hover:opacity-100 opacity-70" /> */}
    </div>
  )
}

export default Index
