'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Search, List, Grid, Pencil, Trash2 } from 'lucide-react'
import { AddNoteDialog } from './add-note-dialog'
import { Note } from '@/types/note'

export function NotesList() {
  const { t } = useLanguage()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [notes, setNotes] = useState<Note[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isListView, setIsListView] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const handleAddNote = (note: Note) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    }
    setNotes([...notes, newNote])
    setIsDialogOpen(false)
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
    setIsDialogOpen(true)
  }

  const handleUpdateNote = (updatedNote: Note) => {
    setNotes(notes.map(note => 
      note.id === updatedNote.id ? { ...updatedNote, date: note.date } : note
    ))
    setEditingNote(null)
    setIsDialogOpen(false)
  }

  const handleDeleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId))
  }

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-96">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('search')}
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsListView(!isListView)}
          >
            {isListView ? <Grid className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </Button>
        </div>
        <Button 
          onClick={() => {
            setEditingNote(null)
            setIsDialogOpen(true)
          }}
          className="bg-black hover:bg-black/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          {t('addNote')}
        </Button>
      </div>

      {isListView ? (
        <div className="space-y-2">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: note.color }}
                />
                <div>
                  <h3 className="font-semibold">{note.title}</h3>
                  <p className="text-sm text-muted-foreground">{note.content}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {note.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-full bg-primary/10 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {new Date(note.date).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditNote(note)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="p-4 rounded-lg border relative group"
              style={{ backgroundColor: note.color }}
            >
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleEditNote(note)}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteNote(note.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="font-semibold mb-2">{note.title}</h3>
              <p className="text-sm text-muted-foreground">{note.content}</p>
              <div className="mt-2 flex gap-2 flex-wrap">
                {note.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 rounded-full bg-primary/10 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                {new Date(note.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      )}

      <AddNoteDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={editingNote ? handleUpdateNote : handleAddNote}
        initialNote={editingNote}
      />
    </div>
  )
}