import { ClientsList } from '@/components/clients/clients-list'

export default function ClientsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Clients</h1>
      <ClientsList />
    </div>
  )
}