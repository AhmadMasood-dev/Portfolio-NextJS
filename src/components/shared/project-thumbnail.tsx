/**
 * Unique, non-generic thumbnail for each project.
 * Each design reflects the project's purpose rather than a generic gradient.
 * No images required — pure CSS/SVG.
 */

interface ProjectThumbnailProps {
  /** Zero-based index to pick the design */
  index: number
  className?: string
}

/** Real Time Message App — dark slate, chat bubble silhouettes */
function ChatThumbnail({ className }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-slate-900 ${className}`}>
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      {/* Chat bubbles */}
      <div aria-hidden className="absolute left-4 top-5 max-w-[110px] rounded-2xl rounded-tl-none bg-emerald-500/20 border border-emerald-500/25 px-3 py-2">
        <p className="text-[9px] font-medium text-emerald-400 leading-tight">Hey there! 👋</p>
        <p className="text-[8px] text-emerald-500/60 mt-0.5">Just now</p>
      </div>
      <div aria-hidden className="absolute right-4 top-12 max-w-[100px] rounded-2xl rounded-tr-none bg-slate-700 border border-slate-600 px-3 py-2">
        <p className="text-[9px] font-medium text-slate-300 leading-tight">What&apos;s up? 🔥</p>
      </div>
      <div aria-hidden className="absolute bottom-5 left-4 flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-[9px] text-slate-500">3 online</span>
      </div>
      <div aria-hidden className="absolute bottom-3 right-4 flex gap-1">
        {[14, 10, 18].map((w, i) => (
          <div key={i} className="h-1 rounded-full bg-slate-700" style={{ width: w }} />
        ))}
      </div>
    </div>
  )
}

/** Ranked Vote — dark stone, bar chart visual */
function VoteThumbnail({ className }: { className?: string }) {
  const bars = [
    { height: '65%', label: 'A', color: 'bg-amber-500' },
    { height: '90%', label: 'B', color: 'bg-amber-400' },
    { height: '45%', label: 'C', color: 'bg-amber-600/70' },
    { height: '75%', label: 'D', color: 'bg-amber-500/60' },
  ]
  return (
    <div className={`relative overflow-hidden bg-stone-900 ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(251,191,36,.6) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <div aria-hidden className="absolute inset-x-6 bottom-6 top-8 flex items-end justify-around gap-2">
        {bars.map(({ height, label, color }) => (
          <div key={label} className="flex flex-1 flex-col items-center gap-1">
            <div
              className={`w-full rounded-t-md ${color} opacity-80`}
              style={{ height }}
            />
            <span className="text-[9px] font-bold text-stone-500">{label}</span>
          </div>
        ))}
      </div>
      <div aria-hidden className="absolute top-4 left-5">
        <p className="text-[9px] font-semibold uppercase tracking-widest text-stone-600">Results</p>
      </div>
    </div>
  )
}

/** usePopcorn — dark indigo, star rating constellation */
function PopcornThumbnail({ className }: { className?: string }) {
  const stars = [true, true, true, true, false]
  return (
    <div className={`relative overflow-hidden bg-indigo-950 ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(199,210,254,.8) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Floating stars */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1.5">
            {stars.map((filled, i) => (
              <svg
                key={i}
                viewBox="0 0 24 24"
                className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-indigo-800'}`}
                fill="currentColor"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-[9px] font-semibold text-indigo-400 tracking-widest uppercase">4 / 5 stars</p>
        </div>
      </div>
      {/* Film strip dots */}
      <div aria-hidden className="absolute left-2 top-0 bottom-0 flex flex-col justify-around">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-sm bg-indigo-900" />
        ))}
      </div>
      <div aria-hidden className="absolute right-2 top-0 bottom-0 flex flex-col justify-around">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-sm bg-indigo-900" />
        ))}
      </div>
    </div>
  )
}

const thumbnails = [ChatThumbnail, VoteThumbnail, PopcornThumbnail]

export function ProjectThumbnail({ index, className = '' }: ProjectThumbnailProps) {
  const Thumb = thumbnails[index % thumbnails.length]
  return <Thumb className={className} />
}
