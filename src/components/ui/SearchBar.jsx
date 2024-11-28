import React from 'react';
import { Search } from 'lucide-react';

export function SearchBar({ onSearch }) {
  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search by city, state, or zip code..."
        className="w-full px-4 py-2 pl-10 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
    </div>
  );
}