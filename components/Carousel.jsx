import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [paused, setPaused] = useState(false)

  // autoplay (only when NOT paused)
  useEffect(() => {
    if (!emblaApi || paused) return

    const id = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(id)
  }, [emblaApi, paused])

  // click toggle pause/resume
  function togglePause() {
    setPaused(prev => !prev)
  }

  return (
    <div
      className="overflow-hidden cursor-pointer select-none"
      ref={emblaRef}
      onClick={togglePause}
      title={paused ? "Click to resume" : "Click to pause"}
    >
      <div className="flex gap-4">
        {images.map(img => (
          <div key={img._id} className="min-w-full flex-shrink-0">

            <div className="h-[450px] flex items-center justify-center bg-black rounded">
              <img
                src={img.url}
                alt={img.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-2 text-center">
              {img.title} {paused && "⏸"}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}