'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Note } from '@/types/note'

interface AddNoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (note: Note) => void
  initialNote?: Note | null
}

export function AddNoteDialog({ 
  open, 
  onOpenChange, 
  onSubmit,
  initialNote 
}: AddNoteDialogProps) {
  const { t } = useLanguage()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [color, setColor] = useState('#ffffff')
  const [tag, setTag] = useState('')
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    if (initialNote) {
      setTitle(initialNote.title)
      setContent(initialNote.content)
      setColor(initialNote.color)
      setTags(initialNote.tags)
    } else {
      resetForm()
    }
  }, [initialNote, open])

  const handleSubmit = () => {
    const note: Note = {
      id: initialNote?.id || '',
      title,
      content,
      date: initialNote?.date || new Date().toISOString(),
      color,
      tags
    }
    onSubmit(note)
    resetForm()
  }

  const handleAddTag = () => {
    if (tag.trim() && !tags.includes(tag.trim())) {
      setTags([...tags, tag.trim()])
      setTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove))
  }

  const resetForm = () => {
    setTitle('')
    setContent('')
    setColor('#ffffff')
    setTags([])
    setTag('')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle>
            {initialNote ? t('editNote') : t('addNote')}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            placeholder={t('noteTitle')}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder={t('noteContent')}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex gap-4">
            <Input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-12"
            />
          </div>
          <div className="flex gap-2">
            <Input
              placeholder={t('addTag')}
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
            />
            <Button onClick={handleAddTag} type="button">
              {t('addTag')}
            </Button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full bg-primary/10 text-xs flex items-center gap-1"
              >
                {tag}
                <button
                  onClick={() => handleRemoveTag(tag)}
                  className="hover:text-destructive"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {t('cancel')}
          </Button>
          <Button onClick={handleSubmit}>
            {initialNote ? t('update') : t('save')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}