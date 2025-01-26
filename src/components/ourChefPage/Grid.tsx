// // import React, { ReactNode } from 'react'

// // const Grid = ({children}:{children:ReactNode}) => {
// //   return (
// //     <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]'>
// //       {children}
// //     </div>
// //   )
// // }

// // export default Grid;





// // fetch data from sanity
// import React, { ReactNode } from 'react'

// const Grid = () => {
//   return (
//     <div className='wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] space-y-1 my-[50px] md:my-[120px]'>
//      {
//       chefs.map((chef)=>{
//         return(
//           <div className='w-full lg:w-[250px] h-[430px]' key={chef.id}>
//           <div className='w-full h-[365px] flex justify-center items-center'>
//           <Image 
//             src={chef.image_Url} 
//             alt={chef.name} 
//             width={300}
//             height={300}
  
//             className="w-full h-full object-cover" 
//           />
//           </div>
//           <div className='flex flex-col items-center w-full h-[65px]'>
//            <h2 className='font-[700] text-[20px]'>{chef.name}</h2>
//            <p>{chef.position}</p>
//           </div>
//       </div>
//        )
//       })
//      }
//    </div>
//   )
// }

// export default Grid;