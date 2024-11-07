'use client'

import { useState, useEffect } from 'react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { Button } from './ui/button'
import { User, Maximize, Minimize } from 'lucide-react'

export function Header() {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [username, setUsername] = useState('John Doe')

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement !== null)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  return (
    <header className="h-16 px-6 flex items-center justify-end bg-white dark:bg-gray-900 shadow-sm">
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <ThemeToggle />
        <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">{username}</span>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}