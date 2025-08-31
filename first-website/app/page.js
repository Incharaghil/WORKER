export default function Home() {
    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-green-100 flex text-center justify-start">
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

            {/* About Section */}
            <div className="text-center mt-6">
              {/* <div className="bg-orange-200 p-4 rounded 2xl"> */}
              <h2 className=" bg-orange-200 text-3xl text-black text-center mb-6 ml-200 mr-200 rounded-full">About Me</h2>
              <h3 className="text-xl text-center about-container text-black mb-7"> Selamat Datang di SIGMA BAKERY! Kami adalah toko kue rumahan yang menyediakan berbagai macam kue lezat. Di sisi, setiap harinya kue dibuat dengan menggunakan bahan-bahan terbaik. Kami menerima segala jenis pemesanan dengan desain yang dapat disesuaikan. Karena tidak ada yang lebih memuaskan dari melihat pelanggan yang tersenyum puas setelah menikmati kue buatan kami.
              </h3>
              {/* </div> */}
            </div>


            {/* Main Content */}
            <div className="bg-white p-12">
                <div className="bg-orange-100 rounded-2xl mx-auto">
                </div>
                <h2 className="bg-orange-200 text-3xl text-black text-center mb-6 ml-200 mr-200 rounded-full">Our Menu</h2>
                <div className="flex object-center">
                  <div className="ml-57 mr-50 bg-rose-200 rounded-xl">
                    <img 
                      src="https://i.pinimg.com/1200x/00/20/89/002089eec1463a41e3c93fbdb12bf56d.jpg"
                      className="w-40 h-40 rounded-full object-cover mx-auto "
                  />
                    <h3 className="text-4xl text-black">Lotus Cake</h3>
                    <h3 className="text-4xl text-black ml-12">$10</h3>
                  </div>
                  <div className="ml-62 mr-50 bg-rose-200 rounded-xl">
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
