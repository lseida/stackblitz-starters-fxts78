import { SearchBar } from '@/components/search-bar'

export default function CategoriesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Product Categories</h1>
      <SearchBar 
        placeholder="Search categories..."
        onSearch={(value) => console.log('Searching:', value)}
        onAdd={() => console.log('Add new category')}
      />
      {/* Categories list will go here */}
    </div>
  )
}