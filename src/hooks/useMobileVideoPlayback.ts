import { useEffect, RefObject } from 'react'

/**
 * Custom hook to handle video playback on mobile devices
 * Mobile browsers often prevent autoplay, so this hook attempts to play the video
 * immediately and also on user interaction
 * 
 * @param videoRef - React ref to the video element
 */
export const useMobileVideoPlayback = (videoRef: RefObject<HTMLVideoElement>) => {
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Function to attempt video playback
    const attemptPlay = async () => {
      try {
        await video.play()
      } catch (error) {
        // Autoplay failed, which is expected on mobile
        // The video will need user interaction to play
        console.log('Autoplay prevented:', error)
      }
    }

    // Try to play immediately (works on desktop)
    attemptPlay()

    // Also try to play on any user interaction
    const handleUserInteraction = () => {
      attemptPlay()
      // Remove listeners after first interaction
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }

    document.addEventListener('touchstart', handleUserInteraction, {
      passive: true
    })
    document.addEventListener('click', handleUserInteraction)

    return () => {
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('click', handleUserInteraction)
    }
  }, [videoRef])
}
