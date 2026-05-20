import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Carousel({ images = [] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 3000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {images.map(img => (
          <div key={img._id} className="min-w-full flex-shrink-0">
            <img src={img.url} alt={img.title} className="w-full h-64 object-cover rounded" />
            <div className="p-2 text-center">{img.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
