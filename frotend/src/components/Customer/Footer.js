import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <img
                            src="https://www.payalherbal.com/wp-content/uploads/2021/07/payalherbal-1.jpg"
                            alt="Payal Herbal Logo"
                            className="h-12 w-auto"
                        />

                        <p className="mt-4 text-gray-400">
                            Grow Up Your Body With Herbal
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Shop</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Skin
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Hair
                                </a>
                            </li>
                            {/* Add more shop categories here */}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+919988774455" className="text-gray-400 hover:text-white">
                                    <i className="fas fa-phone-alt mr-2"></i>
                                    +91 9988774455
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:payalherbal@gmail.com"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <i className="far fa-envelope mr-2"></i>
                                    payalherbal@gmail.com
                                </a>
                            </li>
                            <li>
                                <p className="text-gray-400">
                                    <i className="fas fa-file-alt mr-2"></i>
                                    GST: 09ABCFP2129A1ZP
                                </p>
                            </li>
                            <li>
                                <p className="text-gray-400">
                                    <i className="fas fa-barcode mr-2"></i>
                                    IEC Code: 09ABCFP
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-400">
                        &copy; 2023 Payal Herbal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;