
import React, { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center'
  })

  const [paused, setPaused] = useState(false)

  // Autoplay only when NOT paused
  useEffect(() => {
    if (!emblaApi || paused || images.length <= 1) return

    const id = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(id)
  }, [emblaApi, paused, images.length])

  // Click to pause or resume
  function togglePause() {
    if (images.length > 1) {
      setPaused(prev => !prev)
    }
  }

  if (!images.length) {
    return (
      <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-800 p-8 text-center text-gray-500">
        No images available.
      </div>
    )
  }

  return (
    <div className="w-full">
      <div
        className="overflow-hidden cursor-pointer select-none rounded-xl"
        ref={emblaRef}
        onClick={togglePause}
        title={paused ? 'Click to resume' : 'Click to pause'}
      >
        <div className="flex">
          {images.map(img => (
            <div
              key={img._id}
              className="min-w-0 flex-[0_0_100%] px-1"
            >
              <div className="
                w-full
                h-[250px]
                xs:h-[300px]
                sm:h-[380px]
                md:h-[450px]
                lg:h-[500px]
                flex items-center justify-center
                overflow-hidden
                rounded-xl
                bg-black
              ">
                <img
                  src={img.url}
                  alt={img.title || 'Carousel image'}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-3 text-center">
                <p className="text-sm sm:text-base font-medium break-words">
                  {img.title || 'Untitled'}
                  {paused && images.length > 1 && (
                    <span className="ml-2" aria-label="Paused">⏸</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <p className="mt-1 text-center text-xs text-gray-500">
          {paused ? '⏸ Slideshow paused — tap image to resume' : '▶ Playing — tap image to pause'}
        </p>
      )}
    </div>
  )
}
