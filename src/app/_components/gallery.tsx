import Image from "next/image"

export function Gallery() {
    const images = [
      { src: "/placeholder.svg?height=200&width=300", alt: "Project 1" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Project 2" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Project 3" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Project 4" },
    ]
  
    return (
      <div className="grid grid-cols-2 gap-4 p-6 bg-muted">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            width={300}
            height={200}
            alt={image.alt}
            className="rounded-lg object-cover"
          />
        ))}
      </div>
    )
  }