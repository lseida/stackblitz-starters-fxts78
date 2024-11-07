import { DashboardStats } from '@/components/dashboard/dashboard-stats'
import { DashboardCalendar } from '@/components/dashboard/dashboard-calendar'
import { RecentQuotes } from '@/components/dashboard/recent-quotes'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentQuotes />
        </div>
        <div>
          <DashboardCalendar />
        </div>
      </div>
    </div>
  )
}