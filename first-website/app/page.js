export default function Home() {
    return (
        <div className="bg-amber-100">
            {/* Header */}
            <div className="bg-green-200 flex text-center justify-start">
                <img 
                     src="https://i.pinimg.com/736x/1e/a1/ac/1ea1ac0416f6fe8ebcfd6bb0fbae76c9.jpg"
                     className="w-40 h-40 rounded-full object-cover mx-auto"
                     alt="Bakery"
                />
                <div className="ml-6">
                    <h1 className="text-5xl text-black mt-10 mr-30">SIGMA BAKERY</h1>
                    <h2 className="text-xl text-black mr-30">Homemade Cake</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-amber-50 p-12">
                <div className="bg-orange-100 rounded-2xl mx-auto">
                <h2 className="text-3xl text-black text-center mb-4">About Me</h2>
                <h3 className="text-black text-center mb-8">Selamat datang di SIGMA BAKERY! Kami adalah toko kue rumahan yang menyediakan berbagai macam kue lezat. Di sini, setiap harinya kue dibuat dengan menggunakan bahan-bahan terbaik. Karema tidak ada yang lebih memuaskan dari melihat pelanggan yang tersenyum puas setelah menikmati kue buatan kami</h3>
            </div>    
                <h2 className="text-3xl text-black text-center mb-6">Our Menu</h2>
                <img 
                     src="https://i.pinimg.com/1200x/00/20/89/002089eec1463a41e3c93fbdb12bf56d.jpg"
                     className="w-40 h-40 rounded-full object-cover mx-auto "
                />
                <div className="flex object-center">
                <img 
                     src="https://i.pinimg.com/736x/ac/89/e6/ac89e6c0e79023b2e0684901d1992ee9.jpg"
                     className="w-40 h-40 rounded-full object-cover mx-auto"
                />
                <img 
                     src="https://i.pinimg.com/736x/8c/1e/7b/8c1e7b3f0a5f0e2e2f6f0e4f4d6e6e7c.jpg"
                     className="w-40 h-40 rounded-full object-cover mx-auto"
                />
                <img 
                     src="https://i.pinimg.com/1200x/01/8a/43/018a4362d14d1dd33771ed0c1af60d0c.jpg"
                     className="w-40 h-40 rounded-full object-cover mx-auto"
                />
                </div>
            </div>
        </div>
    )
}


// export default function page() {
//   return (
//     <div className="bg-amber-50">
//       {/* Heading Bar */}
//       <div>
//         <img src="https://i.pinimg.com/736x/be/d7/ca/bed7caf1e07eba9cca1a7af636e62e4e.jpg"/>
//         <div>
//           <h1 className="text-5xl text-black underline ">SIGMA BAKERY</h1>
//           <h2>Homemade Cake</h2>
//         </div>
//       </div>
//       {/* Halaman kontent */}
//       <div>
//         <h3>Our Menu</h3>
//         <ul>
//           <li>Lotus Cake</li>

//         </ul>
//       </div>

      
//     </div>
//   );
// }  
// // <div className="bg-emerald-200">
    //   <div className="">
    //     <h1 className="text-5xl">SIGMA BAKERY</h1>
    //   </div>
      
    //   <img
    //     src="https://i.pinimg.com/1200x/6b/57/b9/6b57b9b35036cbe5b917fd07f8227404.jpg"
    //     alt="Hedy Lamarr"
    //     className="photo"
    //   />
    //   <div className="text-lime-200">
    //     <h2 className="text-stone-800">About:</h2>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
    //       incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    //       exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
    //       irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    //       deserunt mollit anim id est laborum </p>

    //   </div>
    // </div>
