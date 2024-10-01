import React from 'react';

const ProductBanner = () => {
    return (
        <div className="flex items-center bg-[#90EE90] min-h-[300px] rounded-l-[100px] relative">

            {/* Text Content */}
            <div className="w-1/2 pl-16">
                <h1 className="text-4xl font-bold text-[#228B22] mb-4">
                    Right Place For <br />
                    The Right Solution
                </h1>
                <p className="text-gray-700 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut elit tellus,
                </p>
                <button className="bg-[#FFD700] hover:bg-[#DAA520] text-white font-bold py-3 px-6 rounded-full">
                    Shop Now
                </button>
            </div>
            <div className="w-1/2 relative">

                {/* Main Image */}
                <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7aq9egBNG9s5AjoeRwuxntT0j7zb9fIcVlYL4FnPj5Xsc0dpY"
                    alt="Matcha preparation"
                    className="rounded-full object-cover ml-10 transform translate-x-14 "
                    style={{ width: '350px', height: '350px' }} 
                />

                {/* Orders Delivered - Right Side Overlap */}
                <div className="absolute top-1/2 right-0 transform -translate-x-24 -translate-y-1/2 bg-white py-2 px-4 rounded-lg shadow-md">
                    <p className="text-gray-800 font-bold">9081+</p>
                    <p className="text-gray-600 text-sm">Orders Delivered</p>
                </div>

                {/* Available Products - Left Side Overlap */}
                <div className="absolute top-1/2 left-0 transform translate-x-1/2 translate-y-1/2 bg-[#FFD700] py-2 px-4 rounded-lg shadow-md">
                    <p className="text-white font-bold">11+</p>
                    <p className="text-white text-sm">Available Products</p>
                </div>

            </div>


            

        </div>
    );
};

export default ProductBanner;