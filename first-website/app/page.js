export default function Home() {
    return (
        <div className="bg-amber-100">
            {/* Header */}
            <div className="bg-green-200 flex text-center justify-start">
                <img 
                    src="https://i.pinimg.com/736x/1e/a1/ac/1ea1ac0416f6fe8ebcfd6bb0fbae76c9.jpg"
                    className="w-100 h-100 rounded-full object-cover mx-auto"
                    alt="Bakery"
                />
                <div className="ml-6">
                    <h1 className="text-7xl text-black mt-30 mr-150">SIGMA BAKERY</h1>
                    <h2 className="text-4xl text-black mr-150">Homemade Cake</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-amber-50 p-12">
                <div className="bg-orange-100 rounded-2xl mx-auto">
            </div>
                <h2 className="bg-orange-200 text-3xl text-black text-center mb-6 ml-200 mr-200 rounded-full">OUR MENU</h2>
                <div className="flex object-center">
                  <div className="ml-57 mr-50 bg-rose-200 rounded-xl">
                    <img 
                      src="https://i.pinimg.com/1200x/00/20/89/002089eec1463a41e3c93fbdb12bf56d.jpg"
                      className="w-40 h-40 rounded-full object-cover mx-auto "
                  />
                    <h3 className="text-4xl text-black">Lotus Cake</h3>
                    <h3 className="text-4xl text-black ml-12">$10</h3>
                  </div>
                  <div className="ml-50 mr-50 bg-rose-200 rounded-xl">
                    <img 
                      src="https://i.pinimg.com/736x/ac/89/e6/ac89e6c0e79023b2e0684901d1992ee9.jpg"
                      className="w-40 h-40 rounded-full object-cover mx-auto"
                  />
                    <h3 className="text-4xl text-black">Strawberry Cake</h3>
                    <h3 className="text-4xl text-black ml-23">$20</h3>
                  </div>
                  <div className="ml-50 mr-50 bg-rose-200 rounded-xl">
                    <img 
                      src="https://i.pinimg.com/1200x/01/8a/43/018a4362d14d1dd33771ed0c1af60d0c.jpg"
                      className="w-40 h-40 rounded-full object-cover mx-auto"
                  />
                    <h3 className="text-4xl text-black">Peach Cake</h3>
                    <h3 className="text-4xl text-black ml-15">$15</h3>
                  </div>
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
