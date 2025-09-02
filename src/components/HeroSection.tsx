import React, { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { HeroContent } from '@/types'
import BlurText from '@/components/BlurText'
import { useMobileVideoPlayback } from '../hooks/useMobileVideoPlayback'

interface HeroSectionProps {
  heroContent: HeroContent
}

const handleAnimationComplete = () => {
  console.log('Animation completed!')
}

const handleScrollToVideo = () => {
  const videoSection = document.getElementById('video-section')
  if (videoSection) {
    videoSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroContent }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Use the mobile video playback hook
  useMobileVideoPlayback(videoRef)

  return (
    <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source
          src="https://res.cloudinary.com/dfcsaxtru/video/upload/q_50/v1754394418/HERO_PAGE_1_yvuicp.mp4"
          type="video/mp4"
        />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-sm md:max-w-5xl p-5 mx-auto mt-56  text-center">
        <BlurText
          suffix={['Africa', 'Lagos', 'Durban', 'Accra', 'Nairobi', 'Kigali']}
          cycleInterval={3000}
          text="Don’t just visit"
          bottomText="Connect with it."
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-[2.2rem] sm:text-6xl md:text-8xl text-white mb-3 mb:mb-8 tracking-tight font-medium leading-none  md:leading-tight"
        />
        <p className="text-lg text-white mb-40 md:px-20 leading-relaxed animate-fade-in max-w-3xl mx-auto tracking-wide font-light">
          {heroContent.description}
        </p>

        <div className="max-w-14 mx-auto animate-bounce duration-1000">
          <button
            onClick={handleScrollToVideo}
            aria-label="Scroll to video section"
          >
            <img src="/icons/ARROW.svg" alt="" className=" scale-125" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
