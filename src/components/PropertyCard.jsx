import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

export function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.images[0]}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-600 mt-1">${property.price.toLocaleString()}</p>
        
        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">
            {property.location.city}, {property.location.state}
          </span>
        </div>
        
        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.features.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.features.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.features.squareFeet} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}