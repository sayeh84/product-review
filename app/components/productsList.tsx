'use client'

import { useEffect, useState } from 'react'
import { fetchProducts, Product } from '../services/makeup'

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow">
          <img
            src={product.image_link}
            alt={product.name}
            className="w-full h-64 object-cover rounded"
          />
          <h3 className="font-semibold mt-2">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
          <p className="mt-1 font-medium">
            {product.price} {product.price_sign}
          </p>
          <a
            href={product.product_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Se produkt
          </a>
        </div>
      ))}
    </div>
  )
}
