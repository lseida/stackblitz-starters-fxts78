'use client'

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function DashboardCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Calendar</h2>
      </div>
      <div className="p-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border-none"
        />
      </div>
    </div>
  )
}