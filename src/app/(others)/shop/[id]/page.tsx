// "use client"

// import Image from "next/image"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Star, Facebook, Twitter, Instagram, PinIcon as Pinterest } from "lucide-react"
// import Hero from "@/components/OthersHero"

// export default function ProductPage() {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedImage, setSelectedImage] = useState(0)

//   const images = [
//     "/food1.png",
//     "/food2.png",
//     "/food3.png",
//     "/food4.png",
//   ]

//   const similarProducts = [
//     {
//       id: 1,
//       name: "Veggie Stir Fry",
//       image: "/food1.png",
//       price: "$3.99",
//     },
//     {
//       id: 2,
//       name: "Breakfast Platter",
//       image: "/food2.png",
//       price: "$5.99",
//     },
//     {
//       id: 3,
//       name: "Burger Special",
//       image: "/food3.png",
//       price: "$6.99",
//     },
//     {
//       id: 4,
//       name: "Asian Bowl",
//       image: "/food4.png",
//       price: "$4.99",
//     },
//   ]

//   return (
//     <div>
//       <Hero heading="Shop Details" />
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-5xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
//           {/* Product Details Section */}
//           <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Image Gallery */}
//               <div className="flex gap-4">
//                 <div className="flex flex-col gap-2">
//                   {images.map((img, index) => (
//                     <button
//                       key={index}
//                       onClick={() => setSelectedImage(index)}
//                       className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === index ? "border-primary" : "border-gray-200"
//                         }`}
//                     >
//                       <Image
//                         src={img || "/placeholder.svg"}
//                         alt={`Product thumbnail ${index + 1}`}
//                         width={64}
//                         height={64}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//                 <div className="flex-1 rounded-lg overflow-hidden">
//                   <Image
//                     src={images[selectedImage] || "/placeholder.svg"}
//                     alt="Product main image"
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="flex flex-col gap-4">
//                 <h1 className="text-2xl md:text-3xl font-bold">Yummy Chicken Chup</h1>
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                   <span className="text-sm text-gray-500 ml-2">(32 reviews)</span>
//                 </div>
//                 <p className="text-3xl font-bold text-primary">$4.00</p>
//                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
//                   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//                   ea commodo consequat.</p>
//                 <div className="flex gap-4 items-center">
//                   <div className="flex items-center border rounded-md">
//                     <button
//                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                       className="px-3 py-2 border-r hover:bg-gray-100"
//                     >
//                       -
//                     </button>
//                     <Input
//                       type="number"
//                       min="1"
//                       value={quantity}
//                       onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
//                       className="w-16 text-center border-none"
//                     />
//                     <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 border-l hover:bg-gray-100">
//                       +
//                     </button>
//                   </div>
//                   <Button className="flex-1 bg-[#FF9F0D] text-white">Add to Cart</Button>
//                 </div>

//                 <div className="flex gap-2 mt-4">
//                   <h2 className="text-xl">Share: </h2>
//                   <Button className="w-8 h-8 rounded-full border border-black">
//                     <Facebook />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black">
//                     <Twitter />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black">
//                     <Instagram />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black">
//                     <Pinterest />
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="mt-8">
//               <h2 className="text-xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-600">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
//                 dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//                 ea commodo consequat.
//               </p>
//             </div>

//             {/* Similar Products */}
//             <div className="mt-12">
//               <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {similarProducts.map((product) => (
//                   <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                     <Image
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.name}
//                       width={200}
//                       height={200}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-semibold">{product.name}</h3>
//                       <p className="text-primary font-bold mt-2">{product.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }





















// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Star, Facebook, Twitter, Instagram, PinIcon as Pinterest } from "lucide-react"
// import Hero from "@/components/OthersHero"
// import { client } from "@/sanity/lib/client"  // Import the Sanity client

// // Define types for product data
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   rating: number;
//   similarProducts: {
//     id: string;
//     name: string;
//     imageUrl: string;
//     price: number;
//   }[];
// }

// export default function ProductPage({ params }: { params: { id: string } }) {
//   const [quantity, setQuantity] = useState(1)
//   const [selectedImage, setSelectedImage] = useState(0)
//   const [product, setProduct] = useState<Product | null>(null)

//   // Fetch product data from Sanity based on the ID from the URL
//   useEffect(() => {
//     const fetchProduct = async () => {
//       const query = `*[_type == "food" && _id == $id][0] {
//         _id,
//         name,
//         price,
//         description,
//         "imageUrl": image.asset->url,
//         rating,
//         "similarProducts": *[_type == "food" && category == ^.category && _id != $id]{
//           _id,
//           name,
//           "imageUrl": image.asset->url,
//           price
//         }
//       }`

//       const data = await client.fetch(query, { id: params.id })
//       setProduct(data)
//     }

//     fetchProduct()
//   }, [params.id])

//   // Handle similar products display logic
//   if (!product) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div>
//       <Hero heading="Shop Details" />
//       <div className="min-h-screen bg-gray-50 py-8">
//         <div className="max-w-5xl mx-4 sm:mx-6 md:mx-8 lg:mx-auto">
//           {/* Product Details Section */}
//           <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 lg:p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Image Gallery */}
//               <div className="flex gap-4">
//                 <div className="flex flex-col gap-2">
//                   {product.imageUrl && (
//                     <button
//                       onClick={() => setSelectedImage(0)}
//                       className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${selectedImage === 0 ? "border-primary" : "border-gray-200"}`}
//                     >
//                       <Image
//                         src={product.imageUrl}
//                         alt="Product thumbnail"
//                         width={64}
//                         height={64}
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   )}
//                   {/* You can map over additional images if you have more in Sanity */}
//                 </div>
//                 <div className="flex-1 rounded-lg overflow-hidden">
//                   <Image
//                     src={product.imageUrl || "/placeholder.svg"}
//                     alt="Product main image"
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="flex flex-col gap-4">
//                 <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
//                 <div className="flex items-center gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                   <span className="text-sm text-gray-500 ml-2">({product.rating} reviews)</span>
//                 </div>
//                 <p className="text-3xl font-bold text-primary">${product.price}</p>
//                 <p>{product.description}</p>
//                 <div className="flex gap-4 items-center">
//                   <div className="flex items-center border rounded-md">
//                     <button
//                       onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                       className="px-3 py-2 border-r hover:bg-gray-100"
//                     >
//                       -
//                     </button>
//                     <Input
//                       type="number"
//                       min="1"
//                       value={quantity}
//                       onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
//                       className="w-16 text-center border-none"
//                     />
//                     <button
//                       onClick={() => setQuantity(quantity + 1)}
//                       className="px-3 py-2 border-l hover:bg-gray-100"
//                     >
//                       +
//                     </button>
//                   </div>
//                   <Button className="flex-1 bg-[#FF9F0D] text-white hover:bg-gray-100 hover:text-[#FF9F0D] font-bold text-lg">Add to Cart</Button>
//                 </div>

//                 <div className="flex gap-2 mt-4">
//                   <h2 className="text-xl">Share: </h2>
//                   <Button className="w-8 h-8 rounded-full border border-black text-[#FF9F0D] hover:text-black hover:bg-[#FF9F0D] ">
//                     <Facebook />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black text-[#FF9F0D] hover:text-black hover:bg-[#FF9F0D] ">
//                     <Twitter />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black text-[#FF9F0D] hover:text-black hover:bg-[#FF9F0D] ">
//                     <Instagram />
//                   </Button>
//                   <Button className="w-8 h-8 rounded-full border border-black text-[#FF9F0D] hover:text-black hover:bg-[#FF9F0D] ">
//                     <Pinterest />
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="mt-8">
//               <h2 className="text-xl font-semibold mb-4">Description</h2>
//               <p className="text-gray-600">
//                 {product.description}
//               </p>
//             </div>

//             {/* Similar Products */}
//             <div className="mt-12">
//               <h2 className="text-xl font-semibold mb-6">Similar Products</h2>
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {product.similarProducts.map((similarProduct) => (
//                   <div key={similarProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
//                     <Image
//                       src={similarProduct.imageUrl || "/placeholder.svg"}
//                       alt={similarProduct.name}
//                       width={200}
//                       height={200}
//                       className="w-full h-48 object-cover"
//                        loading="lazy"
//                     />
//                     <div className="p-4">
//                       <h3 className="font-semibold">{similarProduct.name}</h3>
//                       <p className="text-primary font-bold mt-2">${similarProduct.price}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


