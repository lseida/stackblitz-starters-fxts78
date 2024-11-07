'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Search } from '@/components/ui/search'
import { Plus } from 'lucide-react'

export function ClientsList() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleAddClient = () => {
    // Add client logic here
  }

  return (
    <div className="space-y-4 p-6">
      <div className="flex justify-between">
        <Search 
          placeholder="Search clients..." 
          value={searchQuery}
          onChange={handleSearch}
        />
        <Button onClick={handleAddClient} className="bg-black hover:bg-black/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>
      <div className="rounded-lg border">
        {/* Clients list will go here */}
        <div className="p-4 text-center text-muted-foreground">
          No clients found
        </div>
      </div>
    </div>
  )
}