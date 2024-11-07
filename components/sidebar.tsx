'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { LayoutDashboard, FileText, Users, Package, StickyNote } from 'lucide-react'

export function Sidebar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/quotes', label: 'Cotizaciones', icon: FileText },
    { href: '/clients', label: 'Clientes', icon: Users },
    { href: '/products', label: 'Productos', icon: Package },
    { href: '/notes', label: 'Notas', icon: StickyNote },
  ]

  return (
    <div className="w-64 bg-white dark:bg-[#1E1E1E] shadow-sm">
      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
      </div>
      <nav className="p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                isActive 
                  ? "bg-black text-white dark:bg-white/10" 
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}