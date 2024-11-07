'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'

const colors = [
  'bg-red-200',
  'bg-yellow-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-purple-200',
  'bg-pink-200',
]

interface NoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (note: {
    title: string
    content: string
    date: Date
    color: string
    tags: string[]
  }) => void
}

export function NoteDialog({ open, onOpenChange, onSave }: NoteDialogProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState<Date>(new Date())
  const [color, setColor] = useState(colors[0])
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const handleAddTag = () => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag])
      setTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove))
  }

  const handleSave = () => {
    onSave({ title, content, date, color, tags })
    setTitle('')
    setContent('')
    setDate(new Date())
    setColor(colors[0])
    setTags([])
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Note</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(date, 'PPP')}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex space-x-2">
            {colors.map((c) => (
              <button
                key={c}
                className={`w-6 h-6 rounded-full ${c} ${
                  color === c ? 'ring-2 ring-offset-2 ring-primary' : ''
                }`}
                onClick={() => setColor(c)}
              />
            ))}
          </div>
          <div className="space-y-2">
            <div className="flex space-x-2">
              <Input
                placeholder="Add tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
              />
              <Button onClick={handleAddTag}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-secondary rounded-full text-sm flex items-center"
                >
                  {tag}
                  <button
                    className="ml-2 text-muted-foreground hover:text-foreground"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save Note</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}