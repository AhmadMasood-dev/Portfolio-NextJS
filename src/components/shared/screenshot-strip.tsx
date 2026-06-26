import Image from 'next/image'

/**
 * Shows 3 vertical crops from one full-page screenshot side-by-side.
 * Works best with tall screenshots (2:1 height ratio or more).
 */

interface ScreenshotStripProps {
  /** Path to the full-page screenshot in /public */
  src: string
  alt: string
  /** Height of the strip panels. Default: h-40 */
  className?: string
}

const crops = [
  { key: 'top',    objectPosition: 'center top'  },
  { key: 'mid',    objectPosition: 'center 30%'  },
  { key: 'bottom', objectPosition: 'center 65%'  },
]

export function ScreenshotStrip({ src, alt, className = 'h-40' }: ScreenshotStripProps) {
  return (
    <div className={`flex w-full gap-1.5 ${className}`}>
      {crops.map(({ key, objectPosition }) => (
        <div
          key={key}
          className="relative flex-1 overflow-hidden rounded-lg border border-border/20"
        >
          <Image
            src={src}
            alt={`${alt} preview`}
            fill
            className="object-cover"
            style={{ objectPosition }}
            sizes="200px"
          />
        </div>
      ))}
    </div>
  )
}
