"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Food } from "@/types/food"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

interface ProductPaginationProps {
  products: Food[]
  itemsPerPage?: number
}

export function ProductPagination({ products, itemsPerPage = 4 }: ProductPaginationProps) {
  const [currentPage, setCurrentPage] = React.useState(0)
  const pageCount = Math.ceil(products.length / itemsPerPage)

  const currentProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {currentProducts.map((product, i) => (
          <Link
            key={i}
            href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="group relative aspect-square overflow-hidden rounded-lg border bg-muted"
          >
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-sm font-medium text-white">{product.name}</h3>
              <p className="text-sm text-white/90">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      {pageCount > 1 && (
        <div className="absolute -right-12 top-1/2 flex -translate-y-1/2 gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCurrentPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={currentPage === pageCount - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

