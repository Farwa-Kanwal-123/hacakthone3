// import type React from "react"
// import Link from "next/link"
// import { PiHandbagBold } from "react-icons/pi"
// import { useCart } from "@/contexts/CartContext"

// const CartIcon: React.FC = () => {
//   const { cartCount } = useCart()

//   return (
//     <Link href="/shopping-cart" className="relative">
//       <PiHandbagBold className="cursor-pointer text-white" />
//       {cartCount > 0 && (
//         <span className="absolute -top-2 -right-2 bg-[#FF9F0D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//           {cartCount}
//         </span>
//       )}
//     </Link>
//   )
// }

// export default CartIcon





"use client"

import type React from "react"
import Link from "next/link"
import { PiHandbagBold } from "react-icons/pi"
import { useCart } from "@/contexts/CartContext"

const CartIcon: React.FC = () => {
  const { cartCount } = useCart()

  return (
    <Link href="/shopping-cart" className="relative">
      <PiHandbagBold className="cursor-pointer text-white" />
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#FF9F0D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {cartCount}
        </span>
      )}
    </Link>
  )
}

export default CartIcon

