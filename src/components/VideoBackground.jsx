import { useEffect, useRef } from 'react'
import coinsVideo from '../assets/coins-background.mp4'

const VideoBackground = ({ opacity = 0.15, overlay = true }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow motion for elegance
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={coinsVideo} type="video/mp4" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      )}
    </div>
  )
}

export default VideoBackground

