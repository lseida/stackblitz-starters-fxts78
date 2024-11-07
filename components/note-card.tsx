'use client'

interface NoteCardProps {
  title: string
  content: string
  date: Date
  color: string
  tags: string[]
}

export function NoteCard({ title, content, date, color, tags }: NoteCardProps) {
  return (
    <div className={`${color} rounded-lg p-4 shadow-sm`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{content}</p>
      <div className="text-xs text-gray-600 mb-2">
        {date.toLocaleDateString()}
      </div>
      <div className="flex flex-wrap gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-white bg-opacity-50 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}