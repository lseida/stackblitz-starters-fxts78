'use client'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, Plus } from 'lucide-react'

interface SearchBarProps {
  placeholder: string
  onSearch: (value: string) => void
  onAdd: () => void
}

export function SearchBar({ placeholder, onSearch, onAdd }: SearchBarProps) {
  return (
    <div className="flex space-x-2 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
        <Input
          placeholder={placeholder}
          className="pl-8"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <Button onClick={onAdd}>
        <Plus className="h-4 w-4 mr-2" />
        Add New
      </Button>
    </div>
  )
}