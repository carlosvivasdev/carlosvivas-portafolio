import { TitleSegment } from "../types"

interface AboutMeTitleProps {
  segments: TitleSegment[];
}

export function AboutMeTitle({ segments }: AboutMeTitleProps) {
  const highlighted = "bg-gradient-to-r from-[#12ACFF] to-teal-400 bg-clip-text text-transparent"
  return (
    <h2 className="font-bold text-4xl md:text-5xl mb-6 leading-tight">
      {segments.map((segment, index) => (
        <span key={index} className={segment.isHighlighted ? highlighted : ""}>
          {segment.text}
        </span>
      ))}
    </h2>
  )
}