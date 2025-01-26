import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  reviews?: number
}

export function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
          />
        ))}
      </div>
      {reviews !== undefined && <span className="text-sm text-muted-foreground">({reviews} Reviews)</span>}
    </div>
  )
}


